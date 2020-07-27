import "./styles/summary.scss";

import _ from "lodash";
import React, { useLayoutEffect, useMemo, useState } from "react";
import HorizontalBar from "../Graphs/HorizontalBar";
import Scheduler from "../Scheduler/Scheduler";
import GroupTable from "./GroupTable";

const Summary = (props) => {
  const { students } = props;

  const [groups, setGroups] = useState([]);
  const [selectedBracket, setSelectedBracket] = useState("All");
  const [viewScheduler, setViewScheduler] = useState(false);

  const groupedStudents = useMemo(() => {
    return _.groupBy(students, (student) => {
      if (student.score > 80) return "High";
      if (student.score > 60) return "Mid";
      return "Low";
    });
  }, [students]);

  useLayoutEffect(() => {
    if (selectedBracket === "All") setGroups(groupedStudents);
    else setGroups({ [selectedBracket]: groupedStudents[selectedBracket] });
  }, [selectedBracket, groupedStudents]);

  const scheduleNewLesson = (bracket) => {
    setSelectedBracket(bracket);
    setViewScheduler(true);
  };

  return (
    <section className="summary">
      <header>
        <h2>{viewScheduler ? "New Lesson" : "Summary"}</h2>
      </header>
      <div className="performance-overview">
        {!viewScheduler && <HorizontalBar students={students} />}
        <div className="student-groups">
          {_.map(groups, (group, bracket) => (
            <GroupTable
              key={bracket}
              group={group}
              bracket={bracket}
              scheduleNewLesson={scheduleNewLesson}
              viewScheduler={viewScheduler}
            />
          ))}
          {viewScheduler && <Scheduler />}
        </div>
      </div>
    </section>
  );
};

export default Summary;
