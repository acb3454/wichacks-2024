// Profile.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = ({ token }) => {
  const [topTracks, setTopTracks] = useState([]);
  const [topArtists, setTopArtists] = useState([]);


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
        const response = await axios.get("https://api.spotify.com/v1/me/top/artists", {
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

    if (token) {
      fetchTopTracks();
      fetchTopArtists();
    }
  }, [token]);

  return (
    <div>
      <h2>Top Tracks</h2>
      <ul>
        {topTracks.map((track) => (
          <li key={track.id}>{track.name}</li>
        ))}
      </ul>

      <h2>Top Artists</h2>
      <ul>
        {topArtists.map((artist) => (
          <li key={artist.id}>{artist.name}
          <img 
          src={artist.images[2].url}
          alt="No Image Found"/>
          
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Profile;
