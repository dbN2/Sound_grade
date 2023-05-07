import React, { useContext } from "react";
import AlbumList from "../components/Albumlist";
import { AlbumContext } from "../context/AlbumContext";
import { useParams } from "react-router-dom";
import "./GenrePage.css";

export const GenrePage = (props) => {
  const { albums } = useContext(AlbumContext);  
  const {genre} = useParams();

  const capitalizedGenre = genre.charAt(0).toUpperCase() + genre.slice(1);

  let genreAlbums;
  if( genre=== "other"){  //if page is 'other genres'
    genreAlbums = albums.filter(album => {
      const genre = album.genre.toUpperCase().trim();
      return genre !== "ROCK" && genre !== "POP" && genre !== "ELECTRONIC"});
  }
  else{
  genreAlbums =albums.filter(album => album.genre.toUpperCase().trim() === genre.toUpperCase());
  }
  return (
    <div>
      <h1>{capitalizedGenre} Albums</h1>
      <AlbumList albums={genreAlbums} />
    </div>
  );
};