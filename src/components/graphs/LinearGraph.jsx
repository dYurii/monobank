import React from "react";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"
function LinearGraph({ charDate, option }) {
  const [userData, setUserDate] = useState(charDate);
  const [isActive, setIsActive] = useState(true);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  let changeClass = () => {
    setIsActive(true);
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
  }
  let changeClass1 = () => {
    setIsActive(false);
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
  }
  let changeClass2 = () => {
    setIsActive(false);
    setIsActive1(false);
    setIsActive2(true);
    setIsActive3(false);
  }
  let changeClass3 = () => {
    setIsActive(false);
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(true);
  }
  const dayWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dateCosts = [20, 33, 3, 7, 5, 50, 33, 34, 7, 5];
  const dateSets = {
    backgroundColor: "blue",
    borderColor: "blue",
    tension: 0.4,
    borderWidth: 4,
  };
  const setGraphWeek = () => {
    setUserDate({
      ...userData,
      labels: dayWeek,
      datasets: [{
        data: dateCosts,
        ...dateSets
      }],
    });
    changeClass()
  };
  const setGraphMounth = () => {
    setUserDate({
      ...userData,
      labels: [...dayWeek, ...dayWeek, ...dayWeek, ...dayWeek],
      datasets: [{
        data: [...dateCosts, ...dateCosts, ...dateCosts],
        ...dateSets
      }],
    });
    changeClass1()
  };
  const setGraphYear = () => {
    setUserDate({
      ...userData,
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        data: [...dateCosts, 4, 9],
        ...dateSets
      }],
    });
    changeClass2()
  };
  const setGraphOther = () => {
    setUserDate({
      ...userData,
      labels: dayWeek,
      datasets: [{
        data: dateCosts,
        ...dateSets
      }],
    });
    changeClass3()
  };
  return (
    <>
      <div className="header-graph-line">
        <p>Balance summary</p>
        <ul className="line-day-list">
          <li className={isActive ? 'active' : ''} onClick={setGraphWeek}>Week</li>
          <li className={isActive1 ? 'active' : ''} onClick={setGraphMounth}>Mounth</li>
          <li className={isActive2 ? 'active' : ''} onClick={setGraphYear}>Year</li>
          <li className={isActive3 ? 'active' : ''} onClick={setGraphOther}>Other</li>
        </ul>
      </div>
      <div className="graph-wrapper">
        <Line data={userData} options={option} />
      </div>
      <div>
        <p className="totalbalans">Total balans: <span>20 444</span> USD</p>
      </div>
    </>
  );
}

export default LinearGraph;
