import React from 'react';
import { Link } from 'react-router';

function Navbar(props) {
  return (
    <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse main-navbar">
      
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <Link className="navbar-brand main-navbar-brand" to="#">
        <img src="../../assets/images/My Little Cheffy - Logo.png" alt="My Little Cheffy Logo" width="150" height="150" />
        My Little Cheffy
      </Link>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#index-search">Search</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#index-suggest">Suggest</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#index-featured">Featured</Link>
          </li>
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;