import "./ContentStyles.scss"
import CardItem from "../../cards/CardItem"

function Content() {
  return (
    <div className="content-wrapper">
      <div className="cards">
        <CardItem/>
        <CardItem/>
        <CardItem/>
      </div>
      <div className="grap">
        <div className="linear">Linear</div>
        <div className="donut">Donut</div>
      </div>
      <div className="transa">Transaction</div>
    </div>
  );
}

export default Content;
