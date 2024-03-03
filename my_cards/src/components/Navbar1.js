import {useState,useEffect} from 'react'
import '../styles/navbar.css'
import '../styles/togglemode.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon,faBlog } from '@fortawesome/free-solid-svg-icons';
;


const Navbar1 = () => {
  const [theme,setTheme] = useState("light-theme");
  const ToggleTheme = () => {
    if(theme === "dark-theme")
    {
      setTheme("light-theme")
    } else {
      setTheme("dark-theme")
    }
  }

  useEffect(()=> {
    document.body.className = theme;
  },[theme])

  return (
    <>
      <nav>
      <h4 className='blogclass' ><FontAwesomeIcon icon={faBlog} style={{color:'orangered'}}/>BlogNest</h4>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <button className="btn">Log In</button>
          <button className='togglebtn'onClick={()=>ToggleTheme()}><FontAwesomeIcon style={{height:'3vh'}}icon={faMoon} /></button>
        </ul>
      </nav>
      
    </>
  );
}

export default Navbar1;
