import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AlbumContext } from "../context/AlbumContext";
import "./AlbumPage.css";
import { AuthContext } from "../context/AuthContext";


export const AlbumPage= (props) => {
  const { id } = useParams();
  const { albums} = useContext(AlbumContext);
  const [album, setAlbum] = useState(null);
  const {updateAlbum} = useContext(AlbumContext);
  const {currentUser} = useContext(AuthContext);

  useEffect(() => {
    const selectedAlbum = albums.find((album) => album.id === id);
    setAlbum(selectedAlbum);
  }, [albums, id]);

  // function handleRatingChange(event) {
  //   const query = ratingsRef
  // .where("userId", "==", currentUser.uid)
  // .where("albumId", "==", id);

  //   const newRating = parseInt(event.target.value);
  //   const updatedAlbum = {
  //     ...album,
  //     ratings: album.ratings ? [...album.ratings, newRating] : [newRating],
  //   };
  //   updateAlbum(updatedAlbum);
  // }

  function handleRatingChange(event) {
    const newRating = parseInt(event.target.value) ;
  
    // Check if user is logged in
    if (!currentUser) {
      console.log("User is not logged in");
      return;
    }
  
    // Check if user has already rated the album
    const existingRating = album.ratings.find(rating => rating.userId === currentUser.uid);
    if (existingRating && existingRating.rating == newRating) {
      console.log("User has already rated this album");
      return(<div> Already rated this album </div>)
    }
    else if (existingRating){
      const updatedRatings = album.ratings.map(rating => {
        if (rating.userId === currentUser.uid) {
          return {
            ...rating,
            rating: newRating,
          };
        }
        return rating;
      });
      const updatedAlbum = {
        ...album,
        ratings: updatedRatings,
      };
      updateAlbum(updatedAlbum);
    }

    else{
    // Add new rating to album ratings array
    const updatedAlbum = {
      ...album,
      ratings: [
        ...(album.ratings || []),
        {
          rating: newRating,
          userId: currentUser.uid,
          date: new Date().toLocaleDateString()
        }
      ]
    };
    updateAlbum(updatedAlbum);
  }
  
  }

  if (!album) {
    return <div>Loading...</div>;
  }

  const userRating = album.ratings.find((rating)=> (rating.userId===currentUser.uid));


  return (
    <div className= "album-page">
      <h1>{album.title}</h1>
      <img src={album.image} alt={`${album.title} by ${album.artist}`} />
      <p> Artist: {album.artist}</p>
      <div className="description">
        <p> {album.description} </p>
      </div>
      <h2>Ratings</h2>
      {currentUser? 
      <select onChange={handleRatingChange}>
        <option value={null}>Add Rating...</option>
        <option value="1">1 star</option>
        <option value="2">2 stars</option>
        <option value="3">3 stars</option>
        <option value="4">4 stars</option>
        <option value="5">5 stars</option>
        <option value="6">6 star</option>
        <option value="7">7 stars</option>
        <option value="8">8 stars</option>
        <option value="9">9 stars</option>
        <option value="10">10 stars</option>
      </select>
      : "Must be logged in to add a rating" }

      <div className="ratings">
      {album.ratings?     //If no ratings, display text
      <ul>

        <div className="user-rating">
         Your rating: {userRating && userRating.rating} 
        </div>

        {album.ratings.map((rating, index) => (
          <li key={index}>{rating.rating} stars by {rating.userId.slice(0,8)} on {rating.date}</li>
        ))}
      </ul> : "No ratings yet! "}
          </div>
     
    </div>
  );
}


