import React, {useState} from "react"
import headLogo from "../assets/headLogo.png"
import {Link, NavLink} from "react-router-dom"
import "../styles/header.css"

export default function Header(){
    const [menuOpen, setMenuOpen]= useState(false)
    return(
        <header className={menuOpen ? "open" : ""}>
        <div className="logo-head" id={menuOpen ? "open" : ""}>
        <Link to="/"><img src={headLogo} alt="headlogo"></img></Link>
        <svg id="x"
        onClick={() => {
            setMenuOpen(!menuOpen)
        }}
        xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none"><path d="M1 0.5L13 12.5M25 0.5L13 12.5M1 24.5L13 12.5M25 24.5L13 12.5"/>
        </svg>
        <svg id="dots"
        onClick={() => {
            setMenuOpen(!menuOpen)
        }}
        xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M0 0.5H24M24 12.5H0M0 24.5H24"/>
        </svg>
        </div>
        <nav className={menuOpen ? "open" : ""}>
            <div className="nav-btns">
                <NavLink to="/Musk-project/" className="nav-btn">home</NavLink>
                <NavLink to="/ourteam" className="nav-btn">our team</NavLink>
                <NavLink to="/programs" className="nav-btn">programs</NavLink>
                <NavLink to="/courses" className="nav-btn">courses</NavLink>
                <NavLink to="/blog" className="nav-btn">blog</NavLink>
            </div>
            <div className="head-side-btns">
                <Link to="/joinus" className="head-side-btn">Join Us</Link>
                <Link to="/partner" className="head-side-btn">Partner with us<svg xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.222168 7.5H18.9999M18.9999 7.5L18.5576 7.57797C15.0218 8.20128 12.076 10.6417 10.806 14V14M18.9999 7.5L18.5576 7.42203C15.0218 6.79872 12.076 4.35825 10.806 1V1"/>
                </svg>
                </Link>
            </div>

        </nav>
        </header>
    )
}