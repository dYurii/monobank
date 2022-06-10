import "./ContentStyles.scss";
import CardItem from "../../cards/CardItem";
import LinearGraph from "../../graphs/LinearGraph";
import DonutGrap from "../../graphs/DonutGraph";
import { useState } from "react";
import TransactionList from "../../transactions/TransactionList";
function Content() {
  const [userData, setUserData] = useState({
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
    maintainAspectRatio: false,
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
    datasets: [{
      data: [20, 20, 10, 10, 20, 20],
      backgroundColor: [
        "blue", "yellow", "orange", "pink", "black", "red",
      ],
      borderWidth: 0,
    }
    ]
  });

  const [userOptionDounut, setUserOptionDounut] = useState({
    responsive: true,
    maintainAspectRatio: true,
    cutout: 120,
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
        <div className="cards-wrapper">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
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
