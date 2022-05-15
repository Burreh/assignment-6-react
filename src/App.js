import React, { useState } from 'react'
import MovieForm from './components/MovieForm'
import MovieList from './components/MovieList'
import OrderByAlpha from './components/OrderByAlpha'
import OrderByGrade from './components/OrderByGrade'

function App() {
  const [movies, setMovies] = useState([]);

  // Add movie
  function addMovie(movie) {
    const id = Math.floor(Math.random() * 10000);
    const newMovie = { id, ...movie };
    setMovies([...movies, newMovie]);
  }

  // Delete movie
  function deleteMovie(id) {
    setMovies(movies.filter((movie) => movie.id !== id));
  }

  function sortByAlpha() {
    const alphaSorted = [...movies].sort((a, b) => {
      return a.title > b.title ? 1 : -1;
    })
    setMovies(alphaSorted);
  }

  function sortByGrade() {
    const gradeSorted = [...movies].sort((a, b) => b.grade - a.grade);
    setMovies(gradeSorted);
  }

  return (
    <div className="container">
      <h1>Min filmlista</h1>
      <MovieForm addMovie={addMovie} />
      <MovieList movies={movies} onDelete={deleteMovie} />
      <OrderByAlpha sortAlpha={sortByAlpha} />
      <OrderByGrade sortGrade={sortByGrade} />
    </div>
  );
}

export default App;
