import React from "react";
import { motion } from "framer-motion";
import reactLogo from "../assets/react.png";
import { NavLink, Outlet } from "react-router-dom";

export default function About() {
  const activeStyle = {
    backgroundColor: "#575757",
  };

  return (
    <>
      <div className="gradient"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <div className="main-container">
          <div className="scroll-container">
            <h1>About</h1>
            <nav className="about-nav">
              <NavLink
                to={"."}
                end
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Intro
              </NavLink>
              <NavLink
                to={"techstack"}
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Techstack
              </NavLink>
              <NavLink
                to={"interests"}
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Interests
              </NavLink>
            </nav>
            <Outlet />
          </div>
          <img src={reactLogo} width={"55%"} />
        </div>
      </motion.div>
    </>
  );
}
