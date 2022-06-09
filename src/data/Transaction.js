import { IoMdPizza } from "react-icons/io";
import { BsFillBagFill, BsFillBasket3Fill } from "react-icons/bs";
import { GiReceiveMoney, GiHouse } from "react-icons/gi";
import { FaWifi, FaGasPump } from "react-icons/fa";

export const transaction = [
  {
    id: 1,
    date: "30 December 2:03 PM",
    logo: <FaWifi />,
    name: `Phone "Vodafone" +3999999999`,
    card: "** 7813",
    type: "Mobile and Internet",
    value: -225,
    current: "UAH",
    color: "blue"
  },

  {
    id: 2,
    logo: <FaGasPump />,
    date: "30 December 5:47 PM",
    name: `"Shell" gas station`,
    card: "** 7813",
    type: "Vehicle and Transport",
    value: -52,
    current: "UAH",
    color: "red"
  },
  {
    id: 3,
    date: "30 December 9:01 PM",
    logo: <GiHouse />,
    name: `"General electic" housing services`,
    card: "** 7813",
    type: "House and Services",
    value: -200,
    current: "USD",
    color: "yellow"
  },
  {
    id: 4,
    date: "29 December 11:12 AM",
    logo: <IoMdPizza />,
    name: `"Food and Drinks" restaurant`,
    card: "** 7813",
    type: "Cafe and Restaurant",
    value: -80,
    current: "USD",
    color: "pink"
  },

  {
    id: 5,
    date: "29 December 4:20 PM",
    logo: <BsFillBagFill />,
    name: `"Zara Man" store`,
    card: "** 7813",
    type: "Clothes and Shoes",
    value: -250,
    current: "EUR",
    color: "orange"
  },
  {
    id: 6,
    date: "28 December 8:02 PM",
    logo: <IoMdPizza />,
    name: `"Sushi King" restaurant`,
    card: "** 7813",
    type: "Cafe and Restaurant",
    value: -500,
    current: "UAH",
    color: "pink"
  },
  {
    date: "28 December 8:45 PM",
    id: 7,
    logo: <BsFillBasket3Fill />,
    name: `"Food shop"`,
    card: "** 7813",
    type: "Groceries and Food",
    value: -300,
    current: "UAH",
    color: "brown"
  },
];

export const datee = [
  '28 December','29 December', '30 December'
]