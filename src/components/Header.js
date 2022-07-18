import { CgMenuCheese } from 'react-icons/cg';
import "./header.css"
import { useState } from "react";
import { doUserLogOut, updateUser} from '../services/userServices';
import {Link} from 'react-router-dom'

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

// function update(e){
//   e.preventDefault()
//   console.log("test");
//   updateUser()
// }

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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/catalog">Catalog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/register">register</Link>
            </li>
            <li>
              <Link to="/logout" onClick={logOut}>logout</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}