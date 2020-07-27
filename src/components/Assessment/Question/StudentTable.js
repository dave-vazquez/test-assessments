import "./styles/student-table.scss";

import _ from "lodash";
import React, { useMemo } from "react";
import { useSortBy, useTable } from "react-table";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "../../../variables.scss";

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
            value={choice.isAnswer}
            icon={choice.isAnswer ? faCheck : faTimes}
            color={choice.isAnswer ? "green" : "red"}
          />
        ),
      };
    });
  }, [respondents, choices, students]);

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
        sortType: (rowA, rowB) => {
          const val1 = rowA.values.col3.props.value;
          const val2 = rowB.values.col3.props.value;

          if (val1 < val2) return -1;
          if (val1 > val2) return 1;

          return 0;
        },
      },
    ];
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    getRowProps = (row) => {
      const isCorrect = row.values.col3.props.value;

      return {
        style: {
          background: isCorrect ? colors.correctFaded : colors.incorrectFaded,
        },
      };
    },
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  return (
    <table {...getTableProps()} className="student-table">
      <thead>
        {headerGroups.map((headerGroup, i) => (
          <tr key={i} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, i) => (
              <th
                key={i}
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
  );
};

export default StudentTable;
