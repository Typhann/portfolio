import React from "react"
import { motion } from 'framer-motion';
export default function aboutIntro(){
  return(
    <>
      <motion.div 
      initial={{opacity: 0}} 
      animate={{opacity: 1}} 
      transition={{duration: 0.75, ease: "easeOut"}}>
       <p>Intro intro ipsum dolor sit, amet consectetur adipisicing elit. Molestiae officia fugiat ex nam? Blanditiis aspernatur quasi quas debitis harum et itaque officiis. Tempora, dignissimos maiores ipsum repudiandae repellat quisquam mollitia?</p>
     </motion.div>
  </>
  )
}