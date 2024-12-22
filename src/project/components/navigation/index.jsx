import React from "react";
import "./styles.css";

const Navigation = ({ pages, setActivePage, activePage }) => {
  return (
    <div className="navigation">
      {pages.map((p) => (
        <div
          className="navigation-cell"
          style={{
            "--font-color": p === activePage ? "green" : "black",
            "--text-decoration": p === activePage ? "underline" : "unset",
          }}
          onClick={() => {
            setActivePage(p);
          }}
          key={p}
        >
          {p}
        </div>
      ))}
    </div>
  );
};

export default Navigation;
