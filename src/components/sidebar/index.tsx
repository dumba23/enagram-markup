import React from 'react'
import SidebarButton from '../../feature/ui/SidebarButton'

import { IconSpellchecker, IconMoon, IconSun, IconFacebook, IconQuestion, IconSettings, IconSpeechToText, IconTextToSpeech } from '../../assets'
import './style.css'

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar-container">
        <div className="sidebar-top-container">
            <div className="sidebar-active">
                <b className="sidebar-active-corner-top"/>
                <b className="sidebar-active-corner-bottom"/>
                <SidebarButton imageUrl={IconSpellchecker} title="Spellchecker" isActive={true} />
            </div>
            <SidebarButton imageUrl={IconTextToSpeech} title="Text to speech" />
            <SidebarButton imageUrl={IconSpeechToText} title="Speech to text" />
        </div>
        <div className="sidebar-bottom-container">
            <div className="sidebar-bottom-settings">
                <SidebarButton imageUrl={IconSettings} title="Settings" />
                <SidebarButton imageUrl={IconFacebook} title="Facebook" />
                <SidebarButton imageUrl={IconQuestion} title="Contact support" />
            </div>
            <div className="sidebar-bottom-theme">
                <div className="theme-content center-content">
                    <button className="theme-button"><img src={IconSun} alt="sun" /></button>
                    <button className="theme-button"><img src={IconMoon} alt="moon" /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
