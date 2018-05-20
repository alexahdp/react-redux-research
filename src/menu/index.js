import * as React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to="/" className="nav-link" href="#home">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/library" className="nav-link" href="#library">Library</Link>
      </li>
      <li className="nav-item">
        <Link to="/dragndrop" className="nav-link" href="#drag">Drag</Link>
      </li>
    </ul>
  </nav>
);
