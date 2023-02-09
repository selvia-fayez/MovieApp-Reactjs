import React from "react";
import { NavLink } from "react-router-dom";

function Movie(props) {
  return (
    <div className="position-relative my-3">
      <NavLink to={"/movie/" + props.data.id}>
        <img
          className="w-100"
          src={"https://image.tmdb.org/t/p/w500/" + props.data.poster_path}
        />
        <h3 className="h6 my-2">{props.data.original_title}</h3>
        <div
          className="position-absolute p-2 top-0 end-0 text-white"
          style={{ backgroundColor: "#24baef" }}
        >
          {props.data.vote_average.toFixed(1)}
        </div>
      </NavLink>
    </div>
  );
}

export default Movie;
