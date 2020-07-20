import "./styles/analysis.scss";

import _ from "lodash";
import React from "react";
import Doughnut from "./graphs/Doughnut";

const Analysis = (props) => {
  const {
    question: { id, type, text, choices, respondents, totals },
    students,
  } = props;

  const parseQuestionText = (text) => {
    return text.map((line, i) => (
      <span key={i}>
        {line}
        {i !== text.length - 1 && (
          <>
            <br />
            <br />
          </>
        )}
      </span>
    ));
  };

  return (
    <section className="analysis">
      <header>
        <h2>Question {id + 1}</h2>
        <p>{parseQuestionText(text)}</p>
        <ol>
          {_.map(choices, (choice) => {
            return (
              <li
                key={choice.id}
                style={{
                  backgroundColor: choice.isAnswer
                    ? "#4CD00077"
                    : "transparent",
                }}
              >
                {choice.text}
              </li>
            );
          })}
        </ol>
      </header>
      <div className="student-breakdown">
        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Choice</th>
            </tr>
          </thead>
          <tbody>
            {_.map(respondents, ({ studentId, choiceId }) => {
              const student = students[studentId];
              const choice = choices[choiceId];
              return (
                <tr
                  key={studentId}
                  style={{
                    color: !choice.isAnswer ? "#ff0000" : "#000",
                  }}
                >
                  <td>{student.name}</td>
                  <td>{choice.num}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Doughnut totals={totals} />
      </div>
    </section>
  );
};

export default Analysis;
