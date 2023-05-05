import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {TopRatedPage} from "./pages/TopRatedPage";
import {GenrePage} from "./pages/GenrePage";
import {ProfilePage} from "./pages/ProfilePage";
import {AlbumPage} from "./pages/AlbumPage";
import {AuthPage} from "./pages/AuthPage";
import {AlbumContextProvider} from "./context/AlbumContext";
import AuthContextProvider from "./context/AuthContext";
import { Navbar } from "./components/Navbar";
import { getAlbums } from "./context/AlbumContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import { SearchPage } from "./pages/SearchPage";

function App() {

  const albums = getAlbums();

  return (
      <AuthContextProvider>
      <AlbumContextProvider value={albums}>
      <div className="App">

        <Router>
          <Navbar/>
            <Routes>
              <Route path="/login" 
              element={
                  <AuthPage/>
              } 
              />
              <Route path="/" element={
                  <HomePage/>
              } 
              />
              <Route path="/top-rated" element={
                  <TopRatedPage/>
              } 
              />
              <Route path="/genre/:genre" element={
              
                <GenrePage/>
              }
              />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <ProfilePage/>
                </ProtectedRoute>
              } 
              />
              <Route path="/album/:id" element={
              <AlbumPage/>
              } 
              />
               <Route path="/search" element={
              <SearchPage/>
              } 
              />
            </Routes>
        </Router>
    </div>

      </AlbumContextProvider>
      </AuthContextProvider>
  );
}

export default App;