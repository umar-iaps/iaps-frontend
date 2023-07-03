import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import AddAdmin from "./pages/Admins/NewAdmin";
import MembersList from "./pages/Employees/MembersList";
import NewMember from "./pages/Employees/NewMember";
import ReportsList from "./pages/Reports/ReportsList";
import ListJobs from "./pages/Jobs/ListJobs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: '/logout',
    element: <Login />
  },
  {
    path: '/login', 
    element: <Login />
  },
  {
    path: '/admins',
    element: <Layout>This is admins</Layout>
  },
  {
    path: '/dashboard',
    element: <Layout><div >This is dashboard</div></Layout>
  },
  {
    path:"/projects", 
    element: <Layout>This is Projects</Layout>
  },
  {
    path: '/articles',
    element: <Layout>This is articles</Layout>
  },
  {
    path: '/jobs',
    element: <Layout><ListJobs /></Layout>
  },
  {
    path: '/employees',
    element: <Layout><MembersList /></Layout>
  },
  {
    path: '/reports',
    element: <Layout><ReportsList /></Layout>
  },
  {
    path: '/sectors',
    element: <Layout>This is Sectors</Layout>
  },
  {
    path: '/settings',
    element: <Layout>This is Settings</Layout>
  }, 
  {
    path: "/admin/new",
    element: <Layout><AddAdmin /></Layout>
  },
  {
    path: "/member/new",
    element: <Layout><NewMember /></Layout>
  }
]);

function App() {
  return(
    <RouterProvider router={router} />

  );
}

export default App;
