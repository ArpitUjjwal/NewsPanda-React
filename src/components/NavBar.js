import React, { Component } from 'react'
import { Link } from "react-router-dom";
import logo from './panda.png'

export class Navbar extends Component {

    render() {
        return (
            <div>
                <nav style={{ backgroundColor: '#B00000' }} className="navbar fixed-top navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <Link className="nav-link d-flex text-light" to="/"><span className="badge rounded-pill bg-danger" style={{margin: "-2px"}}><img src={logo} alt="Logo" style={{height: "25px", width:"25px"}}/></span></Link>
                        {/* <Link className="navbar-brand" to="/"><span className="badge rounded-pill bg-danger">NewsPanda</span></Link> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology">Technology</Link>
                                </li>
                            </ul>
                            {/* <Link className="nav-link d-flex text-light" to="/">About Us</Link> */}
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar