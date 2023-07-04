import Login from "./pages/Login";
import Layout from "./components/Layout";
import AddAdmin from "./pages/Admins/NewAdmin";
import MembersList from "./pages/Employees/MembersList";
import NewMember from "./pages/Employees/NewMember";
import ReportsList from "./pages/Reports/ReportsList";
import ListJobs from "./pages/Jobs/ListJobs";
import ArticlesList from "./pages/Articles/ArticlesList/ArticlesList";
import AddArticle from "./pages/Articles/NewArticle";
import Projects from "./pages/Projects";

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
    path: '/logout',
    element: <Login />
  },
  {
    path: '/login', 
    element: <Login />
  },
  {
    path: '/admins',
    element: withLayout(() => <div>This is admins</div>),
  },
  {
    path: '/dashboard',
    element: withLayout(() => <div>This is dashboard</div>),
  },
  {
    path:"/projects", 
    element: withLayout(() => <Projects />),
  },
  {
    path: '/articles',
    element: withLayout(() => <ArticlesList />),
  },
  {
    path: '/jobs',
    element: withLayout(ListJobs),
  },
  {
    path: '/employees',
    element: withLayout(MembersList),
  },
  {
    path: '/reports',
    element: withLayout(ReportsList),
  },
  {
    path: '/sectors',
    element: withLayout(() => <div>This is Sectors</div>),
  },
  {
    path: '/settings',
    element: withLayout(() => <div>This is Settings</div>),
  },
  {
    path: "/admin/new",
    element: withLayout(AddAdmin),
  },
  {
    path: "/member/new",
    element: withLayout(NewMember),
  },
  {
    path: "/article/new",
    element: withLayout(AddArticle),
  }
];
