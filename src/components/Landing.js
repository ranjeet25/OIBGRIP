import React from "react";
import "../assets/css/Landing.css";
import pizza from "../assets/images/pizza-pzilla.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Landing = () => {
  return (
    <div>
      <div className="greet">
        <div className="right-text">
          <h1>Hello dear user enjoy your PIZZA</h1>
          <p>
            lorsgxs hjgjhg gyug hhw hshww wgww xhw w wxx whxw xwvwwxwbxx sjxdjc
            mdcbicjack ecvec
          </p>
          <Link className="orderlink" to="order">
            Order
          </Link>
        </div>
        <div className="left-img">
          <img src={pizza} alt="Pizza"></img>
        </div>
      </div>
      <Navbar></Navbar>
    </div>
  );
};

export default Landing;
