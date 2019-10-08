import React, { Suspense, lazy } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const LoginScreen = lazy(() => import("./containers/Login/Login"))
const SignupScreen = lazy(() => import("./containers/Signup/Signup"))
const HomeScreen = lazy(() => import("./containers/Home"))


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/signup" component={SignupScreen} />
          <Route exact path="/home" component={HomeScreen} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
