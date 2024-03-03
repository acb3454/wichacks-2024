// SongSearch.jsx
import React, { useState } from "react";
import axios from "axios";

export default function SongSearch({ token, onSongSelect }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/search?q=${searchQuery}&type=track`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.tracks && response.data.tracks.items) {
        setSearchResults(response.data.tracks.items);
      }
    } catch (error) {
      console.error("Error searching for songs:", error);
    }
  };

  const handleSongSelect = (selectedSong) => {
    // Notify parent component about the selected song
    onSongSelect(selectedSong);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a song"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {searchResults.map((song) => (
          <li key={song.id} onClick={() => handleSongSelect(song)}>
            {song.name} - {song.artists.map((artist) => artist.name).join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}