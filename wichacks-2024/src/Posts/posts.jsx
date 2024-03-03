import "./posts.css";
import { useState } from "react";
import SongSearch from "../SongSearch/SongSearch"; // Adjust the path as needed

export default function Post({ post, token }) {
  const [isSongSearchVisible, setIsSongSearchVisible] = useState(false);

  const handleAddSong = () => {
    // Show the song search dialog
    setIsSongSearchVisible(true);
  };

  const handleSongSelect = (selectedSong) => {
    // TODO: Make a PUT request to update the post with the selected song
    console.log("Selected Song:", selectedSong);

    // Close the song search dialog
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
