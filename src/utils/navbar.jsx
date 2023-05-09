import React from "react";

const NavBar = () => (
  <div className="bg-danger py-2 px-2">
    <span>
      <a
        className="btn-sm text-decoration-none bg-danger rounded-0 text-light"
        href="https://github.com/shaneparmar/algorithm-visualizer"
      >
        <i className="fab text-light fa-github"></i>
        &nbsp; Source Code
      </a>
      <a
        className="btn-sm text-decoration-none bg-danger rounded-0 text-light"
        href="https://www.linkedin.com/in/shaneparmarr/"
      >
        <i className="fab text-light fa-linkedin"></i>
        &nbsp; Shane Parmar
      </a>
    </span>
  </div>
);

export default NavBar;
