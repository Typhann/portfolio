import React from "react";
import { motion } from 'framer-motion';
import reactLogo from "../assets/react.png"

export default function About(){
  return(
    <>
      <div className="gradient"></div>
      <motion.div 
      initial={{opacity: 0}} 
      animate={{opacity: 1}} 
      transition={{duration: 0.75, ease: "easeOut"}}>
        <div className="hero">
          <div>
              <h1>About</h1>
          </div>
          <img src={reactLogo} width={"55%"} />
        </div>   
      </motion.div>
    </>
  )
}