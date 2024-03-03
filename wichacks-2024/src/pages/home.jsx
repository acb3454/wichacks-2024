import "./home.css";
import logo from "../Photos/ThatFeelingWhenTxt.png"

export default function Home() {
    return(
      <div class = "homeDiv">

        <img src = {logo}/>
        <h2>You develop a social media platform to uplift one another through music and inspire community.</h2>

        <div class = "container">
          <img src = "../wichacks.JPG" alt = "developers at wichacks 2024" class = "devs"/>
          <h4 class="description">During WiCHacks 2024, three developers created "That Feeling When" to promote mental health through the use of music. Music therapy is the clinical use of music to achieve goals like reducing stress, improving mood and expressing yourself. Users are allowed to collaborate on playlists based on what they are going through to improve their mental health, and build connections with women and gender minorites around the world.</h4>
        </div>
      
      </div>
    )
  }

