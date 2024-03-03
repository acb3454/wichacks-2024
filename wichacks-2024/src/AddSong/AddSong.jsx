// AddSong.jsx

import React, { useState } from "react";
import axios from "axios";
import SongSearch from "../SongSearch/SongSearch";

export default function AddSong({ postId, token, onSongAdd }) {
  const [selectedSong, setSelectedSong] = useState(null);

  const handleSongSelect = (selectedSong) => {
    setSelectedSong(selectedSong);
  };

  const handleAddSong = async () => {
    try {
      // Send a PUT request to add the selected song to the post
      const response = await axios.put(
        "http://localhost:3001/addSong",
        { postId, selectedSong }
      );

      console.log("data:", JSON.stringify(response.data, null, 2));

      // Notify the parent component that a song has been added
      onSongAdd();
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <SongSearch token={token} onSongSelect={handleSongSelect} />
      <button onClick={handleAddSong}>Add Song</button>
    </div>
  );
}
