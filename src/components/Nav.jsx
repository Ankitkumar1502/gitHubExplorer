import React from 'react'
import { Link } from 'react-router-dom'; 
import { FaGithub } from 'react-icons/fa'; 

const Nav = () => {
  return (
    <nav className="p-4 flex items-center justify-between bg-blue-500 bg-opacity-50 backdrop-blur-md ">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center"> 
          <FaGithub className="text-2xl mr-2" /> 
          <h1 className="text-xl font-bold">My GitHub Explorer</h1>
        </Link>

        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/settings" className="hover:underline">My Themes</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
