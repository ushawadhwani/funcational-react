import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardTab from "./CardTab";

const useStyles = makeStyles({
  root: {
    width: 550,
  },
  block: {
    padding: 65,
    backgroundColor: "#f5f5f5",
  },
});

export default function MyBlock() {
  const classes = useStyles();

  return (
    <div className={classes.block}>
      <Card className={classes.root}>
        <CardContent>
          <CardTab />
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
