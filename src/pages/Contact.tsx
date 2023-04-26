import React, { useRef, useState } from "react";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact(){
  const form = useRef();
  const [btnText, setBtnText] = useState("Send")
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tm159gh', 'template_39ugahc', form.current, 'iW5E8TjuJsshYewD5')
      .then(setBtnText("Sending..."))
      .then((result) => {
          console.log(result.text);
          toast.success('Email sent!');
          setBtnText("Send")
          e.target.reset()

      }, (error) => {
        console.log(error.text);
      });
    };
    return(
      <>
      <ToastContainer
        position="top-center"    
        theme="dark"
      />
      <div className="gradient"></div>
        <motion.div 
        initial={{opacity: 0}} 
        animate={{opacity: 1}} 
        transition={{duration: 0.75, ease: "easeOut"}}>
          <div className="main-container">
            <form ref={form} onSubmit={sendEmail}>
              <h1>Contact</h1>     
              <input type="text" name="user_name" minLength={2} placeholder="Name" required />
              <input type="email" name="user_email" minLength={3} placeholder="Email" required />
              <textarea name="message" placeholder="Your message" required/>
              <input type="submit" value={btnText} />

            </form>
          </div>      
        </motion.div>
    </>
  )
}