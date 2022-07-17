import { CgMenuCheese } from 'react-icons/cg';
import "./header.css"
import { useState } from "react";
import { doUserLogOut, updateUser, getUserData } from '../services/userServices';

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

function update(e){
  e.preventDefault()
  console.log("test");
  updateUser()
}

function logOut(e){
  e.preventDefault()
  doUserLogOut()
}

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
              <a href="/catalog">Catalog</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact" onClick={update}>Contact</a>
            </li>
            <li>
              <a href="/login">login</a>
            </li>
            <li>
              <a href="/register">register</a>
            </li>
            <li>
              <a href="/logout" onClick={logOut}>logout</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}