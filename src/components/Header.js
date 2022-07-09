import { CgMenuCheese } from 'react-icons/cg';
import "./header.css"
import { useState } from "react";

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <header>
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
          <CgMenuCheese className='nav-bar-icon' />
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
    </header>
  );
}