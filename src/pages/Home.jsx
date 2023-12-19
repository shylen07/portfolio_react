import React from 'react'
import Glitch from '../components/Glitch'
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion"

const Home = () => {
  return (
    <>
      <div className="hero" >
        <motion.main className="intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
        >
          <h3>Hi, My name is</h3>
          <Glitch>DEVENDER SINGH</Glitch> 
          
          <p>Your friend neighborhood Frontend Developer, Full Stack Developer, Python Developer. I spend my day painting the Internet canvas with
            < NavLink to="/projects"><strong> PROJECTS</strong></NavLink> and lines of code, turning zeroes and ones into immersive, interactive experiences.</p>
          <p>When I'm not at the computer, I'm usually hanging out with friends, exploring new places, or enjoying various outdoor activities. </p>
          <div className="see_more">
            <NavLink to="/about" >See More About Me <ion-icon name="arrow-forward-outline" className="arrow-icon"></ion-icon></NavLink>
          </div>

          <div className="social">
            <NavLink to="https://github.com/shylen07" target='blank'><ion-icon name="logo-github"></ion-icon></NavLink>
            <NavLink to="https://www.linkedin.com/in/devender-singh00/" target='blank'><ion-icon name="logo-linkedin"></ion-icon></NavLink>
            <NavLink to="https://leetcode.com/dkathait269/" target='blank'><ion-icon name="code-outline"></ion-icon></NavLink>
            
          </div>
        </motion.main>
      </div>
    </>
  )
}

export default Home