import CraditCard from "../../data/CraditCard"
import CardItem from "./CardItem";
function CardList() {
  return (
    <>
      {CraditCard.map((item) => (<CardItem key={item.id} cardDate={item} />))}
    </>
  );
}

export default CardList;
