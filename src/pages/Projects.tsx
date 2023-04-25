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
        <div className="main-container">
          <div className="scroll-container">
          <section>
            <h2>¡WAKE UP STHMLM!</h2>
            <h3>Gym in central Stockholm</h3>
            <div className="links">
              <ul><div className="border-gradient"><li>Live</li></div></ul>
              <ul><div className="border-gradient"><li>GitHub</li></div></ul>
              <ul><div className="border-gradient"><li>Figma</li></div></ul>
              <ul><div className="border-gradient"><li>Case study</li></div></ul>
            </div>
          </section>
          <section>
            <h2>¡WAKE UP STHMLM!</h2>
            <h3>Gym in central Stockholm</h3>
            <div className="links">
              <ul><div className="border-gradient"><li>Live</li></div></ul>
              <ul><div className="border-gradient"><li>GitHub</li></div></ul>
              <ul><div className="border-gradient"><li>Figma</li></div></ul>
              <ul><div className="border-gradient"><li>Case study</li></div></ul>
            </div>
          </section>
          <section>
            <h2>¡WAKE UP STHMLM!</h2>
            <h3>Gym in central Stockholm</h3>
            <div className="links">
              <ul><div className="border-gradient"><li>Live</li></div></ul>
              <ul><div className="border-gradient"><li>GitHub</li></div></ul>
              <ul><div className="border-gradient"><li>Figma</li></div></ul>
              <ul><div className="border-gradient"><li>Case study</li></div></ul>
            </div>
          </section>
          <section>
            <h2>¡WAKE UP STHMLM!</h2>
            <h3>Gym in central Stockholm</h3>
            <div className="links">
              <ul><div className="border-gradient"><li>Live</li></div></ul>
              <ul><div className="border-gradient"><li>GitHub</li></div></ul>
              <ul><div className="border-gradient"><li>Figma</li></div></ul>
              <ul><div className="border-gradient"><li>Case study</li></div></ul>
            </div>
          </section>
          <section>
            <h2>¡WAKE UP STHMLM!</h2>
            <h3>Gym in central Stockholm</h3>
            <div className="links">
              <ul><div className="border-gradient"><li>Live</li></div></ul>
              <ul><div className="border-gradient"><li>GitHub</li></div></ul>
              <ul><div className="border-gradient"><li>Figma</li></div></ul>
              <ul><div className="border-gradient"><li>Case study</li></div></ul>
            </div>
          </section>
          <section>
            <h2>¡WAKE UP STHMLM!</h2>
            <h3>Gym in central Stockholm</h3>
            <div className="links">
              <ul><div className="border-gradient"><li>Live</li></div></ul>
              <ul><div className="border-gradient"><li>GitHub</li></div></ul>
              <ul><div className="border-gradient"><li>Figma</li></div></ul>
              <ul><div className="border-gradient"><li>Case study</li></div></ul>
            </div>
          </section>
          <section>
            <h2>¡WAKE UP STHMLM!</h2>
            <h3>Gym in central Stockholm</h3>
            <div className="links">
              <ul><div className="border-gradient"><li>Live</li></div></ul>
              <ul><div className="border-gradient"><li>GitHub</li></div></ul>
              <ul><div className="border-gradient"><li>Figma</li></div></ul>
              <ul><div className="border-gradient"><li>Case study</li></div></ul>
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