import React from "react";
import styled from "styled-components";

const ReportModal = () => {
  return (
    <ReportsOverlay>
      <div className="report-modal"></div>
    </ReportsOverlay>
  );
};

const ReportsOverlay = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  position: absolute;

  width: 100%;
  height: 100vh;

  background-color: #152d39;
  opacity: 0.9;

  div.report-modal {
    width: 96rem;
    height: 80rem;

    background: #f3eeee;
    opacity: 1;
    z-index: 999;

    border-radius: 15px;
  }
`;

export default ReportModal;
