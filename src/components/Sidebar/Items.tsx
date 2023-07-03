import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import TextSnippetIcon from '@mui/icons-material/TextSnippetOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/LoginOutlined';
import {Link} from 'react-router-dom'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import {useState} from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const SidebarItems = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  function handleListItemClick(arg0: number): void {
    setSelectedIndex(arg0);
  }
  return (
      <List >
        <Link to="/dashboard" style={{textDecoration: 'none', color: 'inherit'}}>
        <ListItem disablePadding>
          <ListItemButton selected={selectedIndex === 0} onClick={() => handleListItemClick(0)}
        sx={{  
          backgroundColor: selectedIndex == 0 ? '#C64B68' : 'inherit',
          borderRadius: selectedIndex == 0 ? '30px': '0px',
        }}>
            <ListItemIcon >
              <DashboardIcon sx={{color: 'white'}}/>
            </ListItemIcon>
            <ListItemText primary="Dashboard"  />
          </ListItemButton>
        </ListItem>
        </Link>
        <Link to="/projects" style={{textDecoration: 'none', color: 'inherit'}}>
        <ListItem disablePadding>
          <ListItemButton selected={selectedIndex === 1}  sx={{  
          backgroundColor: selectedIndex == 1 ? '#C64B68' : 'inherit',
          borderRadius: selectedIndex == 1 ? '30px': '0px',
        }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <TextSnippetIcon />
            </ListItemIcon>
            <ListItemText primary="Projects"/>
          </ListItemButton>
        </ListItem>
        </Link>
        <Link to="/articles" style={{textDecoration: 'none', color: 'inherit'}}>
        <ListItem disablePadding>
          <ListItemButton selected={selectedIndex === 2}  sx={{  
          backgroundColor: selectedIndex == 2 ? '#C64B68' : 'inherit',
          borderRadius: selectedIndex == 2 ? '30px': '0px',
        }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <TextSnippetIcon />
            </ListItemIcon>
            <ListItemText primary="Articles" />
          </ListItemButton>
        </ListItem>
        </Link>
        <Link to="/jobs" style={{textDecoration: 'none', color: 'inherit'}}>
        <ListItem disablePadding>
          <ListItemButton selected={selectedIndex === 3}>
            <ListItemIcon sx={{  
          color: 'white', 
          backgroundColor: selectedIndex == 3 ? '#C64B68' : 'inherit',
          borderRadius: selectedIndex == 3 ? '30px': '0px',
        }}>
              <TextSnippetIcon />
            </ListItemIcon>
            <ListItemText primary="Job Posts"  />
          </ListItemButton>
        </ListItem>
        </Link>
        <Link to="/employees" style={{textDecoration: 'none', color: 'inherit'}}>
        <ListItem disablePadding>
          <ListItemButton selected={selectedIndex === 4}  sx={{  
          backgroundColor: selectedIndex == 4 ? '#C64B68' : 'inherit',
          borderRadius: selectedIndex == 4 ? '30px': '0px',
        }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <PeopleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Employees"  />
          </ListItemButton>
        </ListItem>
        </Link>
        <Link to="/reports" style={{textDecoration: 'none', color: 'inherit'}}>
        <ListItem disablePadding>
          <ListItemButton selected={selectedIndex === 5}  sx={{  
          backgroundColor: selectedIndex == 5 ? '#C64B68' : 'inherit',
          borderRadius: selectedIndex == 5 ? '30px': '0px',
        }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <PeopleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItemButton>
        </ListItem>
        </Link>
        <Link to="/sectors" style={{textDecoration: 'none', color: 'inherit'}}>
        <ListItem disablePadding>
          <ListItemButton selected={selectedIndex === 6}  sx={{  
          backgroundColor: selectedIndex == 6 ? '#C64B68' : 'inherit',
          borderRadius: selectedIndex == 6 ? '30px': '0px',
        }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <PeopleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Sectors"  />
          </ListItemButton>
        </ListItem>
        </Link>
        <Link to="/admins" style={{textDecoration: 'none', color: 'inherit'}}>
        <ListItem disablePadding>
          <ListItemButton selected={selectedIndex === 7}  sx={{  
          backgroundColor: selectedIndex == 7 ? '#C64B68' : 'inherit',
          borderRadius: selectedIndex == 7 ? '30px': '0px',
        }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <PeopleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Admins"  />
          </ListItemButton>
        </ListItem>
        </Link>
        <ListItem disablePadding >
          <ListItemButton disableRipple selected={selectedIndex === 7}  sx={{  
          backgroundColor: selectedIndex == 7 ? '#C64B68' : 'inherit',
          borderRadius: selectedIndex == 7 ? '30px': '0px',
        }}>
            <ListItemIcon sx={{ color: 'white' ,width:'100%',position:'relative'}}>
              <ChevronLeftIcon sx={{position:'absolute' , right:'-25px',height: '32px', width: '32px', backgroundColor:"#641C36", transform: 'rotate(0deg)'}}/>
            </ListItemIcon>
            <ListItemText primary=""  />
          </ListItemButton>
        </ListItem>
        <Link to="/settings" style={{textDecoration: 'none', color: 'inherit'}}>
        <ListItem disablePadding sx={{ mt: 4 }}>
          <ListItemButton selected={selectedIndex === 8}  sx={{  
          backgroundColor: selectedIndex == 8 ? '#C64B68' : 'inherit',
          borderRadius: selectedIndex == 8 ? '30px': '0px',
        }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings"  />
          </ListItemButton>
        </ListItem>
        </Link>
        <Link to="/logout" style={{textDecoration: 'none', color: 'inherit'}}>
        <ListItem disablePadding>
          <ListItemButton selected={selectedIndex === 9}  sx={{  
          backgroundColor: selectedIndex == 9 ? '#C64B68' : 'inherit',
          borderRadius: selectedIndex == 9 ? '30px': '0px',
        }}>
            <ListItemIcon sx={{ color: 'white' }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout"  />
          </ListItemButton>
        </ListItem>
        </Link>
      </List>
  );
}

export default SidebarItems;
