import React, { useState, useContext } from "react";
import { AlbumContext } from "../context/AlbumContext";
import "./AddAlbum.css";

const AddAlbumForm = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");
  const { addAlbum } = useContext(AlbumContext);
  let ratings = [];
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAlbum = {
      title,
      artist,
      genre,
      year,
      image,
      ratings
    };
    await addAlbum(newAlbum);
    setTitle("");
    setArtist("");
    setGenre("");
    setYear("");
    setImage("");
  };

  return (
    <div className="addAlbum">
    <h2> Add a new album </h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="artist">Artist:</label>
        <input
          type="text"
          id="artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input
          type="text"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button type="submit">Add Album</button>
    </form>
    </div>
  );
};

export default AddAlbumForm;