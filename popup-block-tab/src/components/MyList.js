import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import DraftsIcon from "@material-ui/icons/Drafts";
import ArrowForward from "@material-ui/icons/ArrowForward";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";

const useStyles = makeStyles({
  root: {
    width: 230,
  },
});

export default function MyList(props) {
  const classes = useStyles();
  return (
    <>
      <MenuList>
        {props.list.map((data, index) => {
          return (
            <MenuItem>
              <ListItemIcon>
                <ArrowForward fontSize="small" />
              </ListItemIcon>
              <Typography variant="inherit">{data.text}</Typography>
            </MenuItem>
          );
        })}
        {props.list.length === 0 && <Typography>No list available</Typography>}
      </MenuList>
    </>
  );
}
