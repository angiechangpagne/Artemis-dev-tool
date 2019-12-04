import React, { Component } from "react";
import Header from "../components/Headers";

export default class Layout extends Component {
  handleLogut = () => {
    localStorage.removeItem("authToken");
  };
  render() {
    return (
      <React.Fragment>
        <Header logout={this.handleLogut} />
        <main>{this.props.children}</main>
      </React.Fragment>
    );
  }
}