import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import AboutUs from "./components/aboutUs";
import Home from "./components/home";

const App = () => {
  let routes = useRoutes([
    { 	path: "/", element: <Home />},
	{	path: "/about", element: <AboutUs /> }
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