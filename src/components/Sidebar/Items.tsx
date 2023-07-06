import { Link } from 'react-router-dom';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import sidebarData from './SideBarData';
import useStyles from './style';



const SidebarItems = () => {

  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);

  function handleListItemClick(index) {
    setSelectedIndex(index);
  }

  return (
    <List sx={{ marginTop: '22px' }}>
      {sidebarData?.filter((item) => item.type === 'mainPath').map((item, index) => (
        <Link to={item.path} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem disablePadding>
            <ListItemButton
              disableRipple
              selected={selectedIndex === index}
              onClick={() => handleListItemClick(index)}
              className={selectedIndex === index ? classes.selected : classes.listItemButton}
            >
              <ListItemIcon className={classes.listItemIcon} sx={{ color: 'white' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}

      <br /><br />
      {/* LeftIcon */}
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon className={classes.listIcon}>
            <ChevronLeftIcon className={classes.leftIcon} />
          </ListItemIcon>
          <ListItemText primary="" />
        </ListItemButton>
      </ListItem>
      <br /><br /><br />
      {/* setting & logout */}
      {sidebarData?.filter((item) => item.type === 'setting').map((item, index) => (
        <Link to={item.path} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem disablePadding>
            <ListItemButton className={classes.listItemButton}>
              <ListItemIcon className={classes.listItemIcon} sx={{ color: 'white' }}>
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



