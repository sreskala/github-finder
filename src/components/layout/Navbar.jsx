import React from "react";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


function Navbar(props) {

    
        return(
          <div>
              <h1 className="navbar bg-primary">
                  <i className = {props.icon} />
                  {props.title}
                  {/* <div className="navbar-links">
                  <ul>
                    <li>
                      <Link to = '/'>Home</Link>
                    </li>
                    <li>
                      <Link to = '/about'>About</Link>
                    </li>
                  </ul>
                  </div> */}
                  </h1>
                  <div className="navbar-links">
                  <ul>
                    <li>
                      <Link to = '/'>Home</Link>
                    </li>
                    <li>
                      <Link to = '/about'>About</Link>
                    </li>
                  </ul>
                  </div>
          </div>  
        );
    
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  }

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}


export default Navbar;