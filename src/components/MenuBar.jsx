import React, {Component} from 'react';
import {Link} from 'react-router';
import '../styles/plugins/jqvmap/jqvmap/jqvmap.css';
import '../styles/plugins/morris/morris.css';
import '../styles/components-md.css';
import '../styles/plugins-md.css';
import '../styles/layout3.css';
import '../styles/theme-default3.css';

class MenuBar extends Component {

  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <div className="page-header">

          <div className="page-header-top">

              <div className="container">

                  <div className="page-logo">
                      <h2 style={{"color": "#4DB3A5;"}}>
                          <a href="index.html" style={{"text-decoration": "none;"}}>Parsons Problems</a>
                      </h2>
                  </div>

                  <a href="javascript:;" className="menu-toggler"></a>

                  <div className="top-menu">

                      <ul className="nav navbar-nav pull-right">

                          <li className="dropdown dropdown-user dropdown-dark">
                              <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                  <img src="./assets/admin/layout3/img/avatar.png" alt="" className="img-circle" />
                                  <span className="username username-hide-mobile">Vimal</span>
                              </a>

                              <ul className="dropdown-menu dropdown-menu-default">
                                  <li>
                                      <a href="extra_profile.html">
                                          <i className="icon-user"></i> My Profile
                                      </a>
                                  </li>

                                  <li>
                                      <a href="login.html">
                                          <i className="icon-key"></i> Log Out
                                      </a>
                                  </li>
                              </ul>
                          </li>

                      </ul>

                  </div>

              </div>

          </div>

          <div className="page-header-menu">

              <div className="container">

                  <div className="hor-menu ">

                      <ul className="nav navbar-nav">
                          <li className="active">
                              <a href="index.html">Dashboard</a>
                          </li>

                          <li>
                              <a href="random_problems.html">Random Problems</a>
                          </li>

                          <li>
                              <a href="assignments.html">Assignments</a>
                          </li>

                          <li>
                              <a href="generate_problems.html">Generate Problems</a>
                          </li>

                          <li>
                              <a href="report.html">Reports</a>
                          </li>

                          <li className="menu-dropdown classic-menu-dropdown">
                              <a href="javascript:;" data-hover="megamenu-dropdown" data-close-others="true" data-toggle="dropdown">Help <i className="fa fa-angle-down"></i></a>

                              <ul className="dropdown-menu pull-left">
                                  <li>
                                      <a href="faq.html">FAQ</a>
                                  </li>

                                  <li>
                                      <a href="support.html">Support</a>
                                  </li>

                                  <li>
                                      <a href="https://github.com/kkotwal94/ParsonsProject">Github</a>
                                  </li>

                                  <li>
                                      <a href="about.html">About</a>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                  </div>

              </div>

          </div>

      </div>
      </div>
    );
  }
}

export default MenuBar;
