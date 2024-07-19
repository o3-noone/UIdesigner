import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./header.css"
const Header = () => {
  const [activeH, setActiveH] = useState(1)
  return (
    <div className="header-box p-50">
      <div className="header">
        <ul className="header-l">
        <li
        className={`header-i ${activeH === 1 ? 'h-active' : ''}`}
        onClick={() => setActiveH(1)}
      >
        Home
      </li>
      <li
        className={`header-i ${activeH === 2 ? 'h-active' : ''}`}
        onClick={() => setActiveH(2)}
      >
        About
      </li>
      <li
        className={`header-i ${activeH === 3 ? 'h-active' : ''}`}
        onClick={() => setActiveH(3)}
      >
        Service
      </li>
        </ul>
        <ul className="header-c">
          <Link to={"/"}>JCREA</Link>
        </ul>
        <ul className="header-r">
        <li
        className={`header-i ${activeH === 4 ? 'h-active' : ''}`}
        onClick={() => setActiveH(4)}
      >
        Resume
      </li>
      <li
        className={`header-i ${activeH === 5 ? 'h-active' : ''}`}
        onClick={() => setActiveH(5)}
      >
        Project
      </li>
      <li
        className={`header-i ${activeH === 6 ? 'h-active' : ''}`}
        onClick={() => setActiveH(6)}
      >
        Contact
      </li>
        </ul>
      </div>
    </div>
  )
}

export default Header