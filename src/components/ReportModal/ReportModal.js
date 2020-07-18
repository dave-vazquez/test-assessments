import React from "react";
import coverImg from "../../assets/assessment-cover.jpg";
import Results from "./Results";
import Modal from "./styles/Modal";
import Overlay from "./styles/Overlay";

const ReportModal = () => {
  return (
    <Overlay>
      <Modal>
        <header>
          <h1>Assessment Report</h1>
        </header>
        <section className="assessment-details">
          <img src={coverImg} alt="assessment cover image" />
          <div className="details">
            <p className="title">Inferencing</p>
            <p>
              Author: Dave Vazquez - Questions: 8 - Date: Thursday, July 16,
              2020 1:30:15 PM
            </p>
          </div>
        </section>
        <Results />
      </Modal>
    </Overlay>
  );
};

export default ReportModal;
