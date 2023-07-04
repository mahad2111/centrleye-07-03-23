import { Outlet, Link } from "react-router-dom";
import "./Layout.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Logo from "../images/Untitled design (1).png"
const Layout = () => {
  return (
    <div className="layout">
      <nav className="container navbar">
        <div className="logo">
        <img  className="logo-img" src= {Logo} size={80} />
        {/* <p className='logo-text'>
    CentrlEye
   </p> */}
</div>
<menu>
        <ul className="nav-links">
          <li>
            <Link to="/">Home </Link><FontAwesomeIcon className='nav-down' icon={faAngleDown}/>
          
          </li>
          <li>
            <Link to = "/Events">Events</Link>
            <FontAwesomeIcon className='nav-down' icon={faAngleDown}/>
          </li>
          <li>
            <Link to="/contact">Contact</Link> <FontAwesomeIcon className='nav-down' icon={faAngleDown}/>
         
          </li>
          <li>
          <Link to="/CenPlus">CentrlEye+</Link>
          
          </li>
          <li id="login">
            <Link to="/Signinup">Login</Link>
          </li>
          
        </ul>
        </menu>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;