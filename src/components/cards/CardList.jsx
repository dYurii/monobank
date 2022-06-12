import date from "../../data/date.json"
import CardItem from "./CardItem";
function CardList() {

  return (
    <>
      {date.cardData.map((item) => (<CardItem key={item.id} cardDate={item} />))}
    </>
  );
}

export default CardList;
