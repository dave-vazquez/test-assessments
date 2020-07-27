import "./styles/doughnut.scss";

import React from "react";
import { Doughnut as CJSDoughnut } from "react-chartjs-2";
import colors from "../../../variables.scss";

const Doughnut = (props) => {
  const totals = props.totals;

  const data = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        data: [totals.correct, totals.incorrect],
        backgroundColor: [colors.correct, colors.incorrect],
        options: {
          tooltipTemplate:
            "<%if (label){%><%=label %>: <%}%><%= value + ' %' %>",
        },
      },
    ],
  };

  return (
    <div className="doughnut">
      <CJSDoughnut data={data} />
      <div>
        <span className="correct">{totals.correct}% Correct</span>
        <span className="incorrect">{totals.incorrect}% Incorrect</span>
      </div>
    </div>
  );
};

export default Doughnut;
