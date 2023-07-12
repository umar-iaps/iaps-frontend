import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import sidebarData from "./SideBarData";
import { ISideBarDataItem } from "@interfaces/ISidebarItem";
import useStyles from "./style";

const SidebarItems = (): JSX.Element => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isSidebar, setIsSidebar] = useState<boolean>(true);

  function handleListItemClick(index: number) {
    setSelectedIndex(index);
  }

  const hideSidebar = () => {
    setIsSidebar(false);
  };

  return (
    <List sx={{ marginTop: "22px" }}>
      {sidebarData
        ?.filter((item: I) => item.type === "mainPath")
        .map((item: ISideBarDataItem, index: number) => (
          <Link
            to={item.path}
            key={index}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem disablePadding>
              <ListItemButton
                disableRipple
                selected={selectedIndex === index}
                onClick={() => handleListItemClick(index)}
                className={
                  selectedIndex === index
                    ? classes.selected
                    : classes.listItemButton
                }
              >
                <ListItemIcon
                  className={classes.listItemIcon}
                  sx={{ color: "white" }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}

      <br />
      <br />
      {/* LeftIcon */}
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon className={classes.listIcon}>
            <ChevronLeftIcon className={classes.leftIcon} />
          </ListItemIcon>
          <ListItemText primary="" />
        </ListItemButton>
      </ListItem>
      <br />
      <br />
      <br />
      {/* setting & logout */}
      {sidebarData
        ?.filter((item: ISideBarDataItem) => item.type === "setting")
        .map((item: ISideBarDataItem, index: number) => (
          <Link
            to={item.path}
            key={index}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem disablePadding>
              <ListItemButton className={classes.listItemButton}>
                <ListItemIcon
                  className={classes.listItemIcon}
                  sx={{ color: "white" }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
    </List>
  );
};

export default SidebarItems;
