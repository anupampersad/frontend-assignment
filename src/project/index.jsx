import React from "react";

import Table from "./components/table";
import Navigation from "./components/navigation";

import { useGetProjectData } from "./hooks/useGetProjectData";

import "./styles.css";

const Projects = () => {
  const { projects, pages, activePage, setActivePage } = useGetProjectData();

  return (
    <>
      <div className="wrapper">
        <div className="heading">Projects</div>
        <Table
          headings={["S.No.", "Percentage funded", "Amount pledged"]}
          tableData={projects}
        />
      </div>
      <Navigation pages={pages} activePage={activePage} setActivePage={setActivePage}/>
    </>
  );
};

export default Projects;
