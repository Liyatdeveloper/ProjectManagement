import React, {Component} from "react";
import { Link } from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light">
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
                        
                        <Link to="/projects" className="nav-link">Projects</Link>
                      </li>
                      <li className="nav-item ">
                        
                        <Link to="/employees" className="nav-link">Employees</Link>
                      </li>
                      <li className="nav-item ml-lg-3">
                        
                         <Link to="/logout" className=" book btn btn-style">Logout</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
            </div>
        )
    }
}
export default Header;