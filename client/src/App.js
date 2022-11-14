import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import AboutUs from "./components/aboutUs";

const App = () => {
  let routes = useRoutes([
    { path: "/about", element: <AboutUs /> }
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;