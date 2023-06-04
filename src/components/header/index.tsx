import React from 'react'

import { IconProfile, IconChrome, IconArrowDown } from '../../assets'
import './style.css'

const Header: React.FC = () => {
  return (
    <div className='header-container'>
        <div className='header-content'>
            <div className='container-margin-right center-content'>
                <button className='header-button center-content chrome-button'>
                    <img src={IconChrome} alt="chrome" className='space-x-2'/>
                    <span>Add to Chrome</span>
                </button>
                <button className='header-button center-content upgrade-button'>
                    Upgrade to Pro
                </button>
            </div>
            <div className='center-content container-margin-right'>
                <img src={IconProfile} alt="profile" className='header-profile-icon'/>
                <img src={IconArrowDown} alt="dropdown" />
            </div>
        </div>
    </div>
  )
}

export default Header
