import React from 'react'
import { Link } from 'react-router-dom'
import Forcast from './Forcast'

export default function NavBar() {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
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
      </ul>
      <div className='d-flex'>
        <Forcast/>
      </div>
    </div>
  </div>
 
</nav>
    </div>
  )
}
