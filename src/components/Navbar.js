import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const StyleButton = {
    backgroundColor: props.mode ==='dark'?'white':'black' , height: "20px", width:"20px", borderRadius:"50%"
  }
  return (
    <div>
      <>
      <nav 
      className={`navbar navbar-expand-lg navbar-${props.mode === 'dark' ? 'dark' : 'light'} bg-${props.mode === 'dark' ? 'black' : 'green'}` }style = {{backgroundColor : props.mode ==='dark'?'black':'#90a955'}}
    >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Info">How To Use</Link>
                </li>
                
              </ul>
             <form className="d-flex align-items-center" role="search">
                {/* <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />  */}
                {/* <button className="btn btn-outline-success me-5"  type="submit">Search</button> */}
                <div className= {`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}> 
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    onClick ={props.togglemode}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                     <div style={StyleButton }></div>
                     
                  </label>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutcompp: PropTypes.string,
  home: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Present Title here',
  aboutcompp: 'About us here',
  home: 'Home here'
}
