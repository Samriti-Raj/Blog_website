import {useState,useEffect} from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon,faBlog,faBars } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
;


const Navbar1 = () => {
  const [theme,setTheme] = useState("light-theme");
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav>
      <h4 className='blogclass' ><FontAwesomeIcon icon={faBlog} style={{color:'orangered'}}/>BlogNest</h4>
      <div  onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className='bars'/>
        </div>
        <ul className={showMenu ? "show" : ""}>
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
          <Button variant="primary" onClick={handleShow} className='btn1'>
        Log In
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{backgroundColor:"#222222"}}>
            Sign Up
          </Button>
          <Button variant="primary" onClick={handleClose} style={{backgroundColor:"orangered",border:'none'}}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
          <button className='togglebtn'onClick={()=>ToggleTheme()}><FontAwesomeIcon style={{height:'3vh'}}icon={faMoon} /></button>
        </ul>
      </nav>
      
    </>
  );
}

export default Navbar1;