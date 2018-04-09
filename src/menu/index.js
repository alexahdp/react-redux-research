import * as React from 'react';

export default () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/library">Library</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/drag">Drag</a>
      </li>
    </ul>
  </nav>
);
