import React from 'react'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Main from './components/main'

import './App.css'

const App: React.FC = () => {
  return (
    <div className="app-container">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-main">
        <Sidebar />
        <Main />
      </div>
    </div>
  )
}

export default App
