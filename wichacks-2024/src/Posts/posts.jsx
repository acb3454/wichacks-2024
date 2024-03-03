// Post.jsx

import "./posts.css";
import { useState } from "react";
import AddSong from "../AddSong/AddSong";

export default function Post({ post, token }) {
  const [isAddSongVisible, setIsAddSongVisible] = useState(false);

  const handleAddSong = () => {
    // Show the AddSong dialog
    setIsAddSongVisible(true);
  };

  const handleSongAdd = () => {
    // Close the AddSong dialog after the song is added
    setIsAddSongVisible(false);

    // TODO: Perform any additional actions after the song is added to the post
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

      {isAddSongVisible && (
        // Use the AddSong component to handle song selection and addition
        <AddSong postId={post.id} token={token} onSongAdd={handleSongAdd} />
      )}
    </div>
  );
}
