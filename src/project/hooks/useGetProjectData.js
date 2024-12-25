import { useState, useEffect } from "react";

export const useGetProjectData = () => {
  const [projects, setProjects] = useState([]);
  const [projectsToBeRendered, setProjectsToBeRendered] = useState([]);
  const [pages, setPages] = useState([]);
  const [activePage, setActivePage] = useState(1);

  const projectsToRenderInPage = 5;

  const getProjectsToBeRendered = () => {
    const start = (activePage - 1) * projectsToRenderInPage;
    const end = start + projectsToRenderInPage;
    return projects.slice(start, end);
  };

  const fetchData = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
    );
    const data = await response.json();

    const projectsCount = data?.length;
    const totalPages = Math.ceil(projectsCount / projectsToRenderInPage);
    const pagesPresent = [...Array(totalPages).keys()].map((i) => i + 1);
    setPages(pagesPresent);

    setProjects(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (projects?.length > 0) {
      const activeProjects = getProjectsToBeRendered();
      setProjectsToBeRendered(activeProjects);
    }
  }, [activePage, projects?.length]); // eslint-disable-line

  return { projects: projectsToBeRendered, pages, activePage, setActivePage };
};
