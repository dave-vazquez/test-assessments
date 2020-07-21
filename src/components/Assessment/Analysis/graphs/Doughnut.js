import "./styles/doughnut.scss";

import React from "react";
import { Doughnut as CJSDoughnut } from "react-chartjs-2";

const Doughnut = (props) => {
  const totals = props.totals;

  const data = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        data: [totals.correct, totals.incorrect],
        backgroundColor: ["#4CD000", "#ff0000"],
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
    </div>
  );
};

export default Doughnut;
