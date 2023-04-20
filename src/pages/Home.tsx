import React from "react";
import reactLogo from "../assets/react.png"
import {Link} from "react-router-dom"


export default function Home(){
  return(
    <>
      <div className="hero">
        <div>
            <h1><span>Nils</span><span>Neidenmark</span></h1>
            <h2>Frontend & UX-designer</h2>
        </div>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla provident natus obcaecati velit modi saepe vero veniam officiis architecto error, ducimus omnis est officia expedita nam necessitatibus nihil! Nesciunt, ab?</p> */}
        <img src={reactLogo} width={"55%"} />
      </div>   
      <Link className="button" to="projects">Projects</Link>
    </>
  )
}