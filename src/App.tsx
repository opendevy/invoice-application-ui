import React, { memo } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { ROUTES } from "./constants";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import AuthProvider from "./providers/AuthProvider";
import { useAuthState } from "./hooks/redux";
import FullLayout from "./components/layout/FullLayout";
import AuthLayout from "./components/layout/AuthLayout";
import Clients from "./pages/Clients";
import Employees from "./pages/Employees";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import Accountant from "./pages/Accountant";
import ProjectPage from "./pages/Project";
import ProjectDetail from "./pages/Project/ProjectDetail";
import EmployeeDetail from "./pages/Employees/EmployeeDetail";

const theme = createTheme({});

const App = memo(() => {
  const { account } = useAuthState();

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        {
          account ? (
            account.permission === 'manager' ? (
              <FullLayout>
                <Switch>
                  <Route exact path={ROUTES.CLIENT} component={Clients} />
                  <Route exact path={ROUTES.EMPLOYEE} component={Employees} />
                  <Route path={ROUTES.EMPLOYEE_DETAIL} component={EmployeeDetail} />
                  <Route exact path={ROUTES.PROJECT} component={ProjectPage} />
                  <Route path={ROUTES.PROJECT_DETAIL} component={ProjectDetail} />
                  <Redirect to={ROUTES.CLIENT} />
                </Switch>
              </FullLayout>
            ) : (
              <FullLayout>
                <Switch>
                  <Route exact path={ROUTES.ACCOUNTANT} component={Accountant} />
                  <Redirect to={ROUTES.ACCOUNTANT} />
                </Switch>
              </FullLayout>
            )
          ) : (
            <AuthLayout>
              <Switch>
                <Route exact path={ROUTES.AUTH.REGISTER} component={Register} />
                <Route exact path={ROUTES.AUTH.LOGIN} component={Login} />
                <Route exact path={ROUTES.AUTH.FORGOT_PASSWORD} component={ForgotPassword} />
                <Route exact path={ROUTES.AUTH.RESET_PASSWORD} component={ResetPassword} />
                <Redirect to={ROUTES.AUTH.LOGIN} />
              </Switch>
            </AuthLayout>
          )
        }
      </AuthProvider>
    </ThemeProvider>
  );
});

export default App;
