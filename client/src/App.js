import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,

} from "react-router-dom";

import AboutUs from "./components/aboutUs";
import Home from "./components/home";
import Prototype from "./components/prototype"

const App = () => {
  let routes = useRoutes([
    { 	path: "/", element: <Home />},
	  {	  path: "/about", element: <AboutUs /> },
    {   path: "/prototype", element: <Prototype />}
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <Navbar />
      <App />
    </Router>
  );
};

export default AppWrapper;