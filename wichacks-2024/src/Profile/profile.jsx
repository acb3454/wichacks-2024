// Profile.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./profile.css"
import coolLine from "../Photos/coolLine.png"
import poloroid from "../Photos/poloroid.png"

import Post from "../Posts/posts";
import Posts from "../postData";

const Profile = ({ token }) => {
  const [topTracks, setTopTracks] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [displayName, setDisplayName] = useState(""); // New state variable for display name
  const [displayPhoto, setDisplayPhoto] = useState(""); // New state variable for display photo
  const [followers, setFollowers] = useState(""); // New state variable for display photo

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

    const fetchFollowers = async () => {
      try {
        const response = await axios.get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("getting followers")
        setFollowers(response.data.followers.total);
      } catch (error) {
        console.error("Error fetching followers:", error);
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
        setDisplayPhoto(response.data.images[1].url);
      } catch (error) {
        console.error("Error fetching display photo:", error);
      }
    };

    if (token) {
      fetchTopTracks();
      fetchTopArtists();
      fetchDisplayName();
      fetchDisplayPhoto();
      fetchFollowers();
    }
  }, [token]);


  // Filter posts based on the selected tag
  const filteredPosts = Posts.filter((post) => post.username === displayName)
   //const filteredPosts = Posts;

  return (
    <div style = {{backgroundColor:"#E3EBFF", borderRadius: "25px"}}>
      <br></br>

      <div>
      {displayName
        ? <div>

<div style={{display:"flex",alignItems:"center", marginLeft:"50px"}}>
            <div id="frame" style={{alignItems:"center"}}>
            <img id="myImg" src={displayPhoto}></img>
          </div>
          <p style={{fontSize:"24px", marginRight:"50px"}}>Username: {displayName}</p>
          <p style={{fontSize:"24px", marginRight:"50px"}}>-----------------------</p>
          <p style={{fontSize:"24px", marginRight:"25px"}}>{followers} Followers</p>
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

        </div>
        : <p>Login to see profile information!</p>
      }
      </div>

      <img src={coolLine} style = {{width: "75%", marginTop: "30px", marginBottom: "30px"}}></img>

      <h2>Posts</h2>
      <br></br>

      <div className="feed">
          <div className="feedWrapper">

              {filteredPosts.map((p) => (
              <Post token={token} key={p.id} post={p} />
              ))}

          </div>
      </div>


    </div>
  );
};

export default Profile;
