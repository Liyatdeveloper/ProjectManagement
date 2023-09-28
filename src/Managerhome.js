import React, { Component } from "react";
import axios from "axios";
import "./style-starter.css";
import "./Managerhome.css";
import imgSrc from "./img.jpg";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';
import Addproject from './Addproject';
import Addemployee from "./Addemployee";
import Listproject from "./Listprojects";
import Header from "./Header";
// import App from "./App";

class Managerhome extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <header className="absolute-top">
          {/* Header content */}
          <section className=" w3l-header-4 header-sticky">
            <header className="absolute-top">
              <div className="container-fluid pr-lg-0">
              <Router>
               <Header />
                {/* <nav className="navbar navbar-expand-lg navbar-light">
                  <h1>
                    <a className="navbar-brand" href="#">
                      ProjectManagementSystem
                    </a>
                  </h1>
                  <button
                    className="navbar-toggler bg-gradient collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="fa icon-expand fa-bars"></span>
                    <span className="fa icon-close fa-times"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item @@home__active">
                        
                        <Link to="/" className="nav-link">Home</Link>
                      </li>
                      <li className="nav-item ">
                        
                        <Link to="/projects" className="nav-link">ADD Projects</Link>
                      </li>
                      <li className="nav-item ">
                        
                        <Link to="/employees" className="nav-link">Employees</Link>
                      </li>
                      <li className="nav-item ml-lg-3">
                        
                         <Link to="/logout" className=" book btn btn-style">Logout</Link>
                      </li>
                    </ul>
                  </div>
                </nav> */}

                  <Switch>
                    <Route path="/projects" Component={Addproject} />
                     
                    <Route path="/employees" Component={Addemployee} />
                    {/* <Route path="/login" Component={App} /> */}
                      
                  </Switch>


                </Router>
              </div>
            </header>
          </section>
        </header>

      
        <section className="w3l-recent-work" style={{ padding: "100px" }}>
          {/* Main content */}

          <div className="container">
            
                        <div className="row">
                          <div className="gallery">
                            <a target="_blank" href="#">
                              <img
                                src={imgSrc}
                                alt="Cinque Terre"
                                width="200"
                                height="400"
                              />
                            </a>
                            <div className="desc">Add a description here</div>
                          </div>

                          <div className="gallery">
                            <a target="_blank" href="img.jpg">
                              <img src={imgSrc} alt="Forest" width="600" height="400" />
                            </a>
                            <div className="desc">Add a description here</div>
                          </div>

                          <div className="gallery">
                            <a target="_blank" href="#">
                              <img
                                src={imgSrc}
                                alt="Northern Lights"
                                width="200"
                                height="400"
                              />
                            </a>
                            <div className="desc">Add a description here</div>
                          </div>

                          <div className="gallery">
                            <a target="_blank" href="#">
                              <img src={imgSrc} alt="Mountains" width="200" height="400" />
                            </a>
                            <div className="desc">Add a description here</div>
                          </div>
                          <div className="gallery">
                            <a target="_blank" href="#">
                              <img src={imgSrc} alt="Mountains" width="200" height="400" />
                            </a>
                            <div className="desc">Add a description here</div>
                          </div>
                        </div>
          </div>


          <div className="container mt-5">
            <div className="row">
              <div className="gallery">
                <a target="_blank" href="#">
                  <img
                    src={imgSrc}
                    alt="Cinque Terre"
                    width="200"
                    height="200"
                  />
                </a>
                <div className="desc">Add a description here</div>
              </div>

              <div className="gallery">
                <a target="_blank" href="#">
                  <img src={imgSrc} alt="Forest" width="200" height="400" />
                </a>
                <div className="desc">Add a description here</div>
              </div>

              <div className="gallery">
                <a target="_blank" href="#">
                  <img
                    src={imgSrc}
                    alt="Northern Lights"
                    width="200"
                    height="400"
                  />
                </a>
                <div className="desc">Add a description here</div>
              </div>

              <div className="gallery">
                <a target="_blank" href="img.jpg">
                  <img src={imgSrc} alt="Mountains" width="200" height="400" />
                </a>
                <div className="desc">Add a description here</div>
              </div>
              <div className="gallery">
                <a target="_blank" href="#">
                  <img src={imgSrc} alt="Mountains" width="200" height="400" />
                </a>
                <div className="desc">Add a description here</div>
              </div>
            </div>
          </div>

        </section>

        



        <section className="w3l-footer-29-main">
          {/* Footer content */}

          {/* <section className="w3l-footer-29-main">
                <div className="footer-29 py-5">
                <div className="container">
                    <div className="row footer-top-29">
                    <div className="col-lg-4 col-md-6 col-sm-8 footer-list-29 footer-1">
                        <div className="left-side">
                            <h2><a href="#" className="footer-logo"><span className=" mr-1" aria-hidden="true"></span>ProjectManagement</a></h2>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 footer-list-29 footer-2 ">
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 footer-list-29 footer-2 ">
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6 footer-list-29 footer-2 ">
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="w3l-footer-29-main w3l-copyright">
                <div className="container">
                <div className=" bottom-copies text-center">
                    <p className="copy-footer-29">© 2023 ProjectManagement. All rights reserved | Designed by <a href="#">WebDesigner</a></p>
                </div>
                </div>
            </section> */}
        </section>
      </div>
    );
  }
}
export default Managerhome;
