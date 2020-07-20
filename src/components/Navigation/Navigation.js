import "./navigation.scss";

import React from "react";
import { ReactComponent as HomeSVG } from "../../assets/home.svg";
import { ReactComponent as LogoSVG } from "../../assets/nearpod-logo.svg";

const Navigation = () => {
  return (
    <div className="mock-navigation">
      <HomeSVG /> <LogoSVG />
    </div>
  );
};

export default Navigation;
