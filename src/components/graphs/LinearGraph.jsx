import React from "react";
import { Line } from "react-chartjs-2";
import{ Chart as ChartJS} from "chart.js/auto"
function LinearGraph({charDate,option}) {
  return (
    <>
    <div className="header-graph-line">
      <p>Balance summary</p>
      <ul className="line-day-list">
        <li className="active">Week</li>
        <li>Mounth</li>
        <li>Year</li>
        <li>Other</li>
      </ul>
    </div>
    <div>
      <Line data={charDate} options={option}/>
    </div>
      <div>
        <p>totalbalans</p>
      </div>
    </>
  );
}

export default LinearGraph;
