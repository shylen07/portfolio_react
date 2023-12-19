import React from 'react'
import Glitch from '../components/Glitch'
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <>
      <div className="hero">
        <motion.main className='intro'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <Glitch>Hi I'M Project Page</Glitch>
        </motion.main>
      </div>
    </>
  )
}

export default Projects