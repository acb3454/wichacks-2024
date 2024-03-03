// Profile.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./profile.css"
import coolLine from "../Photos/coolLine.png"

const Profile = ({ token }) => {
  const [topTracks, setTopTracks] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [displayName, setDisplayName] = useState(""); // New state variable for display name
  const [displayPhoto, setDisplayPhoto] = useState(""); // New state variable for display photo

  useEffect(() => {
    const fetchTopTracks = async () => {
      try {
        const response = await axios.get("https://api.spotify.com/v1/me/top/tracks?limit=5", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.items) {
          setTopTracks(response.data.items);
        }
      } catch (error) {
        console.error("Error fetching top tracks:", error);
      }
    };

    const fetchTopArtists = async () => {
      try {
        const response = await axios.get("https://api.spotify.com/v1/me/top/artists?limit=5", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.items) {
          setTopArtists(response.data.items);
        }
      } catch (error) {
        console.error("Error fetching top artists:", error);
      }
    };

    const fetchDisplayName = async () => {
      try {
        const response = await axios.get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("getting display name")
        setDisplayName(response.data.display_name);
      } catch (error) {
        console.error("Error fetching display name:", error);
      }
    };

    const fetchDisplayPhoto = async () => {
      try {
        const response = await axios.get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("getting display phoyo")
        setDisplayPhoto(response.data.images[0].url);
      } catch (error) {
        console.error("Error fetching display photo:", error);
      }
    };

    if (token) {
      fetchTopTracks();
      fetchTopArtists();
      fetchDisplayName();
      fetchDisplayPhoto();
    }
  }, [token]);

  return (
    <div style = {{backgroundColor:"#E3EBFF"}}>
      <br></br>

      <div>
        <p>Username: {displayName}</p>
      </div>
      

      <br></br>
      <h2>Top Tracks</h2>
          <ul style={{ listStyleType:"none"}}>
                  {topTracks.map((track) => (
                    <li key={track.id} style={{display: "inline-block", marginRight: "50px", marginTop: "50px"}}>
                    <img style={{border: "solid gray"}}
                    src={track.album.images[1].url}
                    alt="No Image Found"/>
                    <br></br>
                    {track.name}
                    </li>
                  ))}
                </ul>

      <img src={coolLine} style = {{width: "75%", marginTop: "30px", marginBottom: "30px"}}></img>
      

      <h2>Top Artists</h2>
      <ul>
        {topArtists.map((artist) => (
          <li key={artist.id} style={{display: "inline-block", marginRight: "50px", marginTop: "50px"}}
          >{artist.name}
          <br></br>
          <img style={{border: "solid gray"}}
          src={artist.images[1].url}
          alt="No Image Found"/>
          
          </li>
        ))}
      </ul>

      <br></br>

    </div>
  );
};

export default Profile;
