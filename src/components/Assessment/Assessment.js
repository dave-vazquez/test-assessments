import "./styles/assessment.scss";

import React from "react";
import coverImg from "../../assets/assessment-cover.jpg";
import { default as assessment } from "../../mock/assessment-data.json";
import AssessmentResults from "./AssessmentResults";

const Assessment = () => {
  return (
    <div className="overlay">
      <section className="assessment-modal">
        <header>
          <h1>Assessment Report</h1>
          <img src={coverImg} alt="assessment cover" />
          <div>
            <p className="title">{assessment.title}</p>
            <p>
              Author: {assessment.author} - Questions:{" "}
              {assessment.questionCount} - Date: {assessment.date}{" "}
              {assessment.time}
            </p>
          </div>
        </header>
        <AssessmentResults assessment={assessment} />
      </section>
    </div>
  );
};

export default Assessment;
