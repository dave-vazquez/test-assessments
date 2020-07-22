import "./styles/summary.scss";

import React from "react";
import HorizontalBar from "../Graphs/HorizontalBar";

const Summary = (props) => {
  const { students } = props;

  return (
    <section className="class-summary">
      <header>
        <h2>Summary</h2>
      </header>
      <div className="class-performance">
        <HorizontalBar students={students} />
      </div>
    </section>
  );
};

export default Summary;
