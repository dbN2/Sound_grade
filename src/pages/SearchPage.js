import React, { useState, useContext } from "react";
import { AlbumContext } from "../context/AlbumContext";
import "./SearchPage.css";

export const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { albums } = useContext(AlbumContext);

  const filteredAlbums = searchTerm!=="" ? albums.filter((album) =>
    album.title.toLowerCase().includes(searchTerm.toLowerCase()) 
  ): [];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Search Albums</h1>
    <div className="input">
      <input
        type="text"
        placeholder="Search by album title"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>

      <div className= "albums">
      {filteredAlbums.length > 0 ? (
        <ul>
          {filteredAlbums.map((album) => (
            <li key={album.id}>{album.title}</li>
          ))}
        </ul>
      ) : (
        <p>No albums found</p>
      )}
      </div>
    </div>
  );
};