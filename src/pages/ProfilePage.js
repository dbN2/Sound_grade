import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { AlbumContext } from "../context/AlbumContext";
import "./ProfilePage.css";

export const ProfilePage = () => {
  const { currentUser } = useContext(AuthContext);
  const { handleSignOut } = useContext(AuthContext);
  const { albums } = useContext(AlbumContext);

  if (!currentUser) {
    return <div>Not Logged In</div>;
  }

  const userAlbums = albums.filter((album) => {
    const userRating = album.ratings.find((rating) => rating.userId === currentUser.uid);
    return userRating !== undefined;
  });

  return (
    <div>
      <div className="profile-info">
      <h1>Profile</h1>
      <p> {currentUser.email}</p>
      <button onClick={handleSignOut}>Sign Out</button>
      </div>

      <div className="ratings">
        <h2> Ratings </h2>
        
        <ul>
        {userAlbums.map((album) => {
          const userRating = album.ratings.find((rating) => rating.userId === currentUser.uid);
          return (
            <li key={album.id}>
              <h3>{album.title}</h3>
              <p>{userRating.rating} stars on {userRating.date}</p>
            </li>
          );
        })}
        </ul>
      </div>
    </div>
  );
}