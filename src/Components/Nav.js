import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import { useSelector } from "react-redux";

function Nav() {
  let count = useSelector((state) => state.countReducer.count);
  let fav = useSelector((state) => state.favReducer.fav);

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="home">Home</NavLink>
        </li>
        <li>
          <NavLink to="login">login</NavLink>
        </li>
        <li>
          <NavLink to="movies">Movies</NavLink>
        </li>
        <li>
          <NavLink to="fav">
            Favourites (<span>{fav.length}</span>)
          </NavLink>
        </li>
        <li>
          <NavLink to="counter">
            Counter (<span>{count}</span>)
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
