import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
const Navbar = () => {
  return (
    <div className='first'>
      <h1 className='title'>
        This is Google Auth Implementation
      </h1>

<Link to="/">Home</Link>
    </div>
  )
}

export default Navbar
