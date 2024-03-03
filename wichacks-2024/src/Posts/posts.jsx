// Post.jsx

import "./posts.css";
import { useState } from "react";
import SongSearch from "../SongSearch/SongSearch";
import axios from "axios";

export default function Post({ post, token }) {
  const [isSongSearchVisible, setIsSongSearchVisible] = useState(false);

  const handleAddSong = () => {
    setIsSongSearchVisible(true);
  };

  const handleSongSelect = async (selectedSong) => {
    try {
      // Make a PUT request to update the post with the selected song
      const response = await axios.put(
        `http://localhost:3001/addSong/${post.playlistName}`, // Update the endpoint
        {
          song: selectedSong,
        }
      );
  
      console.log("PUT request response:", response.data);
    } catch (error) {
      console.error("Error updating post with selected song:", error);
    }
  
    setIsSongSearchVisible(false);
  };


  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <h3>{post.username}</h3>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.playlistName}</span>
          <p>Tag name here</p>
        </div>
        <div className="postBottom">
          <button className="commentBtn" onClick={handleAddSong}>
            Add Song
          </button>
          <button className="addBtn">Export Playlist</button>
        </div>
      </div>

      {isSongSearchVisible && (
        <SongSearch token={token} onSongSelect={handleSongSelect} />
      )}
    </div>
  );
}
