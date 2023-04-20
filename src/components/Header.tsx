import React from "react";
import {Link, NavLink} from "react-router-dom"

export default function Header(){
  
  return(
    <header>
      <Link to="/">Nils Neidenmark</Link>
      <nav>
        <NavLink to="about">About</NavLink>
        <a href="https://github.com/Typhann" target="blank">GitHub</a>
        <NavLink to="/">CV</NavLink>
        <NavLink to="contact">Contact</NavLink>
        <NavLink to="projects">Projects</NavLink>
      </nav>
    </header>
  )
}