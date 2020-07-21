import "./styles/horizontal-bar.scss";

import _ from "lodash";
import React from "react";
import { HorizontalBar as CJSHorizontalBar } from "react-chartjs-2";

const HorizontalBar = (props) => {
  const { students } = props;

  const mapGradient = (prct) => {
    const red = Math.round(15 * (100 - prct));
    const green = Math.round(2.5 * prct);

    return `rgba(${red}, ${green}, 0)`;
  };

  const data = {
    labels: _.map(students, (student) => student.name),
    datasets: [
      {
        data: _.map(students, (student) => student.score),
        backgroundColor: _.map(students, (student) =>
          mapGradient(student.score)
        ),
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      xAxes: [
        {
          display: true,
          ticks: {
            min: 0,
            max: 100,
          },
        },
      ],
      yAxes: [
        {
          display: true,
          ticks: {
            fontSize: 14,
            fontWeight: 700,
            fontColor: "#000",
          },
        },
      ],
    },
  };

  return (
    <div className="horizontal-bar">
      <CJSHorizontalBar data={data} height={100} options={options} />
    </div>
  );
};

export default HorizontalBar;
