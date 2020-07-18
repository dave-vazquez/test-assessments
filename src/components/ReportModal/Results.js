import React from "react";
import { Link } from "react-router-dom";
import ResultsContainer from "./styles/ResultsContainer";
import SideNav from "./styles/SideNav";

const Results = () => {
  return (
    <ResultsContainer>
      <h1>Results</h1>
      <SideNav>
        <Link>Link</Link>
      </SideNav>
    </ResultsContainer>
  );
};

export default Results;
