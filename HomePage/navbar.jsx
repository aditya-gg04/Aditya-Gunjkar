import React from "react"
import './navbar.css'
import Animation from "./style"
import Enspire from "./enspire"
import Events from "../events/events"
import { Link,NavLink } from "react-router-dom"

const Navbar1 = () => {
    return (

        <header >
            <nav>
                <div className="navbar-main">
                    <Link to="/" className="flex items-center">
                        <img
                            src="./assets/enspire-logo.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    
                    <div className="headings">
                        <ul>
                            <li>
                                <NavLink
                                to="/"
                                    className="select"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/events"
                                className="select"
                                    
                                >
                                    Events
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/sponsors"
                                className="select"
                                >
                                    Sponsors
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/"
                                className="select"
                                >
                                    Teams
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/"
                                className="select"
                                >
                                    Gallery
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/"
                                className="select"
                                >
                                    Contact
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                    <Link to="/" className="flex items-center">
                        <img
                            src="./assets/iiitllogo.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                </div>
            </nav>
        </header>

    )
}

export default Navbar1