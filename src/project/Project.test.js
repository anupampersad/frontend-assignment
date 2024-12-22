// Projects.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Project from "./index"; // Assuming the component is named Projects
import { useGetProjectData } from "./hooks/useGetProjectData"; // Import the hook

// Mocking the useGetProjectData hook
jest.mock("./hooks/useGetProjectData");

describe("Projects Component", () => {
  // Setup mock data
  const mockProjectsData = [
    { "s.no": 1, "percentage.funded": 186, "amt.pledged": 15823 },
    { "s.no": 2, "percentage.funded": 8, "amt.pledged": 6859 },
    { "s.no": 3, "percentage.funded": 102, "amt.pledged": 17906 },
  ];
  const mockPages = [4, 5, 6];
  const mockSetActivePage = jest.fn();

  beforeEach(() => {
    useGetProjectData.mockReturnValue({
      projects: mockProjectsData,
      pages: mockPages,
      activePage: 4,
      setActivePage: mockSetActivePage,
    });
  });

  test("should render the project table correctly", () => {
    render(<Project />);

    // Check if the table headers are rendered
    expect(screen.getByText("S.No.")).toBeInTheDocument();
    expect(screen.getByText("Percentage funded")).toBeInTheDocument();
    expect(screen.getByText("Amount pledged")).toBeInTheDocument();
  });

  test("should render pagination buttons correctly", () => {
    render(<Project />);

    // Check if pagination buttons are rendered
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();
  });

  test("should highlight the active page with green color and underline", () => {
    render(<Project />);

    const activePageButton = screen.getByText("4");

    // Check if the active page has the correct style
    expect(activePageButton).toHaveStyle("--font-color: green");
    expect(activePageButton).toHaveStyle("--text-decoration: underline");
  });

  test("should change active page when clicked", () => {
    render(<Project />);

    const pageButton = screen.getByText("5");
    fireEvent.click(pageButton);

    // Check if setActivePage is called with correct value
    expect(mockSetActivePage).toHaveBeenCalledWith(5);
  });
});
