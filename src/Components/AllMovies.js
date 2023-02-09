import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
function AllMovies() {
  let [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c"
      )
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);
  return (
    <div className="container">
      <div className="row py-5">
        {movies.map((item, index) => (
          <div className="col-md-2" key={index}>
            <Movie data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllMovies;
