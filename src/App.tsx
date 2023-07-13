import Layout from "@components/Layout";
import Login from "@pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LastAdmins from "@pages/Admins/ListAdmins";
import Projects from "@pages/Projects/ListProjects";
import AddProject from "@pages/Projects/NewProject";
import ArticlesList from "@pages/Articles/ArticlesList/ArticlesList";
import AddArticle from "@pages/Articles/NewArticle";
import ListJobs from "@pages/Jobs/ListJobs";
import AddJobs from "@pages/Jobs/NewJob";
import MembersList from "@pages/Employees/MembersList";
import AddEmployees from "@pages/Employees/NewEmployee";
import ReportsList from "@pages/Reports/ReportsList";
import AddReports from "@pages/Reports/NewReport";
import ListSector from "@pages/Sectors/ListSector";
import AddSector from "@pages/Sectors/NewSector";
import { Settings } from "@mui/icons-material";
import PrivateRoute from "./PrivateRoute";
import AddAdmin from "@pages/Admins/NewAdmin";
import { useState, useEffect } from "react";
function App() {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setLogin(true);
    }
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute isLoggedIn={login}>
              <Layout>
                <div></div>
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admins"
          element={
            <PrivateRoute isLoggedIn={login}>
              <Layout>
                <LastAdmins></LastAdmins>
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isLoggedIn={login}>
              <Layout>
                <div></div>
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <PrivateRoute isLoggedIn={login}>
              <Layout>
                <Projects />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <PrivateRoute isLoggedIn={login}>
              <Layout>
                <AddProject />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/projects/new"
          element={
            <PrivateRoute isLoggedIn={login}>
              <Layout>
                <AddProject />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/articles"
          element={
            <PrivateRoute isLoggedIn={login}>
              <Layout>
                <ArticlesList />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/articles/:id"
          element={
            <PrivateRoute isLoggedIn={login}>
              <Layout>
                <AddArticle />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/articles/new"
          element={
            <PrivateRoute isLoggedIn={login}>
              <Layout>
                <AddArticle />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/jobs"
          element={
            <PrivateRoute isLoggedIn={login}>
              <Layout>
                <ListJobs />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/jobs/new"
          element={
            <PrivateRoute isLoggedIn={login}>
              <Layout>
                <AddJobs />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/jobs/:id"
          element={
            <PrivateRoute isLoggedIn={login}>
              <Layout>
                <AddJobs />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/employees"
          element={
            <PrivateRoute isLoggedIn={login}>
              <Layout>
                <MembersList />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/employees/:id"
          element={
            <PrivateRoute isLoggedIn={login}>
              <Layout>
                <AddEmployees />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/employees/new"
          element={
            <PrivateRoute isLoggedIn={login}>
              <Layout>
                <AddEmployees />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <PrivateRoute isLoggedIn={login}>
              <Layout>
                <ReportsList />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/reports/new"
          element={
            <PrivateRoute isLoggedIn={login}>
              <Layout>
                <AddReports />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/reports/:id"
          element={
            <PrivateRoute isLoggedIn={login}>
              <Layout>
                <AddReports />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/sectors"
          element={
            <PrivateRoute isLoggedIn={login}>
              <Layout>
                <ListSector />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/sectors/:id"
          element={
            <PrivateRoute isLoggedIn={login}>
              <Layout>
                <AddSector />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/sectors/new"
          element={
            <PrivateRoute isLoggedIn={login}>
              <Layout>
                <AddSector />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute isLoggedIn={login}>
              <Layout>
                <Settings />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admins/new"
          element={
            <PrivateRoute isLoggedIn={login}>
              <Layout>
                <AddAdmin />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admins/:id"
          element={
            <PrivateRoute isLoggedIn={login}>
              <Layout>
                <AddAdmin />
              </Layout>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
