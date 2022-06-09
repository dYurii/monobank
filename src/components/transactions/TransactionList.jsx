import "./TransactionStyles.scss";
import TransactionItem from "./TransactionItem";
import { transaction } from "../../data/Transaction";
import { BsChevronDown} from "react-icons/bs";
import {useState} from 'react'


function TransactionList() {

  const [curr, setCurr] = useState('Any currency')
  const [categ, setCateg] = useState('Any categories')

  const handleClickCat = (e) => {
    e.preventDefault()
     setCateg(e.currentTarget.innerText) 
    }

  const handleClick = (e) => {
  e.preventDefault()
   setCurr(e.currentTarget.innerText) 
  }

  return (
    <div className="transaction-block">
      <div className="transaction-header">
        <div>Transaction history</div>
        <ul>
          <li>
            <div className="dropdown">
              <button className="dropbtn">{curr}<BsChevronDown/></button>
              <div className="dropdown-content">
                <button onClick={handleClick}>Any currency</button>
                <button onClick={handleClick}>USD</button>
                <button onClick={handleClick}>EUR</button>
                <button onClick={handleClick}>BITCOIN</button>
                <button onClick={handleClick}>UAH</button>
              </div>
            </div>
          </li>
          <li>
          <div className="dropdown">
              <button className="dropbtn">{categ}<BsChevronDown/></button>
              <div className="dropdown-content">
                <button onClick={handleClickCat}>Any currency</button>
                <button onClick={handleClickCat}>Mobile and Internet</button>
                <button onClick={handleClickCat}>Vehicle and Transport</button>
                <button onClick={handleClickCat}>Clothes and Shoes</button>
                <button onClick={handleClickCat}>Cafe and Restaurant</button>
                <button onClick={handleClickCat}>House and Services</button>
                <button onClick={handleClickCat}>Other expenses</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="trans-list-wrapper">
        {transaction.filter((item) => (item.type === categ && item.current === curr)).map((item)=>(
          <TransactionItem key={item.id} transItem={item} bgLogo={item.color} />
        ))}
      </div>
    </div>
  );
}

export default TransactionList;
