import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-6">
      <p className="text-XL">&copy; {new Date().getFullYear()} GitHub Repository Explorer</p>
      <p className="text-xs text-gray-400">Made with ❤️ by Open Source Enthusiasts</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Twitter</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">LinkedIn</a>
      </div>
    </footer>
  )
}

export default Footer