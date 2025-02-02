import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
    
      <h1 className="text-xl font-bold">MyApp</h1>

    
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:underline">Settings</Link>
        </li>
        {/* <li>
          <Link to="/about" className="hover:underline">About</Link>
        </li> */}
      </ul>
    </div>
  </nav>

  )
}

export default Nav