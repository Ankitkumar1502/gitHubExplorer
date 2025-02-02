import React from 'react'
import './App.css'
import { useThemeStore } from './Store/useThemeStore'
import Settings from './pages/Settings'
import Nav from './components/Nav'

function App() {
  const{theme} = useThemeStore()
  return (
    <div data-theme={theme}>
      <Settings/>
    </div>
  )
}

export default App
