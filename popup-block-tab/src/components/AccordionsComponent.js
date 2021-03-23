import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import CustomGrid from "./CustomGrid";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Accordion = withStyles({
  root: {
    border: "0px solid rgba(0, 0, 0, 0)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    flexDirection: "row-reverse",
  },
  expanded: {},
  expandIcon: {
    paddingRight: 20,
    paddingLeft: 20,
    "&$expanded": {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: "0px 0px 10px",
    paddingLeft: 50,
  },
}))(MuiAccordionDetails);

export default function AccordionsComponent({ detail }) {
  const [expanded, setExpanded] = React.useState("panel0");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {detail.map((value, index) => {
        return (
          <Accordion
            square
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              expandIcon={<ExpandMoreIcon />}
            >
              <CustomGrid
                leftValue={value.heading}
                rightValue={value.percentage}
                variant="h6"
              />
            </AccordionSummary>
            {value.detail.map((detailValue, index) => {
              return (
                <AccordionDetails>
                  <CustomGrid
                    leftValue={detailValue.heading}
                    rightValue={detailValue.percentage}
                    variant="subtitle1"
                  />
                </AccordionDetails>
              );
            })}
          </Accordion>
        );
      })}
    </div>
  );
}
