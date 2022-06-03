import React from "react";
import { Line } from "react-chartjs-2";
import{ Chart as ChartJS} from "chart.js/auto"
function LinearGraph({charDate,option}) {
  return (
    <>
    sahrg
      <Line data={charDate} options={option}/>
    </>
  );
}

export default LinearGraph;
