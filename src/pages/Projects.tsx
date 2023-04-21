import React from "react";
import { motion } from 'framer-motion';
import reactLogo from "../assets/react.png"

export default function Projects(){
  return(
    <>
      <div className="gradient"></div>
      <motion.div 
      initial={{opacity: 0}} 
      animate={{opacity: 1}} 
      transition={{duration: 0.75, ease: "easeOut"}}>
        <h1>Projects</h1>     
        <div className="portfolio-container">
          <div className="outer-container">
          <section>
            <h2>¡WAKE UP STHMLM!</h2>
            <h3>Gym in central Stockholm</h3>
            <div className="links">
              <ul><li>Live</li></ul>
              <ul><li>GitHub</li></ul>
              <ul><li>Figma</li></ul>
              <ul><li>Case study</li></ul>
            </div>
          </section>
          <section>
            <h2>¡WAKE UP STHMLM!</h2>
            <h3>Gym in central Stockholm</h3>
            <div className="links">
              <ul><li>Live</li></ul>
              <ul><li>GitHub</li></ul>
              <ul><li>Figma</li></ul>
              <ul><li>Case study</li></ul>
            </div>
          </section>
          <section>
            <h2>¡WAKE UP STHMLM!</h2>
            <h3>Gym in central Stockholm</h3>
            <div className="links">
              <ul><li>Live</li></ul>
              <ul><li>GitHub</li></ul>
              <ul><li>Figma</li></ul>
              <ul><li>Case study</li></ul>
            </div>
          </section>
          <section>
            <h2>¡WAKE UP STHMLM!</h2>
            <h3>Gym in central Stockholm</h3>
            <div className="links">
              <ul><li>Live</li></ul>
              <ul><li>GitHub</li></ul>
              <ul><li>Figma</li></ul>
              <ul><li>Case study</li></ul>
            </div>
          </section>
          <section>
            <h2>¡WAKE UP STHMLM!</h2>
            <h3>Gym in central Stockholm</h3>
            <div className="links">
              <ul><li>Live</li></ul>
              <ul><li>GitHub</li></ul>
              <ul><li>Figma</li></ul>
              <ul><li>Case study</li></ul>
            </div>
          </section>
          <section>
            <h2>¡WAKE UP STHMLM!</h2>
            <h3>Gym in central Stockholm</h3>
            <div className="links">
              <ul><li>Live</li></ul>
              <ul><li>GitHub</li></ul>
              <ul><li>Figma</li></ul>
              <ul><li>Case study</li></ul>
            </div>
          </section>
          <section>
            <h2>¡WAKE UP STHMLM!</h2>
            <h3>Gym in central Stockholm</h3>
            <div className="links">
              <ul><li>Live</li></ul>
              <ul><li>GitHub</li></ul>
              <ul><li>Figma</li></ul>
              <ul><li>Case study</li></ul>
            </div>
          </section>
          {/* <div className="glass-container"></div>   */}
          </div>
          <img src={reactLogo} width={"50%"} />   
        </div>
       
        
      </motion.div>
    </>
   
  )
}