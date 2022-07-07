import { CgMenuCheese } from 'react-icons/cg';
import "../styles/navbar.css"
import { useState } from "react";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        VarnaProperties
      </a>
      <button
        className="drop-menu"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        <CgMenuCheese className='nav-bar-icon'/>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/login">login</a>
          </li>
          <li>
            <a href="/register">register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}