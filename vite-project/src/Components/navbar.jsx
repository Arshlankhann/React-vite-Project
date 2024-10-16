import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/login'><li>Login</li></Link>
      </ul>
    </div>
  )
}
export default Navbar
