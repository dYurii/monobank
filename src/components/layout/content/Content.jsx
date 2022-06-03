import "./ContentStyles.scss"
import CardItem from "../../cards/CardItem"
import LinearGraph from "../../graphs/LinearGraph";
import { useState } from "react";
function Content() {
  const [userData, setUserData] = useState({
    labels: ['a', 'b', 'c','r','de'],
    datasets: [{
      label: 'Test',
      data: [1, 33, 3,7,5],
      backgroundColor: [
        "rgb(117,83,230)"
      ],
      tension: 0.4
    }
    ]
  });
  const [userOption, setUserOption] = useState({
    responsive: false,
    plugins: {
      title: {
        display: false,
        text: 'Chart.js Line Chart - Cubic interpolation mode'
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true
        },
        position: 'top',
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Value'
        },
        suggestedMin: -10,
        suggestedMax: 200
      }
    }
  });
return (
  <div className="content-wrapper">
    <div className="cards">
      <CardItem />
      <CardItem />
      <CardItem />
    </div>
    <div className="grap">
      <div className="linear">
        <LinearGraph charDate={userData} option={userOption} />
      </div>
      <div className="donut">Donut</div>
    </div>
    <div className="transa">Transaction</div>
  </div>
);
}

export default Content;
