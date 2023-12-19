import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
const Navbar = () => {
  return (
    <>

      <nav className="nav">
        <motion.div className="navbar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <div className="logo"><h1>.Dev</h1></div>
          <div className="links">
            <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
            <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
          </div>
        </motion.div>
      </nav>
    </>


  )
}

export default Navbar