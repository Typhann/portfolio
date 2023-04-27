import React from "react";
import reactLogo from "../assets/react.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="gradient"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <div className="hero">
          <div>
            <h1>
              <span>Nils</span>
              <span>Neidenmark</span>
            </h1>
            <h2>Frontend & UX-designer</h2>
          </div>
          <img src={reactLogo} width={"55%"} />
        </div>
        <Link className="button" to="projects">
          Projects
        </Link>
      </motion.div>
    </>
  );
}
