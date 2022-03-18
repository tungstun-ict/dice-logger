import React, { Component } from "react";
import "./styles.css";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__background">
            <h1 className="header__title">dice logger</h1>
        </div>
      </header>
    );
  }
}

export default Header;
