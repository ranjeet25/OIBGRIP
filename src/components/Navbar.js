import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/navbar.css";
import Landing from "./Landing";

const Navbar = () => {
  return (
    <div>
      <body>
        <nav className="navMenu">
          <Link className="a" to="/">
            Home
          </Link>
          <Link className="a" to="/">
            Blog
          </Link>
          <Link className="a" to="/">
            Rate
          </Link>

          <Link className="a" to="order">
            Order
          </Link>

          <div class="dot"></div>
        </nav>
      </body>
    </div>
  );
};

export default Navbar;
