import React from 'react'
import { Link } from 'react-router-dom'

const NavBars = () => {
  return (
    <div>
      <div className="upper-nav"></div>
      
      
      <div className="main-nav">
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">INTER NIT SILCHAR, 2022</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-5 mb-2 mb-lg-0 ms-auto">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="far">Fixtures & Results</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link" to="stats">
            Stats
          </Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href='#'>Rules & Guidelines</a>
        </li>
        <li className='nav-item'><Link className='nav-link' to='sponsors'>Sponsors</Link></li>
        <li className='nav-item'><Link className='nav-link' to='team'>Team</Link></li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    </div>
  )
}

export default NavBars
