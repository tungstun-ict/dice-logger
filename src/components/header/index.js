import React, { Component } from "react";
import "./styles.css";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__background">
          <img
            className="header__logo"
            src={require("../../assets/images/logo.png")}
            alt="logo"
          />
          <h1 className="header__title">dice logger</h1>

          <div className="header__tools">
          <img
            className="header__profile"
            src={require("../../assets/images/profile-picture.png")}
            alt="profile"
          />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
