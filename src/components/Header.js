import { CgMenuCheese } from 'react-icons/cg';
import "./header.css"
import { useEffect, useState, useContext } from "react";
import { doUserLogOut, updateUser } from '../services/userServices';
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [isLoged, setIsLoged] = useState()
  const { auth } = useContext(AuthContext)
  const {userLogin} = useContext(AuthContext)
  const value = useContext(AuthContext)
//console.log(auth.username);
 
  const navigate = useNavigate()

  function logOut(e) {
    e.preventDefault()
    doUserLogOut()
    userLogin({})
    navigate('/')
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
            {auth.username &&
              <>
                <li>
                  <Link to="/create">Create</Link>
                </li>
                <li>
                  <Link to={`/profile`}>Profile</Link>
                </li>
                <li>
                  <Link to="/logout" onClick={logOut}>logout</Link>
                </li>
              </>
            }
            {!auth.username &&
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

export default Header