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
      <section className="cs-main-content">
        {this.props.children}
      </section>
    )
  }
}

export default MainContent;
