import React, {memo} from "react";
import {Redirect, Switch, Route} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";
import {ROUTES} from "./constants";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import AuthProvider from "./providers/AuthProvider";
import { useAuthState } from "./hooks/redux";
import FullLayout from "./components/layout/FullLayout";
import AuthLayout from "./components/layout/AuthLayout";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";

const theme = createTheme({});

const App = memo(() => {
  const { account } = useAuthState();

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        {
          account ? (
            <FullLayout>
              <Switch>
                <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
                <Redirect to={ROUTES.DASHBOARD} />
              </Switch>
            </FullLayout>
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
