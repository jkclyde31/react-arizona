// SiteInfoContext.js
import React, { createContext } from "react";
import siteInfo from "./config";

export const SiteInfoContext = createContext(siteInfo);

const SiteInfoProvider = ({ children }) => {
  return (
    <SiteInfoContext.Provider value={siteInfo}>
      {children}
    </SiteInfoContext.Provider>
  );
};

export default SiteInfoProvider;
