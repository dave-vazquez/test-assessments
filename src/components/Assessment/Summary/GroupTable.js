import "./styles/group-table.scss";

import _ from "lodash";
import React, { useMemo } from "react";
import { useSortBy, useTable } from "react-table";

const mapGradient = (prct) => {
  const red = Math.round(15 * (100 - prct));
  const green = Math.round(2.5 * prct);

  return `rgba(${red}, ${green}, 0)`;
};

const GroupTable = (props) => {
  const { group, bracket, scheduleNewLesson, viewScheduler } = props;

  const data = useMemo(() => {
    return _.map(group, (student) => {
      return {
        col1: student.name,
        col2: student.score + "%",
      };
    });
  }, [group]);

  const columns = useMemo(() => {
    return [
      {
        Header: "Student",
        accessor: "col1",
      },
      {
        Header: "Score",
        accessor: "col2",
      },
    ];
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    getRowProps = (row) => {
      const score = Number(row.values.col2.slice(0, -1));

      return {
        style: {
          background: mapGradient(score),
        },
      };
    },
    prepareRow,
    headerGroups,
    rows,
  } = useTable({ columns, data }, useSortBy);

  return (
    <section>
      <header className="bracket">
        <h2>{bracket}</h2>
        {!viewScheduler && (
          <button onClick={() => scheduleNewLesson(bracket)}>
            Schedule New Lesson
          </button>
        )}
      </header>
      <table {...getTableProps()} className="group-table">
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr key={i} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                <th
                  key={i}
                  {...column.getHeaderProps(() =>
                    column.getSortByToggleProps()
                  )}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr key={i} {...row.getRowProps(getRowProps(row))}>
                {row.cells.map((cell, i) => {
                  return (
                    <td key={i} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default GroupTable;
