import React from "react";
import { Doughnut } from "react-chartjs-2";
import{ Chart as ChartJS} from "chart.js/auto"
function DonutGraph({charDate,option}) {
  return (
  <div>
    <Doughnut data={charDate} options={option}/>
  </div>);
}

export default DonutGraph;
