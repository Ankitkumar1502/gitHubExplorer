import React from 'react'
import './App.css'
import { useThemeStore } from './Store/useThemeStore'
import Settings from './pages/Settings'
import Nav from './components/Nav'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Footer from './pages/Footer'
import RepoDetails from './pages/RepoDetails'

function App() {
  const{theme} = useThemeStore()
  return (
    <div data-theme={theme}>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/repo/:id" element={<RepoDetails />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
