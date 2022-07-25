import { CgMenuCheese } from 'react-icons/cg';
import "./header.css"
import { useEffect, useState, useContext } from "react";
import { doUserLogOut, updateUser } from '../services/userServices';
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext';


export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [isLoged, setIsLoged] = useState()

  const value = useContext(UserContext)

  useEffect(() => {
    if (value.test) {
      setIsLoged(true)
    } else {
      setIsLoged(false)
    }

  }, [value.test])
  // function update(e){
  //   e.preventDefault()
  //   console.log("test");
  //   updateUser()
  // }

  function logOut(e) {
    e.preventDefault()
    doUserLogOut()
    value.setTest(false)
  }

  return (
    <header>
      <nav className="navigation">
        <Link to="/" className="brand-name">
          VarnaProperties
        </Link>
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
            {isLoged &&
              <>
                <li>
                  <Link to="/create">Create</Link>
                </li>
                <li>
                  <Link to="/logout" onClick={logOut}>logout</Link>
                </li>
              </>
            }
            {!isLoged &&
              <>
                <li>
                  <Link to="/login">login</Link>
                </li>
                <li>
                  <Link to="/register">register</Link>
                </li>
              </>
            }
          </ul>
        </div>
      </nav>
    </header>
  );
}