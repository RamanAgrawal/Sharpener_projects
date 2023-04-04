import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  const deletemovie=()=>{
    props.onDelete(props.id)
  }
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={deletemovie}>delete</button>
    </li>
  );
};

export default Movie;
