import React from 'react';
import Button from './button';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div id="upda">
    <svg xmlns="http://www.w3.org/2000/svg" id="Logo" width="35.312" height="35.313" viewBox="0 0 35.312 35.313">
    <path class="cls-1" d="M389,18.5h25.321a5,5,0,0,1,5,5V48.82a5,5,0,0,1-5,5H389a5,5,0,0,1-5-5V23.5A5,5,0,0,1,389,18.5Z" transform="translate(-384 -18.5)"/>
  <path class="cls-2" d="M406.384,30.252a1.437,1.437,0,1,1,2.851,0V42.123a1.437,1.437,0,1,1-2.851,0V30.252Zm-0.95.781a17.656,17.656,0,0,1-6.653,1.787v6.731q0.517,0.033,1.034.091a15.227,15.227,0,0,1,5.619,1.684V31.033Zm-7.6,8.462V32.879c-0.647.029-1.33,0.046-1.909,0.057a2.066,2.066,0,0,0-1.893,2.173v2.158a2.059,2.059,0,0,0,1.895,2.168l0.472,0.009Q397.113,39.46,397.831,39.5Zm1.321,1.167c0.27,0.023.54,0.051,0.808,0.084l0.24,1.824a1.08,1.08,0,0,1-.756,1.262,0.841,0.841,0,0,1-.178.019h-0.521a0.955,0.955,0,0,1-.871-0.647l-1.248-2.676q0.8,0.023,1.608.069C398.544,40.616,398.851,40.637,399.152,40.662Z" transform="translate(-384 -18.5)"/>
</svg>
  </div>
      <div className="search-container">
        <div className="search-icon"><i className="bi bi-search"></i></div>
        <input type="text" id="search-bar" placeholder="search..."></input>
      </div>
      <div className="container px-4 px-lg-20" id="contin">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar"></div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="demoDropdown" href="/" role="button" data-bs-toggle="dropdown">Demo</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">.</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="pagesDropdown" href="/" role="button" data-bs-toggle="dropdown">Pages</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">.</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="accountDropdown" href="/" role="button" data-bs-toggle="dropdown">Account</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">.</a></li>
              </ul>
            </li>
            <li className="nav-item"><a className="nav-link" href="#!">My Network</a></li>
            <Button />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

