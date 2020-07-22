import "./styles/analysis.scss";

import _ from "lodash";
import React from "react";
import Doughnut from "../Graphs/Doughnut";
import StudentTable from "./StudentTable";

const Analysis = (props) => {
  const {
    question: { id, prompt, question, choices, respondents, totals },
    students,
  } = props;

  return (
    // TODO: just make the question prompt a <p> and limit the width..
    // it'll remove any need for mapping...
    <section className="analysis">
      <header>
        <h2>Question {id + 1}</h2>
        <p>
          {prompt.map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <p>
          <br />
          {question}
        </p>
        <br />
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
