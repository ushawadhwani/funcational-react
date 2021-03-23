import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

export default function CustomGrid({ rightValue, leftValue, variant }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={9}>
        <Typography variant={variant}>{leftValue}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant={variant}>{rightValue}</Typography>
      </Grid>
    </Grid>
  );
}
