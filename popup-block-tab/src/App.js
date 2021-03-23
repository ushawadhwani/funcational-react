import logo from "./logo.svg";
import "./App.css";
import CustomizedDialogs from "./components/PopUp";
import MyTabs from "./components/Tab";
import MyBlock from "./components/Block";

function App() {
  return (
    <div className="App">
      <CustomizedDialogs />
      <MyTabs />
      <MyBlock />
    </div>
  );
}

export default App;
