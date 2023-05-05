import React, { useContext } from "react";
import Album from "./Album";
import {AlbumContext} from "../context/AlbumContext";

function AlbumList(props) {
  const {albums }= useContext(AlbumContext);

  const albumsToRender = props.albums ? props.albums : albums;

  return (
    <div className="album-list">
      {albumsToRender.map((album) => (
        <Album key={album.id} id={album.id} album={album} />
      ))}
    </div>
  );
}

export default AlbumList;