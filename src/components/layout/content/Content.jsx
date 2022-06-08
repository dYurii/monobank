import "./ContentStyles.scss";
import CardItem from "../../cards/CardItem";
import LinearGraph from "../../graphs/LinearGraph";
import DonutGrap from "../../graphs/DonutGraph";
import { useState } from "react";
import TransactionList from "../../transactions/TransactionList";
function Content() {
  const [userData, setUserData] = useState({
    labels: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд'],
    datasets: [{
      label: 'Test',
      data: [20, 33, 3, 7, 5, 100, 33, 34, 7, 5],
      backgroundColor: [
        "rgb(117,83,230)"
      ],
      borderColor: "rgb(22,83,210)",
      tension: 0.4,
      borderWidth: 4,
    }
    ]
  });
  const [userOption, setUserOption] = useState({
    responsive: true,
    maintainAspectRatio: true,
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
          display: false,
        },
        grid: {
          drawBorder: false,
        },
        position: "top",
      },
      y: {
        display: true,
        title: {
          display: false,
          text: "Value",
        },
        grid: {
          drawBorder: false,
        },
        suggestedMin: 0,
      },
    },
  });
  const [userDataDounut, setUserDataDounut] = useState({
    labels: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд'],
    datasets: [{
      label: 'Test',
      data: [20, 33, 3, 7, 5, 20],
      backgroundColor: [
        "rgb(117,83,230)", "rgb(17,100,230)", "rgb(17,8,30)",
        "rgb(117,8,0)", "rgb(0,0,230)", "rgb(17,83,20)"
      ],
    }
    ]
  });

  const [userOptionDounut, setUserOptionDounut] = useState({
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      title: {
        display: false,
      },
      legend: false,
      tooltip: false,
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: false,
        title: {
          display: false
        },
        position: 'top',
      },
      y: {
        display: false,
        title: {
          display: false,
          text: "Value",
        },
        suggestedMin: 0,
      },
    },
  });
  return (
    <div className="content-wrapper">
      <div className="cards">
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
      <div className="money-wrapper">
        <div className="linear-wrapper">
          <LinearGraph {...userData} charDate={userData} option={userOption} />
        </div>
        <div className="donut-wrapper">
          <DonutGrap charDate={userDataDounut} option={userOptionDounut} />
        </div>
        <div className="transaction-wrapper">
          <TransactionList />
        </div>
      </div>
    </div>
  );
}

export default Content;
