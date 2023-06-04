import React, { useState, useRef } from 'react'
import useOutsideClick from '../../hooks/useOutsideClick'
import type LanguageObject from '../../utils/types/LanguageObject'
import { IconArrowDown, IconCheck, IconUK, IconGermany, IconGeorgia, IconLink, IconFormatClear, IconH2, IconH1, IconNumeric, IconBullet, IconBold, IconItalic, IconUnderline, IconLogo } from '../../assets'
import IconTrash from '../../components/icons/IconTrash'
import IconCopy from '../../components/icons/IconCopy'

import './style.css'

const languages = [
  {
    id: 0,
    name: 'UK',
    icon: IconUK

  },
  {
    id: 1,
    name: 'German',
    icon: IconGermany
  },
  {
    id: 2,
    name: 'Georgian',
    icon: IconGeorgia
  }
]

const Main: React.FC = () => {
  const [activeLanguage, setActiveLanguage] = useState<LanguageObject>(languages[0])
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const ref = useRef(null)

  const handleDropdownOpen = (): void => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleActiveLanguage = (language: LanguageObject): void => {
    setActiveLanguage(language)
  }

  useOutsideClick(ref, () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false)
    }
  })

  return (
    <div className="main-container">
        <div className="main-top-content">
            <button className="check-button center-content">
                <img src={IconCheck} alt="tick" className="space-x-2" />
                <span>Check</span>
            </button>
            <div className="center-content">
                <div className="actions-container center-content">
                    <div className="action-button">
                    <button className="btn center-content">
                            <IconCopy />
                            <span>Copy</span>
                        </button>
                    </div>
                    <div className="action-button">
                        <button className="btn center-content">
                            <IconTrash />
                            <span>Delete</span>
                        </button>
                    </div>
                </div>
                <div onClick={handleDropdownOpen} className="language-dropdown center-content" ref={ref}>
                    <img src={activeLanguage.icon} alt="language" width="20px" height="20px" className="space-x-2"/>
                    <span className="space-x-4">Language</span>
                    <img src={IconArrowDown} alt="arrow" />
                    {isDropdownOpen && (
                        <div className="language-dropdown-content">
                            {
                                languages.map((language) => {
                                  return (
                                        <div key={language.id} onClick={() => { handleActiveLanguage(language) }} className="language-dropdown-item">
                                            <img src={language.icon} alt={language.name} width="20px" height="20px" className="space-x-4" />
                                            <span>{language.name}</span>
                                        </div>
                                  )
                                })
                            }
                        </div>
                    )}
                </div>
            </div>
        </div>
        <div className="main-bottom-container">
            <input type="text" placeholder="Type or paste (⌘+V) something here." className="main-input"/>
            <div className="main-format-container">
                <div className="main-format">
                    <div className="main-format-content main-format-content-border-right space-x-8">
                        <div className="tooltip">
                            <img src={IconBold} alt="" width="20px" height="20px" className="space-x-4"/>
                            <span className="tooltiptext">Bold  Ctrl+B</span>
                        </div>
                        <div className="tooltip">
                            <img src={IconItalic} alt="" width="20px" height="20px" className="space-x-4"/>
                            <span className="tooltiptext"><span>Italic Ctrl+I</span></span>
                        </div>
                        <div className="tooltip">
                            <img src={IconUnderline} alt="" width="20px" height="20px" className="space-x-4"/>
                            <span className="tooltiptext">Underline Ctrl+U</span>
                        </div>
                    </div>
                    <div className="main-format-content main-format-content-border-right space-x-8">
                        <div className="tooltip">
                            <img src={IconBullet} alt="" width="20px" height="20px" className="space-x-4"/>
                            <span className="tooltiptext">Add bullet list</span>
                        </div>
                        <div className="tooltip">
                            <img src={IconNumeric} alt="" width="20px" height="20px" className="space-x-4"/>
                            <span className="tooltiptext">Add numeric list</span>
                        </div>
                    </div>
                    <div className="main-format-content main-format-content-border-right space-x-8">
                        <div className="tooltip">
                            <img src={IconH1} alt="" width="20px" height="20px" className="space-x-4"/>
                            <span className="tooltiptext">Add H1</span>
                        </div>
                        <div className="tooltip">
                            <img src={IconH2} alt="" width="20px" height="20px" className="space-x-4"/>
                            <span className="tooltiptext">Add H2</span>
                        </div>
                    </div>
                    <div className="main-format-content main-format-content-border-right space-x-8">
                        <div className="tooltip">
                            <img src={IconLink} alt="" width="20px" height="20px" className="space-x-4"/>
                            <span className="tooltiptext">Create Link</span>
                        </div>
                    </div>
                    <div className="main-format-content">
                        <div className="tooltip">
                            <img src={IconFormatClear} alt="" width="20px" height="20px"/>
                            <span className="tooltiptext">Format Clear</span>
                        </div>
                    </div>
                </div>
                <div className="main-text-length">
                    628 characters, 103 words
                </div>
                <img src={IconLogo} alt="logo" className="main-logo"/>
            </div>
        </div>
    </div>
  )
}

export default Main
