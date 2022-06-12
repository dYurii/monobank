import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import dateCategoris from "../../data/date";
import "./DonutGraphStyles.scss";
function DonutGraph({ charDate, option,colorDounut}) {
  const [userData1, setUserDate] = useState(charDate);
  const sum = userData1.datasets[0].data.reduce(
    (partialSum, a) => partialSum + a,
    0
  );  
  const prosent = userData1.datasets[0].data.map((item) => (item * 100) / sum);
  const prosent1 = prosent.map((item) => item.toFixed(0));
  const [isActive, setIsActive] = useState(true);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [donutMoney, setDonutMoney] = useState(5000);
  const [donutCurr, setDonutCurr] = useState("USD");
  let changeClass = () => {
    setIsActive(true);
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
    setDonutMoney(donutCurr === "USD" ? 5000 : donutCurr === "EUR"? 5000 * 0.9 : 5000 * 36 );
  };
  let changeClass1 = () => {
    setIsActive(false);
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
    setDonutMoney(donutCurr === "USD" ? 20000 : donutCurr === "EUR"? 20000 * 0.9 : 20000* 36);
  };
  let changeClass2 = () => {
    setIsActive(false);
    setIsActive1(false);
    setIsActive2(true);
    setIsActive3(false);
    setDonutMoney(donutCurr === "USD" ? 190000 : donutCurr === "EUR"? 190000 * 0.9 : 190000* 36);
  };
  let changeClass3 = () => {
    setIsActive(false);
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(true);
    setDonutMoney(donutCurr === "USD" ? 250000 : donutCurr === "EUR"? 250000 * 0.9 : 250000* 36);
  };
  const handleClickDonut = (e) => {
    e.preventDefault();
    setDonutCurr(e.currentTarget.innerText);
    setDonutMoney(
      donutCurr === e.currentTarget.innerText
        ? donutMoney
        : donutCurr === "USD" && e.currentTarget.innerText === "EUR"
        ? Math.floor(donutMoney * 0.9)
        : donutCurr === "USD" && e.currentTarget.innerText === "UAH"
        ? Math.floor(donutMoney * 36)
        : donutCurr === "EUR" && e.currentTarget.innerText === "USD"
        ? Math.floor(donutMoney * 1.1)
        : donutCurr === "EUR" && e.currentTarget.innerText === "UAH"
        ? Math.floor(donutMoney * 39)
        : donutCurr === "UAH" && e.currentTarget.innerText === "EUR"
        ? Math.floor(donutMoney * 0.039)
        : donutCurr === "UAH" && e.currentTarget.innerText === "USD"
        ? Math.floor(donutMoney * 0.036)
        : donutMoney
    );
  };
  const dateCosts = [20, 33, 3, 7, 5, 50];
  const dateSets = {
    backgroundColor: colorDounut,
    borderWidth: 0,
  };
  const setGraphWeek = () => {
    setUserDate({
      ...userData1,
      datasets: [
        {
          data: [20, 33, 3, 7, 5, 20, 12],
          ...dateSets,
        },
      ],
    });
    changeClass();
  };
  const setGraphMounth = () => {
    setUserDate({
      ...userData1,
      datasets: [
        {
          data: [20, 19, 3, 21, 4, 20, 13],
          ...dateSets,
        },
      ],
    });
    changeClass1();
  };
  const setGraphYear = () => {
    setUserDate({
      ...userData1,
      datasets: [
        {
          data: [10, 4, 4, 23, 5, 30, 24],
          ...dateSets,
        },
      ],
    });
    changeClass2();
  };
  const setGraphOther = () => {
    setUserDate({
      ...userData1,
      datasets: [
        {
          data: [13, 4, 24, 18, 5, 25, 11],
          ...dateSets,
        },
      ],
    });
    changeClass3();
  };

  return (
    <>
      <div className="header-graph-doughnut">
        <p>Expense categories</p>
        <ul className="line-day-list">
          <li className={isActive ? "active" : ""} onClick={setGraphWeek}>
            Week
          </li>
          <li className={isActive1 ? "active" : ""} onClick={setGraphMounth}>
            Mounth
          </li>
          <li className={isActive2 ? "active" : ""} onClick={setGraphYear}>
            Year
          </li>
          <li className={isActive3 ? "active" : ""} onClick={setGraphOther}>
            Other
          </li>
        </ul>
      </div>
      <div className="content-graph-doughnut">
        <ul>
          {dateCategoris.categoris.map((item, index) => (
            <li>
              <span className="desh" style={{ background: item.color }}></span>{" "}
              <span className="content-procent">{prosent1[index++]} %</span>{" "}
              <span>{item.type}</span>
            </li>
          ))}
        </ul>
        <div className="grap-wrapper-dounut ">
          <div className="textInDounut">
            <span>{donutMoney}</span>{" "}
            <div className="dropdown-donut">
              <button className="dropbtn-donut">
                {donutCurr}
                <BsChevronDown />
              </button>
              <div className="dropdown-donut-content">
                <button onClick={handleClickDonut}>USD</button>
                <button onClick={handleClickDonut}>EUR</button>
                <button onClick={handleClickDonut}>UAH</button>
              </div>
            </div>
          </div>
          <Doughnut data={userData1} options={option} />
        </div>
      </div>
    </>
  );
}

export default DonutGraph;
