import React from "react";
import "./styles.css";

const NavTab = ({ p, clickHandler, activePage }) => {
  return (
    <div
      className="navTab"
      onClick={() => {
        clickHandler();
      }}
      style={{
        "--tab-background-color": activePage === p ? "green" : "white",
        "--tab-font-color": activePage === p ? "white" : "black",
      }}
    >
      {p}
    </div>
  );
};

const Navigation = ({ pages, setActivePage, activePage }) => {
  const prevPageAvailable = activePage !== pages[0];
  const nextPageAvailable = activePage !== pages[pages.length - 1];

  const rangePreset = 4;

  const showInitalRangeSelector = activePage >= rangePreset;
  const showLastRangeSelector = activePage < pages?.length - rangePreset + 1;

  const showInitialPagesList = activePage < rangePreset;
  const showMidRangePagesList =
    showInitalRangeSelector && showLastRangeSelector;
  const showLastPagesList = activePage >= pages?.length - rangePreset + 1;

  return (
    <div className="navigation">
      <div
        onClick={() => {
          if(prevPageAvailable){
            setActivePage(activePage - 1);
          }
        }}
        className="backNextTab"
        style={{ "--nav-tab-color": prevPageAvailable ? "black" : "grey" }}
      >
        <span>⬅</span>
        <span>Back</span>
      </div>

      <NavTab
        p={1}
        clickHandler={() => setActivePage(1)}
        activePage={activePage}
      />
      {showInitalRangeSelector && (
        <div
          className="navTab"
          onClick={() => {
            if (activePage <= 4) {
              setActivePage(1);
            } else {
              setActivePage(activePage - 4);
            }
          }}
          style={{ "--tab-background-color": "#f1f1f1" }}
        >
          ...
        </div>
      )}
      {showInitialPagesList &&
        pages.slice(1, rangePreset).map((p) => {
          return (
            <NavTab
              p={p}
              clickHandler={() => setActivePage(p)}
              activePage={activePage}
            />
          );
        })}
      {showMidRangePagesList &&
        pages.slice(activePage - 3, activePage + 2).map((p) => {
          return (
            <NavTab
              p={p}
              clickHandler={() => setActivePage(p)}
              activePage={activePage}
            />
          );
        })}
      {showLastRangeSelector && (
        <div
          className="navTab"
          onClick={() => {
            if (activePage >= pages?.length - rangePreset + 1) {
              setActivePage(1);
            } else {
              setActivePage(activePage + 4);
            }
          }}
          style={{ "--tab-background-color": "#f1f1f1" }}
        >
          ...
        </div>
      )}
      {showLastPagesList &&
        pages.slice(-rangePreset, -1).map((p) => {
          return (
            <NavTab
              p={p}
              clickHandler={() => setActivePage(p)}
              activePage={activePage}
            />
          );
        })}
      <NavTab
        p={pages[pages.length - 1]}
        clickHandler={() => setActivePage(pages[pages.length - 1])}
        activePage={activePage}
      />

      <div
        onClick={() => {
          if (nextPageAvailable) {
            setActivePage(activePage + 1);
          }
        }}
        className="backNextTab"
        style={{ "--nav-tab-color": nextPageAvailable ? "black" : "grey" }}
      >
        <span>Next</span>
        <div style={{ transform: "rotate(180deg)", display: "inline-block" }}>
          ⬅︎
        </div>
      </div>
    </div>
  );
};

export default Navigation;
