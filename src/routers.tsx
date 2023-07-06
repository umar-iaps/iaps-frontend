import AddAdmin from "./pages/Admins/NewAdmin";
import MembersList from "./pages/Employees/MembersList";
import ReportsList from "./pages/Reports/ReportsList";
import ListJobs from "./pages/Jobs/ListJobs";
import ArticlesList from "./pages/Articles/ArticlesList/ArticlesList";
import AddArticle from "./pages/Articles/NewArticle";
import Projects from "./pages/Projects/ListProjects";
import ListAdmins from "./pages/Admins/ListAdmins";
import AddProject from "./pages/Projects/NewProject";
import AddJobs from "./pages/Jobs/NewJob";
import AddEmployees from "./pages/Employees/NewEmployee";
import AddReports from "./pages/Reports/NewReport";
import Login from "./pages/Login";
import Layout from "./components/Layout";

const withLayout = (Component: any) => {
  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export const routers = [
  {
    path: "/",
    element: withLayout(() => <div>This is home</div>),
  },
  {
    path: "/logout",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admins",
    element: withLayout(() => <ListAdmins />),
  },
  {
    path: "/dashboard",
    element: withLayout(() => <div>This is dashboard</div>),
  },
  {
    path: "/projects",
    element: withLayout(() => <Projects />),
  },
  {
    path: "/projects/new",
    element: withLayout(() => <AddProject />),
  },
  {
    path: "/articles",
    element: withLayout(() => <ArticlesList />),
  },
  {
    path: "/jobs",
    element: withLayout(ListJobs),
  },
  {
    path: "/jobs/new",
    element: withLayout(AddJobs),
  },
  {
    path: "/employees",
    element: withLayout(MembersList),
  },
  {
    path: "/employees/new",
    element: withLayout(AddEmployees),
  },
  {
    path: "/reports",
    element: withLayout(ReportsList),
  },
  {
    path: "/reports/new",
    element: withLayout(AddReports),
  },
  {
    path: "/sectors",
    element: withLayout(() => <div>This is Sectors</div>),
  },
  {
    path: "/settings",
    element: withLayout(() => <div>This is Settings</div>),
  },
  {
    path: "/admins/new",
    element: withLayout(AddAdmin),
  },
  {
    path: "/articles/new",
    element: withLayout(AddArticle),
  },
];
