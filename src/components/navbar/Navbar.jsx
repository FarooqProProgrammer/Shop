import "./index.css"
import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Navbar extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Trippy</h1>
                <ul className="nav-menu">
                    <li><Link><i className="fa-solid fa-house-user"></i></Link></li>
                </ul>
            </nav>
        )
    }
}
