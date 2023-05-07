import React, { useContext } from "react";
import AlbumList from "../components/Albumlist";
import { AlbumContext } from "../context/AlbumContext";
import "./TopRatedPage.css";

export const TopRatedPage = (props) => {
  const { albums } = useContext(AlbumContext);

  const sortedAlbums = albums.sort((a, b) => {    //sorts albums by rating
    const aRatings = a.ratings.map((rating) => rating.rating);    //Map to isolate rating values
    const bRatings = b.ratings.map((rating) => rating.rating);

    const aAverageRating = a.ratings.length>0? aRatings.reduce((total, rating) => total + rating, 0) / a.ratings.length :-1;
    const bAverageRating = b.ratings.length>0? bRatings.reduce((total, rating) => total + rating, 0) / b.ratings.length :-1;
    return bAverageRating - aAverageRating;
  });

  const topRatedAlbums = sortedAlbums.slice(0, 10); //show Top 10 albums

  return (
    <div className="top-rated-page">
      <h1>Top Rated Albums</h1>
      <AlbumList albums={topRatedAlbums} className="album-list"/>
    </div>
  );
};