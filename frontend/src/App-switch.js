import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import App from './App'
import ProtectedRoute from "./auth/protected-route";
import One from './components/views/one'
import Two from './components/views/two'
import ExternalApi from './components/views/external-api'

const AppSwitch = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return "Loading...";
  }

  return (
    <div>
        <Switch>
          <ProtectedRoute path="/one"  component={One} />
          <ProtectedRoute path="/two" component={Two} />
          <ProtectedRoute path="/three" component={ExternalApi} />
          <Route path="/" exact component={App}/>
        </Switch>
    </div>
  );
};

export default AppSwitch;