import "./App.css";
import Header from "./components/layout/header/Header";
import Sidebar from "./components/layout/sidebarMain/Sidebar";
import Content from "./components/layout/content/Content";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
