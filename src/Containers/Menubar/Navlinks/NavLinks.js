import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/auth-context'
import './NavLinks.css';
import { useHistory } from 'react-router-dom';
const NavLinks = props => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  function onLgout() {
    console.log(history)
    auth.logout()
    history.push('/auth')

  }
  return <ul className="nav-links">
{/*     <li>
      <NavLink to="/" exact>Home</NavLink>
    </li> */}
    <li>
    <a href="https://afmsagr.wordpress.com/" target="_blank" rel="noopener noreferrer">Blog</a>
    </li>
    {auth.isLoggedIn && (<> 
    <li>
      <NavLink to="/dashboard">Crop Diagnoses</NavLink>
    </li>
    <li>
      <NavLink to="/table">Sensors Data</NavLink>
    </li>
    <li>
      <NavLink to="/add">Add Data Record</NavLink>
    </li>
      </>
    )}



    {/* <li>
      <NavLink to="/auth">AUTHENTICATE</NavLink>
    </li> */}

    {!auth.isLoggedIn && (
      
      <li>
        <NavLink to="/auth">Login/Register</NavLink>
      </li>
    )}

    {auth.isLoggedIn && (
      <li>
        <button onClick={onLgout}>Logout</button>
      </li>
    )}
  </ul>
};

export default NavLinks;