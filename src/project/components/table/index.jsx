import React from "react";
import "./styles.css";

const Table = ({ headings, tableData }) => {
  return (
    <table className="table">
      <tbody>
        <tr>
          {headings?.map((h) => {
            return <th className="cell">{h}</th>;
          })}
        </tr>

        {tableData?.map((p, idx) => {
          return (
            <tr
              style={{
                "--background": idx % 2 === 0 ? "#f0f2f2" : "white",
              }}
              className="table-row"
              key={p?.["s.no"]}
            >
              <td className="cell">{p?.["s.no"]}</td>
              <td className="cell">{p?.["percentage.funded"]}</td>
              <td className="cell">{p?.["amt.pledged"]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
