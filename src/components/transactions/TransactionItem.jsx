import "./TransactionStyles.scss";

function TransactionItem({transItem}) {
  return (
    <div className="trans-items-wrapper">
      <div className="date">{transItem.date}</div>
      <div className="trans-item-wrapper">
        <div className="trans-logo">{transItem.logo}</div>
        <div className="trans-info">
          <div className="trans-name">{transItem.name}</div>
          <div className="trans-categoty-wrapper">
            <div className="trans-category">{transItem.type}</div>
            <div className="trans-card">Card: {transItem.card}</div>
          </div>
        </div>
        <div className="trans-money">
          <div className="trans-value" style={{color: transItem.value > 0 ? 'green' : 'black'}}>{transItem.value}</div>
          <div className="trans-currency">{transItem.current}</div>
        </div>
      </div>
    </div>
  );
}

export default TransactionItem;
