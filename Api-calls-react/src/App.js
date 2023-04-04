import React, { useEffect, useState } from 'react';
import AddMovie from './components/AddMovie';
import MoviesList from './components/MoviesList';
import './App.css';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false)
  const fetchMovie = async () => {
    try {
      setIsLoading(true)
      let response = await fetch('https://my-first-project-c381c-default-rtdb.firebaseio.com/movies.json')
      if (!response.ok) {
        throw new Error("Somthing went Wrong")
      }
      let data = await response.json()
      const loadedMovies = [];
      for (let key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        })
      }
      
      setMovies(loadedMovies)
    } catch (error) {
      setError(true)
      console.log(error);
    }
    setIsLoading(false)
  }
  useEffect(() => {
    fetchMovie()
  }, [])

  const addMovieHandler = async (movie) => {
    await axios.post('https://my-first-project-c381c-default-rtdb.firebaseio.com/movies.json',movie)
    
    setMovies(prev=>{
      return [...prev,movie]
    })
  }
  const deleteHandler=(id)=>{
    console.log(id);
    setMovies(prev=>{
      prev=prev.filter(item=>item.id!==id)
      return [...prev]
    })
    axios.delete(`https://my-first-project-c381c-default-rtdb.firebaseio.com/movies/${id}.json`)
  }
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovie}>Fetch Movies</button>
      </section>
      <section>
        {error && <p>error...</p>}
        {isLoading ? <p>...Loading</p> : <MoviesList movies={movies} onMovieDelete={deleteHandler}/>}

      </section>

    </React.Fragment>
  );
}

export default App;
