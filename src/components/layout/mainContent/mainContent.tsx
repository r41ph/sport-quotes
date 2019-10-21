import React from "react";
import "./mainContent.scss";

interface IProps {
    /**
   * Specifies the content
   *
   */
  children: JSX.Element
}

class MainContent extends React.Component<IProps, {}> {
  render() {
    return (
      <div className="cs-main-content">
        {this.props.children}
      </div>
    )
  }
}

export default MainContent;
