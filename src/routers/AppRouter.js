import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import LoginPage from "../components/LoginPage";
import NotesDashboardPage from "../components/NotesDashboardPage";
import AddNotePage from "../components/AddNotePage";
import EditNotePage from "../components/EditNotePage";
import NotFoundPage from "../components/NotFoundPage";
import PrivateRoute from "./PrivateRouter";
import PublicRoute from "./PublicRouter";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute
          path="/dashboard"
          component={NotesDashboardPage}
          exact={true}
        />
        <PrivateRoute path="/create" component={AddNotePage} />
        <PrivateRoute path="/edit/:id" component={EditNotePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
