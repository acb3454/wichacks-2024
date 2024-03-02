import logo from './logo.svg';
import './App.css';
import Feed from "./Feed/feed"

function App() {
  const CLIENT_ID = "470974f837054eeea1df14cebc95f27f"
  const REDIRECT_URI = "http://localhost:3001"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Spotify React App</h1>
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
      </header> */}
      <Feed/>
    </div>
  );
}

export default App;
