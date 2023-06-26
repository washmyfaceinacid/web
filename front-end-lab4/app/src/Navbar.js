import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="wrapper-top">
        <ul>
          <li className="nav-area-l nav-area-li">
            <Link to="/home">Home</Link>
          </li>
          <li className="nav-area-r nav-area-li">
            <Link to="/user">User</Link>
          </li>
          <li className="nav-area-r nav-area-li">
            <Link to="/login">Log in</Link>
          </li>
          <li className="nav-area-r nav-area-li">
            <Link to="/service">Service</Link>
          </li>
        </ul>
      </div>
    );
  }
}
