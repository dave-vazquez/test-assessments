import "./styles/assessment-results.scss";

import _ from "lodash";
import React from "react";
import { Link, Route } from "react-router-dom";
import Analysis from "./Analysis/Analysis";
import Summary from "./Summary/Summary";

const AssessmentResults = (props) => {
  const { questions, students, scores } = props.assessment;

  return (
    <section className="assessment-results">
      <header>
        <h2>Results</h2>
      </header>
      <div>
        <nav>
          <Link to="/">Summary</Link>
          {_.map(questions, (question) => {
            return (
              <Link key={question.id} to={`/${question.id}`}>
                Question {question.id + 1}
              </Link>
            );
          })}
        </nav>
        <Route
          exact
          path="/"
          render={(props) => (
            <Summary {...props} students={students} scores={scores} />
          )}
        />
        {_.map(questions, (question) => {
          return (
            <Route
              key={question.id}
              path={`/${question.id}`}
              render={(props) => (
                <Analysis {...props} question={question} students={students} />
              )}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AssessmentResults;
