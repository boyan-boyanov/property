import { CgMenuCheese } from 'react-icons/cg';
import "./header.css"
import { useState, useContext } from "react";
import { doUserLogOut } from '../../../services/userServices';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const { auth } = useContext(AuthContext)
  const { userLogin } = useContext(AuthContext)
  //console.log(auth.username);

  const navigate = useNavigate()

  function logOut(e) {
    e.preventDefault()
    setIsNavExpanded(!isNavExpanded)
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
            <li className='navigate__li'>
              <Link onClick={() => {
                setIsNavExpanded(!isNavExpanded)
              }} to="/">Home</Link>
            </li>
            <li className='navigate__li'>
              <Link onClick={() => {
                setIsNavExpanded(!isNavExpanded)
              }} to="/catalog">Catalog</Link>
            </li>
            <li className='navigate__li'>
              <Link onClick={() => {
                setIsNavExpanded(!isNavExpanded)
              }} to="/about">About</Link>
            </li>
            {auth.username &&
              <>
                <li className='navigate__li'>
                  <Link onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                  }} to="/create">Create</Link>
                </li>
                <li className='navigate__li'>
                  <Link onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                  }} to={`/profile`}>Profile</Link>
                </li>
                <li className='navigate__li'>
                  <Link to="/logout" onClick={logOut}>logout</Link>
                </li>
              </>
            }
            {!auth.username &&
              <>
                <li className='navigate__li'>
                  <Link onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                  }} to="/login">login</Link>
                </li>
                <li className='navigate__li'>
                  <Link onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                  }} to="/register">register</Link>
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