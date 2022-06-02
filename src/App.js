import "./App.css";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Content from "./components/layout/Content";

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
