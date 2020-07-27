import "./styles/lesson-scheduler.scss";

import React from "react";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "../../../variables.scss";

const Scheduler = () => {
  const handleSubmit = () => {
    alert("Opens selected calendar application to complete schedule process.");
  };

  const handleClick = () => {
    alert("Opens Lesson Preview in separate window");
  };

  return (
    <section className="scheduler">
      <form onSubmit={handleSubmit}>
        <div className="suggested-lessons">
          <h2>Suggested Lessons</h2>
          <p>
            <input type="radio" id="cal1" />
            <label for="cal1">Making Inferences: Informational Texts I</label>
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              icon={faExternalLinkAlt}
              size="lg"
              color={colors.lightBlue}
              onClick={handleClick}
            />
          </p>
          <p>
            <input type="radio" id="cal1" />
            <label for="cal1">Making Inferences: Informational Texts II</label>
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              icon={faExternalLinkAlt}
              size="lg"
              color={colors.lightBlue}
              onClick={handleClick}
            />
          </p>
          <p>
            <input type="radio" id="cal1" />
            <label for="cal1">Making Inferences: Informational Texts III</label>
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              size="lg"
              color={colors.lightBlue}
              onClick={handleClick}
            />
          </p>
          <p>
            <input type="radio" id="cal1" />
            <label for="cal1">Making Inferences: Informational Texts IV</label>
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              icon={faExternalLinkAlt}
              size="lg"
              color={colors.lightBlue}
              onClick={handleClick}
            />
          </p>
          <p>
            <input type="radio" id="cal1" />
            <label for="cal1">Making Inferences: Informational Texts V</label>
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              icon={faExternalLinkAlt}
              size="lg"
              color={colors.lightBlue}
              onClick={handleClick}
            />
          </p>
        </div>
        <hr />
        <div className="calendar">
          <h2>Calendar</h2>
          <div>
            <div className="date-time">
              <p>
                <label>Date</label>
                <input type="date"></input>
              </p>
              <p>
                <label>Time</label>
                <input type="time"></input>
              </p>
            </div>
            <div className="calendar-type">
              <h3>Calendar</h3>
              <p>
                <input type="radio" id="cal1" />
                <label for="cal1">Google Calendar </label>
              </p>
              <p>
                <input type="radio" id="cal2" />
                <label for="cal1">iCal</label>
              </p>
              <p>
                <button type="submit">Schedule</button>
              </p>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Scheduler;
