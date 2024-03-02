// Profile.js
import React, { useEffect, useState } from "react";

const Profile = ({ token }) => {
  const [userInfo, setUserInfo] = useState(null);

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

    if (token) {
      fetchUserInfo();
    }
  }, [token]);

  return (
    <div>
      {userInfo ? (
        <div>
          <h2>Welcome, {userInfo.display_name}!</h2>
          {/* Display other user information as needed */}
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
};

export default Profile;
