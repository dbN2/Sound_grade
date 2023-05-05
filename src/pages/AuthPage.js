import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";



export const AuthPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const {currentUser, setCurrentUser} = useContext(AuthContext);

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password).then((userCrendential) => {
        setCurrentUser(userCrendential.user);
        setMessage("Signed up successfully");
        navigate("/");
      });
    } catch (error) {
      setMessage(error.message);
    }
    setEmail("");
    setPassword("");
  };

 

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("Logging in...");
    try {
      await signInWithEmailAndPassword(auth,email, password);
      setMessage("Logged in successfully");
      navigate("/");

    } catch (error) {
      setMessage(error.message);
    }

  };

 

    return (
      <div>
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Log In</button>
        </form>
        {message && <p>{message}</p>}
  
        <form onSubmit={handleSignup}>
          <h2>Register</h2>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    );
  


 
}