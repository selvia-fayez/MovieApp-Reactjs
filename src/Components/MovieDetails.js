import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AddToFavourite } from "../Redux/FavSlice";

function MovieDetails() {
  const params = useParams();
  let [movie, setMovie] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          params.id +
          "?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c"
      )
      .then((response) => {
        setMovie(response.data);
      });
  });
  function Add() {
    dispatch(AddToFavourite(movie));
  }
  return (
    <div className="row">
      <div className="col-md-3">
        <img
          className="w-100"
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
        />
      </div>
      <div className="col-md-9 d-flex align-items-center">
        <div>
          <h3 className="my-2">
            {movie.title} {movie.name}
          </h3>
          <p className="py-2 text-muted">{movie.overview}</p>

          <h6>Vote Average: {movie.vote_average}</h6>
          <button className="btn btn-danger" onClick={Add}>
            Add To Favourite
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
