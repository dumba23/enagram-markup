import React from 'react'
import type SidebarButtonProps from '../../utils/types/SidebarButtonProps'

const App: React.FC<SidebarButtonProps> = ({ imageUrl, title, isActive = false }) => {
  return (
    <button className={`sidebar-button button-active ${isActive ? 'active-button' : ''}`}>
        <img src={imageUrl} alt="button" className="sidebar-button-icon" style={{ fill: 'red' }} />
        <span className="sidebar-button-title">{title}</span>
    </button>
  )
}

export default App
