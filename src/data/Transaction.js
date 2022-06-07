import { IoMdPizza } from "react-icons/io";
import { BsFillBagFill, BsFillBasket3Fill } from "react-icons/bs";
import { GiReceiveMoney, GiHouse } from "react-icons/gi";
import { FaWifi, FaGasPump } from "react-icons/fa";

export const transaction = [
  {
    id: 1,
    date: "30 December",
    logo: <FaWifi />,
    name: `Phone "Vodafone" +3999999999`,
    card: "** 7813",
    type: "Mobile and Internet",
    value: -225,
    current: "UAH",
  },

  {
    id: 2,
    logo: <FaGasPump />,
    name: `"Shell" gas station`,
    card: "** 7813",
    type: "Vehicle and Transport",
    value: -52,
    current: "UAH",
  },
  {
    id: 3,
    logo: <GiHouse />,
    name: `"General electic" housing services`,
    card: "** 7813",
    type: "House and Services",
    value: -200,
    current: "USD",
  },
  {
    id: 4,
    date: "29 December",
    logo: <IoMdPizza />,
    name: `"Food and Drinks" restaurant`,
    card: "** 7813",
    type: "Cafe and Restaurant",
    value: -80,
    current: "USD",
  },

  {
    id: 5,
    logo: <BsFillBagFill />,
    name: `"Zara Man" store`,
    card: "** 7813",
    type: "Clothes and Shoes",
    value: -250,
    current: "USD",
  },
  {
    id: 6,
    logo: <GiReceiveMoney />,
    name: `Transfer from Andrii`,
    card: "** 7813",
    type: "Transaction",
    value: 300000,
    current: "USD",
  },

  {
    id: 4,
    date: "28 December",
    logo: <IoMdPizza />,
    name: `"Sushi King" restaurant`,
    card: "** 7813",
    type: "Cafe and Restaurant",
    value: -500,
    current: "UAH",
  },
  {
    id: 7,
    logo: <BsFillBasket3Fill />,
    name: `"Food shop"`,
    card: "** 7813",
    type: "Groceries and Food",
    value: 300,
    current: "UAH",
  },
];
