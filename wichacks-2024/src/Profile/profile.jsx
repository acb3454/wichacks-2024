// Profile.js
import React, { useEffect, useState } from "react";

const AUTHORIZE = "https://accounts.spotify.com/authorize"
const ARTISTS_URL = "https://api.spotify.com/v1/me/top/artists?time_range=long-term&limit=10&offset=5"

const Profile = ({ token }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [topArtists, setTopArtists] = useState(null);

  useEffect(() => {
    // Fetch user information using the Spotify API
    const fetchUserInfo = async () => {
      try {
        const response = await fetch("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserInfo(data);
        } else {
          console.error("Failed to fetch user information");
        }
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    const fetchTopArtists = async () => {
        try {
          const response = await fetch("https://api.spotify.com/v1/me/top/artists?offset=0&limit=10&time_range=long_term", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          if (response.ok) {
            const data = await response.json();
            setTopArtists(data);
          } else {
            console.error("Failed to fetch top artists");
          }
        } catch (error) {
          console.error("Error fetching top artists:", error);
        }
      };

    if (token) {
      fetchUserInfo();
      fetchTopArtists();
    }
  }, [token]);

  return (
    <div>
      {userInfo ? (
        <div>
          <h2>Welcome, {userInfo.display_name}!</h2>
          <h3>Your top Artists: {topArtists}</h3>
          {/* Display other user information as needed */}
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
};

export default Profile;
