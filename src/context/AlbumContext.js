import { createContext, useState, useEffect, useContext } from "react";
import { collection, query, orderBy, onSnapshot, addDoc, updateDoc, doc, getDocs } from "firebase/firestore";
import { AuthContext } from "./AuthContext";
import { db } from "../firebase";

 const AlbumContext = createContext();

function AlbumContextProvider(props) {
  const [albums, setAlbums] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const q = query(collection(db, "albums"), orderBy("title"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const albums = [];
      querySnapshot.forEach((doc) => {
        albums.push({ id: doc.id, ...doc.data() });
      });
      setAlbums(albums);
    });
    return unsubscribe;
  }, []);

  async function addAlbum(album) {
    return addDoc(collection(db, "albums"), album);
  }

  const updateAlbum = async (updatedAlbum) => {
    const index = albums.findIndex((album) => album.id === updatedAlbum.id);
    const updatedAlbums = [...albums];
    updatedAlbums[index] = updatedAlbum;
    setAlbums(updatedAlbums);
  
    // update the album in the database
    await updateDoc(doc(db, 'albums', updatedAlbum.id), updatedAlbum);
  };
  
  const contextValue = {
    albums,
    addAlbum,
    updateAlbum,
  };

  return (
    <AlbumContext.Provider value={contextValue}>
      {props.children}
    </AlbumContext.Provider>
  );
}

export async function getAlbums() {
  const q = query(collection(db, "albums"));
  const querySnapshot = await getDocs(q);
  const albums = [];
  querySnapshot.forEach((doc) => {
    albums.push({ id: doc.id, ...doc.data() });
  });
  return albums;
}

export { AlbumContext, AlbumContextProvider };