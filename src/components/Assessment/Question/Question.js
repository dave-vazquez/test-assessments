import "./styles/analysis.scss";

import _ from "lodash";
import React from "react";
import Doughnut from "../Graphs/Doughnut";
import StudentTable from "./StudentTable";

const Question = (props) => {
  const {
    question: { id, prompt, question, choices, respondents, totals },
    students,
  } = props;

  return (
    <section className="analysis">
      <header>
        <h2>Question {id + 1}</h2>
        <p>{prompt}</p>
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

export default Question;
