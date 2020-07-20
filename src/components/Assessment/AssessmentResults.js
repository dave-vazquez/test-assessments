import "./styles/assessment-results.scss";

import _ from "lodash";
import React from "react";
import { Link, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Analysis from "./Analysis";

const AssessmentResults = (props) => {
  const { questions, students } = props.assessment;

  return (
    <Router>
      <section className="assessment-results">
        <header>
          <h2>Results</h2>
        </header>
        <div>
          <nav>
            <Link to="/summary">Summary</Link>
            {_.map(questions, (question) => {
              return (
                <Link key={question.id} to={`/${question.id}`}>
                  Question {question.id + 1}
                </Link>
              );
            })}
          </nav>
          {_.map(questions, (question) => {
            return (
              <Route
                key={question.id}
                path={`/${question.id}`}
                render={(props) => (
                  <Analysis
                    {...props}
                    question={question}
                    students={students}
                  />
                )}
              />
            );
          })}
        </div>
      </section>
    </Router>
  );
};

export default AssessmentResults;
