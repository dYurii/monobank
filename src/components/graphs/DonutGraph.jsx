import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"
function DonutGraph({ charDate, option }) {
  return (
    <>
      <div className="header-graph-doughnut">
        <p>Expense categories</p>
        <ul className="line-day-list">
          <li className="active">Week</li>
          <li>Mounth</li>
          <li>Year</li>
          <li>Other</li>
        </ul>
      </div>
      <div className="content-graph-doughnut">
        <ul>
          <li>test1</li>
          <li>test1</li>
          <li>test1</li>
          <li>test1</li>
          <li>test1</li>
          <li>test1</li>
          <li>test1</li>
        </ul>
        <div>
          <Doughnut data={charDate} options={option} />
        </div>
      </div>
    </>);
}

export default DonutGraph;