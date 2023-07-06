import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import TextSnippetIcon from '@mui/icons-material/TextSnippetOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/LoginOutlined';

const sideBarData = [
    {
        path: '/dashboard',
        icon: <DashboardIcon />,
        text: 'Dashboard',
        type: 'mainPath',
    },
    {
        path: '/projects',
        icon: <TextSnippetIcon />,
        text: 'Projects',
        type: 'mainPath',
    },
    {
        path: '/articles',
        icon: <TextSnippetIcon />,
        text: 'Articles',
        type: 'mainPath',
    },
    {
        path: '/jobs',
        icon: <TextSnippetIcon />,
        text: 'Job Posts',
        type: 'mainPath',
    },
    {
        path: '/employees',
        icon: <PeopleOutlineIcon />,
        text: 'Employees',
        type: 'mainPath',
    },
    {
        path: '/reports',
        icon: <PeopleOutlineIcon />,
        text: 'Reports',
        type: 'mainPath',
    },
    {
        path: '/sectors',
        icon: <PeopleOutlineIcon />,
        text: 'Sectors',
        type: 'mainPath',
    },
    {
        path: '/admins',
        icon: <PeopleOutlineIcon />,
        text: 'Admins',
        type: 'mainPath',
    },
    {
        path: '/settings',
        icon: <SettingsIcon />,
        text: 'Settings',
        type: 'setting',

    },
    {
        path: '/logout',
        icon: <LogoutIcon />,
        text: 'Logout',
        type: 'setting',
    }


];

export default sideBarData;