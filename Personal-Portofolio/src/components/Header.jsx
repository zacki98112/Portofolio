import React from 'react'
import '../style.css'
function Header() {
  return (
    <div id='Home'>
       <div id='logo'>Code With Zacki
       </div>
        
       <nav id='link'>
           <ul>
            <a href="#">Home</a>
            <a href="#Bio">About</a>
            <a href="#Skill">Skills</a>
            <a href="#Project">Project</a>
            <a href="#contact">Contact</a>
           </ul>
       </nav>
    </div>
  )
}

export default Header