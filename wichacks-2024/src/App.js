import logo from './logo.svg';
import {useEffect, useState} from "react";
import './App.css';

function App() {
  const CLIENT_ID = "470974f837054eeea1df14cebc95f27f"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

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
      <header className="App-header">
        <h1>Spotify React App</h1>
        { !token ?
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
        : <button onClick = {logout} >Log Out</button>}
        </header>
    </div>
  );
}

export default App;
