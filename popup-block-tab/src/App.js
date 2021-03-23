import React from "react";
import "./App.css";
import popupData from "./assets/json/popupData.json";
import CustomPopup from "./components/CustomPopup";
import Button from "@material-ui/core/Button";
import CustomizedDialogs from "./components/PopUp";
import MyTabs from "./components/Tab";
import MyBlock from "./components/Block";

function App() {
  const [showDialog, setShowDialog] = React.useState(true);

  const handleDialogOpen = () => {
    setShowDialog(true);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
  };

  return (
    <div className="App">
      <Button variant="outlined" color="primary" onClick={handleDialogOpen}>
        Open dialog
      </Button>
      <CustomPopup
        doShowDialog={showDialog}
        handleClose={handleDialogClose}
        title={popupData.title}
        subTitle={popupData.subTitle}
        detail={popupData.detail}
      />
      <MyTabs />
      <MyBlock />
    </div>
  );
}

export default App;
