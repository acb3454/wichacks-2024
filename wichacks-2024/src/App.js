import {useEffect, useState} from "react";
import './App.css';
import Navbar from "./Navbar"
import Login from "./pages/login"
import Feed from "./Feed/feed"
import Profile from "./Profile/profile"
import Home from "./pages/home"
import Highlights from "./HighlightsPage/Highlights";
import { Route, Routes } from "react-router-dom"

function App() {
  const CLIENT_ID = "470974f837054eeea1df14cebc95f27f"
  const REDIRECT_URI = encodeURIComponent("http://localhost:3000");
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
  const SCOPES = "user-top-read playlist-modify-public playlist-modify-private"; 
  const SHOW_DIALOG = true;


  const [token, setToken] = useState("")

  useEffect( ()=>{
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if(!token && hash){
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
      console.log(token)

      window.location.hash = ""
      window.localStorage.setItem("token", token)
      
    }

    setToken(token)

  }, [])
  

  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }

  return (
    <div className="App">


    <Navbar />
          <div className="container">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Feed" element={<Feed token = {token}/>} />
          <Route path="/Profile" element={<Profile token={token} />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Highlights" element={<Highlights />} />

        </Routes>
          </div>

        

      <header className="App-header">
        {/* <h1>Spotify React App</h1> */}
        { !token ?

        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}&show_dialog=${SHOW_DIALOG}`}>Login to Spotify</a>
        : <button onClick = {logout} >Log Out</button>} 
        </header>
    </div>
  );
}

export default App;
