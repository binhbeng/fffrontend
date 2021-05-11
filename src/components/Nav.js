import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class Nav extends Component {
  render() {
    return (
      <div>
        <header id="header">
          <nav className="navbar navbar-default navbar-fixed-top menu">
            <div className="container">
              {/* Brand and toggle get grouped for better mobile display */}
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a className="navbar-brand" href="index-register.html"><img src="images/logo.png" alt="logo" /></a>
              </div>
              {/* Collect the nav links, forms, and other content for toggling */}
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right main-menu">
                  {/* <li className="dropdown"><a href="/home">Home</a></li>
                  <li className="dropdown"><a href="contact.html">Contact</a></li>
                  <li className="dropdown"><a href="contact.html">Notification</a></li>
                  <li className="dropdown"><a href="contact.html">Message</a></li> */}

                  <li className="dropdown">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="dropdown">
                    <Link to="/login">Login</Link>
                  </li>
                  <li className="dropdown">
                    <Link to="/users">Users</Link>
                  </li>
                </ul>
                <form className="navbar-form navbar-right hidden-sm">
                  <div className="form-group">
                    <i className="icon ion-android-search" />
                    <input type="text" className="form-control" placeholder="Search friends, photos, videos" />
                  </div>
                </form>
              </div>{/* /.navbar-collapse */}
            </div>{/* /.container */}
          </nav>
        </header>
      </div>
    );
  }
}

export default Nav;