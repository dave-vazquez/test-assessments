import "./styles/respondent-table.scss";

import _ from "lodash";
import React, { useMemo } from "react";
import { useSortBy, useTable } from "react-table";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StudentTable = (props) => {
  const { respondents, choices, students } = props;

  const data = useMemo(() => {
    return _.map(respondents, ({ studentId, choiceId }) => {
      const student = students[studentId];
      const choice = choices[choiceId];

      return {
        col1: student.name,
        col2: choice.num,
        col3: (
          <FontAwesomeIcon
            correct={choice.isAnswer.toString()}
            icon={choice.isAnswer ? faCheck : faTimes}
            color={choice.isAnswer ? "green" : "red"}
          />
        ),
      };
    });
  }, []);

  const columns = useMemo(() => {
    return [
      {
        Header: "Student",
        accessor: "col1",
      },
      {
        Header: "Choice",
        accessor: "col2",
      },
      {
        Header: "Correct",
        accessor: "col3",
      },
    ];
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps(() => column.getSortByToggleProps())}
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
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StudentTable;
