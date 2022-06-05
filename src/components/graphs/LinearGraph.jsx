import React from "react";
import { Line } from "react-chartjs-2";
import{ Chart as ChartJS} from "chart.js/auto"
function LinearGraph({charDate,option}) {
  return (
    <>
    sahrg
    <div>
      <Line data={charDate} options={option}/>
    </div>
      
    </>
  );
}

export default LinearGraph;
