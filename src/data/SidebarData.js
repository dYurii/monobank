import {
  BsFillTelephoneFill,
  BsHouseFill,
  BsPieChartFill,
  BsCreditCard2BackFill,
  BsBank2,
  BsFillPiggyBankFill,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

const sidebarData = [
  {
    id: 1,
    logo: <BsHouseFill size="26px" />,
    underLogoText: "Dashboard",
    link: "/",
  },
  {
    id: 2,
    logo: <BsPieChartFill size="26px" />,
    underLogoText: "Transactions",
    link: "/transactions",
  },
  {
    id: 3,
    logo: <BsCreditCard2BackFill size="26px" />,
    underLogoText: "Accounts/Cards",
    link: "/accounts",
  },
  {
    id: 4,
    logo: <BsFillFileEarmarkTextFill size="26px" />,
    underLogoText: "Loans/Deposits",
    link: "/loans",
  },
  {
    id: 5,
    logo: <BsFillPiggyBankFill size="26px" />,
    underLogoText: "Cashback",
    link: "/cashback",
  },
  {
    id: 6,
    logo: <BsBank2 size="26px" />,
    underLogoText: "Bank services",
    link: "/bank",
  },
  {
    id: 7,
    logo: <BsFillTelephoneFill size="26px" />,
    underLogoText: "Support",
    link: "/support",
  },
];

export default sidebarData;
