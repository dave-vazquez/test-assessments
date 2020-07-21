import "./styles/analysis.scss";

import _ from "lodash";
import React from "react";
import StudentTable from "./StudentTable";
import Doughnut from "./graphs/Doughnut";

const Analysis = (props) => {
  const {
    question: { id, text, choices, respondents, totals },
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
          {_.map(choices, (choice, i) => {
            return (
              <li key={i} className={`${choice.isAnswer ? "correct" : ""}`}>
                {choice.text}
              </li>
            );
          })}
        </ol>
      </header>
      <div className="student-breakdown">
        <StudentTable
          respondents={respondents}
          choices={choices}
          students={students}
        />
        <Doughnut totals={totals} />
      </div>
    </section>
  );
};

export default Analysis;
