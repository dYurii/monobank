import React from "react";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"
function LinearGraph({ charDate, option }) {
  const [userData, setUserDate] = useState(charDate);
  const [isActive, setIsActive] = useState(false);
  let changeClass = () => {
    setIsActive(current => !current);
  }
  const setGraphWeek = () => {
    setUserDate({
      ...userData, labels: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд'],
      datasets: [{
        label: 'Test',
        data: [20, 33, 3, 7, 5, 100, 33, 34, 7, 5],
        backgroundColor: [
          "red"
        ],
        borderColor: "red",
        tension: 0.4,
        borderWidth: 4,
      }],
    });
    changeClass()
  };
  const setGraphMounth = () => {
    setUserDate({
      ...userData, labels: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд'],
      datasets: [{
        data: [5, 4, 1, 3, 4, 5, 6, 7, 4, 3, 5, 4, 1, 3, 4, 5, 6, 7, 4, 3, 5, 4, 1, 3, 4, 5, 6, 7, 4, 3], 
        backgroundColor: [
          "blue"
        ],
        borderColor: "blue",
        tension: 0.4,
        borderWidth: 4,
      }],
    });
    changeClass()
  };
  const setGraphYear = () => {
    setUserDate({
      ...userData,labels: ['січень','лютий','березень','квітень','травень','червень','липень','серпень','вересень','жовтень','листопад','грудень'],
      datasets: [{ data: [50, 40, 10, 30, 40, 50, 60, 70, 40, 30,80,20] }],
      backgroundColor: [
        "red"
      ],
      borderColor: "red",
      tension: 0.4,
      borderWidth: 4,
    });
    changeClass()
  };
  const setGraphOther = () => {
    setUserDate({
      ...userData,labels: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд'],
      datasets: [{ data: [5, 4, 1, 3, 4, 5, 6, 7, 4, 3] }],
      backgroundColor: [
        "rgb(0,0,0)"
      ],
      borderColor: "rgb(0,0,0)",
      tension: 0.4,
      borderWidth: 4,
    });
    changeClass()
  };
  return (
    <>
      <div className="header-graph-line">
        <p>Balance summary</p>
        <ul className="line-day-list">
          <li className={isActive ? 'active' : ''} onClick={setGraphWeek}>Week</li>
          <li className={isActive ? 'active' : ''} onClick={setGraphMounth}>Mounth</li>
          <li className={isActive ? 'active' : ''} onClick={setGraphYear}>Year</li>
          <li className={isActive ? 'active' : ''} onClick={setGraphOther}>Other</li>
        </ul>
      </div>
      <div>
        <Line data={userData} options={option} />
      </div>
      <div>
        <p className="totalbalans">Total balans: <span>20444</span> USD</p>
      </div>
    </>
  );
}

export default LinearGraph;
