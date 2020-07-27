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
    <section className="lesson-scheduler">
      <form onSubmit={handleSubmit}>
        <div className="suggested-lessons">
          <h2 className="suggested-lessons">Suggested Lessons</h2>
          <div className="lessons">
            <div>
              <input type="radio" id="cal1" />
              <label for="cal1">Making Inferences: Informational Texts I</label>
              <FontAwesomeIcon
                style={{ cursor: "pointer" }}
                icon={faExternalLinkAlt}
                size="lg"
                color={colors.lightBlue}
                onClick={handleClick}
              />
            </div>
            <div>
              <input type="radio" id="cal1" />
              <label for="cal1">
                Making Inferences: Informational Texts II
              </label>
              <FontAwesomeIcon
                style={{ cursor: "pointer" }}
                icon={faExternalLinkAlt}
                size="lg"
                color={colors.lightBlue}
                onClick={handleClick}
              />
            </div>
            <div>
              <input type="radio" id="cal1" />
              <label for="cal1">
                Making Inferences: Informational Texts III
              </label>
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                size="lg"
                color={colors.lightBlue}
                onClick={handleClick}
              />
            </div>
            <div>
              <input type="radio" id="cal1" />
              <label for="cal1">
                Making Inferences: Informational Texts IV
              </label>
              <FontAwesomeIcon
                style={{ cursor: "pointer" }}
                icon={faExternalLinkAlt}
                size="lg"
                color={colors.lightBlue}
                onClick={handleClick}
              />
            </div>
            <div>
              <input type="radio" id="cal1" />
              <label for="cal1">Making Inferences: Informational Texts V</label>
              <FontAwesomeIcon
                style={{ cursor: "pointer" }}
                icon={faExternalLinkAlt}
                size="lg"
                color={colors.lightBlue}
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
        <hr className="scheduler-hr" />
        <div className="date-time">
          <div>
            <div>
              <label>Date</label>
              <input type="date"></input>
            </div>
            <div>
              <label>Time</label>
              <input type="time"></input>
            </div>
          </div>
          <div className="calendar">
            <label>Calendar</label>
            <div>
              <input type="radio" id="cal1" />
              <label for="cal1">Google Calendar </label>
            </div>
            <div>
              <input type="radio" id="cal2" />
              <label for="cal1">iCal</label>
            </div>
          </div>
        </div>
        <button type="submit">Schedule</button>
      </form>
    </section>
  );
};

export default Scheduler;
