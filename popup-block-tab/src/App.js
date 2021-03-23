import React from "react";
import "./App.css";
import popupData from "./assets/json/popupData.json";
import CustomPopup from "./components/CustomPopup";
import Button from "@material-ui/core/Button";

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
    </div>
  );
}

export default App;
