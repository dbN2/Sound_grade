import React from "react";
import "./Album.css";
import { Link } from "react-router-dom";


  function Album(props) {
    const { id, title, artist, image, ratings, year, genre} = props.album;
    const capitalizedGenre = genre.charAt(0).toUpperCase() + genre.slice(1);

    let averageRating;
    let totalRating;
  
    if (ratings) {
      const ratingValues = ratings.map((rating) => rating.rating);
      totalRating = ratingValues.reduce((total, rating) => total + rating, 0);
      averageRating = ratingValues.length > 0 ? totalRating / ratingValues.length : 0;
    }
    // rest of the component code
  


  return (
    <Link to={`/album/${id}`}>
    <div className="album">
    <div className="cover">
      <img src={image} alt={title} />
    </div>
    <div className="info">
      <h2>{title}</h2>
      <p>by {artist}</p>
  <p> {year} <div className="genre" style={{fontStyle: 'italic'}}> {capitalizedGenre} </div> </p>

  
    <div className="ratings">
        <div className="average-rating">{averageRating.toFixed(1)}</div>
    </div>
  </div>
  </div>
  </Link>
);
}


export default Album;