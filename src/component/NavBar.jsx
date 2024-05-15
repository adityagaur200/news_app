import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar() {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid">
    <Link className="navbar-brand mx-3" to="/">Daily News</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/General">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/General">General</Link></li>
            <li><Link className="dropdown-item" to="/Business">Business</Link></li>
            <li><Link className="dropdown-item" to="/Science">Science</Link></li>
            <li><Link className="dropdown-item" to="/Entertainment">Entertainment</Link></li>
            <li><Link className="dropdown-item" to="/Health">Health</Link></li>
            <li><Link className="dropdown-item" to="/Sport">Sport</Link></li>
            <li><Link className="dropdown-item" to="/Technology">Technology</Link></li> 
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Country
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/India">India</Link></li>
            <li><Link className="dropdown-item" to="/USA">USA</Link></li>
            <li><Link className="dropdown-item" to="/Australia">Australia</Link></li>
            <li><Link className="dropdown-item" to="/England">England</Link></li>
            <li><Link className="dropdown-item" to="/France">France</Link></li>
            <li><Link className="dropdown-item" to="/Russia">Russia</Link></li>
            <li><Link className="dropdown-item" to="/Chaina">China</Link></li> 
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
