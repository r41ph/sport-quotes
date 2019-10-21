import React from "react";
import "./Header.scss";

interface IProps {
  heading: string
}

const Header:React.FunctionComponent<IProps> = ({ heading }) => (
  <header className="cs-header">
    <h1 className="cs-header__heading">
      {heading}
    </h1>
    <div className="cs-header__overlay"></div>
  </header>
);

export default Header;
