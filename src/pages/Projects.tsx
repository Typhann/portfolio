import React, {useState, useEffect} from "react";
import { motion } from 'framer-motion';
import reactLogo from "../assets/react.png"
import database from "../database.json"
import { render } from "react-dom";

export default function Projects(){
  const [hoverId, setHoverId] = useState(0)
  const [image, setImage] = useState(database.projects[0].imgM)
  

  useEffect(() => {
    database.projects.filter((project)=> {
      if(project.id === hoverId){
        setImage(project.imgM)
      }
    })
  },[hoverId])


 function handleMouseOver(id){
  setHoverId(id)
 }

  
  const renderProjects = database.projects.map(project => (
    <section key={project.id} onMouseOver={() => handleMouseOver(project.id)}>
    <h2>{project.title}</h2>
    <h3>{project.description}</h3>
    <div className="links">
      <ul><div className="border-gradient"><a href={project.url}><li>Live</li></a></div></ul>
      <ul><div className="border-gradient"><a href={project.github}><li>GitHub</li></a></div></ul>
      <ul><div className="border-gradient"><a href={project.figma}><li>Figma</li></a></div></ul>
      <ul><div className="border-gradient"><a href={project.case}><li>Case study</li></a></div></ul>
    </div>
    </section>
  ))

  return(
    <>
    <div className="gradient"></div>
      <motion.div 
      initial={{opacity: 0}} 
      animate={{opacity: 1}} 
      transition={{duration: 0.75, ease: "easeOut"}}>
        <div className="main-container">
          <div className="scroll-container">
          <h1>Projects</h1>     
          {renderProjects}
          {/* <div className="glass-container"></div>   */}
          </div>
          <img src={image} width={"50%"} />   
        </div>      
      </motion.div>
    </>
   
  )
}