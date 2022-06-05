import "./ContentStyles.scss"
import CardItem from "../../cards/CardItem"
import LinearGraph from "../../graphs/LinearGraph";
import DonutGrap from "../../graphs/DonutGraph"
import { useState } from "react";
function Content() {
  const [userData, setUserData] = useState({
    labels: ['пн', 'вт', 'ср','чт','пт','сб', 'нд'],
    datasets: [{
      label: 'Test',
      data: [20 , 33, 3,7,5,100, 33, 34,7,5],
      backgroundColor: [
        "rgb(117,83,230)"
      ],
      tension: 0.4
    }
    ]
  });
  const [userOption, setUserOption] = useState({
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
      legend: false,
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: false
        },
        position: 'top',
      },
      y: {
        display: true,
        title: {
          display: false,
          text: 'Value'
        },
        suggestedMin: 0,
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
      <div className="donut"><DonutGrap charDate={userData} option={userOption} /></div>
    </div>
    <div className="transa">Transaction</div>
  </div>
);
}

export default Content;
