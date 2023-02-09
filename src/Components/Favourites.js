import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveFromFavouite } from "../Redux/FavSlice";

function Favourites() {
  const dispatch = useDispatch();

  function remove(id) {
    dispatch(RemoveFromFavouite(id));
  }
  let fav = useSelector((state) => state.favReducer.fav);
  return (
    <div>
      {fav.map((movie, index) => (
        <section key={index} id="fav">
          <div className="row ">
            <div className="col-md-3 ">
              <img
                className="w-100 h-75"
                src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
              />
            </div>
            <div className="col-md-9 d-flex mt-2">
              <div>
                <h3 className="my-2">
                  {movie.title} {movie.name}
                </h3>
                <p className="py-2 text-muted">{movie.overview}</p>

                <h6>Vote Average: {movie.vote_average}</h6>
                <button
                  className="btn btn-danger mt-5"
                  onClick={() => remove(movie.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Favourites;
