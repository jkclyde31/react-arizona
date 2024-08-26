import React from "react";
import { Header, Footer } from "./components";
import { Outlet, useLocation } from "react-router-dom";
// import "./styles/index.css";
import "./styles/inner.css";
import SiteInfoProvider from "./context";

const App = () => {
  const location = useLocation();

  const getClassName = () => {
    return location.pathname === "/" ? "" : "inner";
  };

  return (
    <SiteInfoProvider>
      <Header />
      <div className={getClassName()}>
        <Outlet />
      </div>
      <Footer />
    </SiteInfoProvider>
  );
};

export default App;
