import "./TransactionStyles.scss";
import TransactionItem from "./TransactionItem";
import { transaction } from "../../data/Transaction";

function TransactionList() {
  return (
    <div className="transaction-block">
      <div className="transaction-header">
        <div>Transaction history</div>
        <ul>
          <li>
            <select name="currency" className="currency">
              <option value="any-currency">Any currency</option>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="bit">BIT</option>
            </select>
          </li>
          <li>
            <select name="category" className="category">
              <option value="any-categoty">Any category</option>
              <option value="vehicle">Vehicle and transport</option>
              <option value="groceries">Groceries and food</option>
              <option value="clothes">Clothes and shoes</option>
              <option value="cafe">Cafe and restaurants</option>
              <option value="mobile">Mobile and internet</option>
              <option value="house">House and services</option>
              <option value="other">Other expenses</option>
            </select>
          </li>
        </ul>
      </div>
      <div className="trans-list-wrapper">
        {transaction.map((item) => (
          <TransactionItem key={item.id} transItem={item} />
        ))}
      </div>
    </div>
  );
}

export default TransactionList;
