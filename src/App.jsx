import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css"; // ant design css

import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";
import CreateTask from "./pages/Task/CreateTask/CreateTask";
import TaskList from "./pages/Task/TaskList/TaskList";
import CreateProject from "./pages/Project/CreateProject/CreateProject";
import ProjectList from "./pages/Project/ProjectList/ProjectList";
import ApprovalList from "./pages/Approvals/Approval";
import LeaveList from "./pages/Leave/leave";
import LocationList from "./pages/Location/location";
import CreateTeams from "./pages/Teams/CreateTeams/CreateTeams";
import TeamList from "./pages/Teams/TeamsList/TeamList";

import { PrivateRoute, PublicRoute } from "./auth/Auth";
import LayoutProvider from "./context/LayoutContext";
import DashboardProvider from "./context/dashboardContext";
import TaskProvider from "./context/task/taskContext";

import THEME from "./styles/theme";
import GlobalStyle from "./styles/globalStyle";
import NewLogin from "./pages/Login/NewLogin";

function App() {
  return (
    <Router>
      <ThemeProvider theme={THEME}>
        <GlobalStyle />
        <Routes>
          <Route element={<PublicRoute />}>
            {/* <Route path="/login" exact element={<Login />} /> */}
            <Route path="/login" exact element={<NewLogin />} />

          </Route>
          {/* <Route element={<PrivateRoute />}> */}
            <Route element={<DashboardProvider />}>
              <Route element={<LayoutProvider />}>
                <Route path="/" element={<Layout />}>
                  <Route path="/" exact element={<Dashboard />} />

                  <Route element={<TaskProvider />}>
                    <Route path="/create-task" exact element={<CreateTask />} />
                    <Route path="/task-list" exact element={<TaskList />} />
                  </Route>
                  <Route path="/create-teams" exact element={<CreateTeams />} />
                  <Route path="/team-list" exact element={<TeamList />} />
                  <Route
                    path="/create-project"
                    exact
                    element={<CreateProject />}
                  />
                  <Route
                    path="/projects-list"
                    exact
                    element={<ProjectList />}
                  />
                    <Route
                    path="/approval"
                    exact
                    element={<ApprovalList />}
                  />
                      <Route
                    path="/location"
                    exact
                    element={<LocationList />}
                  />
                      <Route
                    path="/leave-request"
                    exact
                    element={<LeaveList />}
                  />
                </Route>
              </Route>
            </Route>
          {/* </Route> */}
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
