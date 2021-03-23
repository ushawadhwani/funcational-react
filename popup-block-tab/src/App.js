import React from "react";
import "./App.css";
import popupData from "./assets/json/popupData.json";
import tabData from "./assets/json/tabsData.json";
import CustomPopup from "./components/CustomPopup";
import Button from "@material-ui/core/Button";
import MyTabs from "./components/Tab";
import MyBlock from "./components/Block";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

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
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4">{"Test-1 ->PopUp"}</Typography>
          <Button variant="outlined" color="primary" onClick={handleDialogOpen}>
            Open dialog
          </Button>
        </Grid>
        <CustomPopup
          doShowDialog={showDialog}
          handleClose={handleDialogClose}
          title={popupData.title}
          subTitle={popupData.subTitle}
          detail={popupData.detail}
        />
        <Grid item xs={12}>
          <Typography variant="h4">{"Test-2 ->Tabs"}</Typography>
          <MyTabs myTabData={tabData} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">{"Test-3 ->Block"}</Typography>
          <MyBlock />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
