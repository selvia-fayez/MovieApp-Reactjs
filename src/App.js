import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllMovies from "./Components/AllMovies";
import Counter from "./Components/Counter";
import Home from "./Components/Home";
import MovieDetails from "./Components/MovieDetails";
import Nav from "./Components/Nav";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import Favourites from "./Components/Favourites";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<AllMovies />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/fav" element={<Favourites />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
