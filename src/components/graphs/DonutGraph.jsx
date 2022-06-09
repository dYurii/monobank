import React from "react";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import dateCategoris from '../../data/Categoris'
function DonutGraph({ charDate, option }) {
  const [userData1, setUserDate] = useState(charDate);
  const sum = userData1.datasets[0].data.reduce((partialSum, a) => partialSum + a, 0)
  const prosent = userData1.datasets[0].data.map((item) => item * 100 / sum)
  const prosent1 = prosent.map(item => item.toFixed(0))
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
  const dateCosts = [20, 33, 3, 7, 5, 50];
  const dateSets = {
    backgroundColor: [
      "blue", "yellow", "orange",
      "pink", "black",  "red",
    ],
    borderWidth: 0,
  };
  const setGraphWeek = () => {
    setUserDate({
      ...userData1,
      datasets: [{
        data: [20, 33, 3, 7, 5, 20],
        ...dateSets,
      }],
    });
    changeClass()
  };
  const setGraphMounth = () => {
    setUserDate({
      ...userData1,
      datasets: [{
        data: [20, 34, 3, 21, 4, 20],
        ...dateSets
      }],
    });
    changeClass1()
  };
  const setGraphYear = () => {
    setUserDate({
      ...userData1,
      datasets: [{
        data: [10, 4, 4, 23, 5, 30],
        ...dateSets
      }],
    });
    changeClass2()
  };
  const setGraphOther = () => {
    setUserDate({
      ...userData1,
      datasets: [{
        data: [13, 4, 24, 24, 5, 40],
        ...dateSets
      }],
    });
    changeClass3()
  };

  return (
    <>
      <div className="header-graph-doughnut">
        <p>Expense categories</p>
        <ul className="line-day-list">
          <li className={isActive ? 'active' : ''} onClick={setGraphWeek}>Week</li>
          <li className={isActive1 ? 'active' : ''} onClick={setGraphMounth}>Mounth</li>
          <li className={isActive2 ? 'active' : ''} onClick={setGraphYear}>Year</li>
          <li className={isActive3 ? 'active' : ''} onClick={setGraphOther}>Other</li>
        </ul>
      </div>
      <div className="content-graph-doughnut">
        <ul>
          {dateCategoris.map((item, index) => (
            <li><span className="desh" style={{ background: item.color }}></span> <span className="content-procent">{prosent1[index++]} %</span> <span>{item.type}</span></li>
          ))}
        </ul>
        <div className="grap-wrapper-dounut ">
          <div className="textInDounut">
            <span>-5 000</span> USD
          </div>
          <Doughnut data={userData1} options={option} />
        </div>
      </div>
    </>);
}

export default DonutGraph;