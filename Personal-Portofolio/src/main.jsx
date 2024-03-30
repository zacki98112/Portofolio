import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import Bio from './Pages/Bio'
import Skill from './Pages/Skill'
import Project from './Pages/Projects'
import Contact from './Pages/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Home/>
   <Bio/>
   <Skill/>
   <Project/>
   <Contact/>
  </React.StrictMode>,
)
