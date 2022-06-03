import {
  BsFillTelephoneFill,
  BsHouseFill,
  BsPieChartFill,
  BsCreditCard2BackFill,
  BsBank2,
  BsFillPiggyBankFill,
  BsFillFileEarmarkTextFill
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
    link: "/403",
  },
  {
    id: 3,
    logo: <BsCreditCard2BackFill size="26px" />,
    underLogoText: "Accounts/Cards",
    link: "/403",
  },
  {
    id: 4,
    logo: <BsFillFileEarmarkTextFill size="26px" />,
    underLogoText: "Loans/Deposits",
    link: "/403",
  },
  {
    id: 5,
    logo: <BsFillPiggyBankFill size="26px" />,
    underLogoText: "Cashback",
    link: "/403",
  },
  {
    id: 6,
    logo: <BsBank2 size="26px" />,
    underLogoText: "Bank services",
    link: "/403",
  },
  {
    id: 7,
    logo: <BsFillTelephoneFill size="26px" />,
    underLogoText: "Support",
    link: "/403",
  },
];

export default sidebarData;
