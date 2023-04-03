import React, { useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false)
  const fetchMovie = async () => {
    try {
      setIsLoading(true)
      let response = await fetch('https://swapi.dev/api/films')

      let data = await response.json()

      const transferMovies = data.results.map(movie => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date
        }
      })
      setMovies(transferMovies)
    } catch (error) {
      setError(true)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    fetchMovie()
  }, [])
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovie}>Fetch Movies</button>
      </section>
      <section>
        {error && <p>error...</p>}
        {isLoading ? <p>...Loading</p> : <MoviesList movies={movies} />}

      </section>

    </React.Fragment>
  );
}

export default App;
