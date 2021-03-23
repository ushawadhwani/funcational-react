import logo from "./logo.svg";
import "./App.css";
import CustomizedDialogs from "./components/PopUp";
import MyTabs from "./components/Tab";

function App() {
  return (
    <div className="App">
      <CustomizedDialogs />
      <MyTabs />
    </div>
  );
}

export default App;
