// SongSearch.jsx
import React, { useState } from "react";
import axios from "axios";
import "./SongSearch.css";

export default function SongSearch({ token, onSongSelect }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null); // New state for the selected song

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
    // Update the selected song state
    setSelectedSong(selectedSong);
    console.log(selectedSong)
    // Notify parent component about the selected song
    onSongSelect(selectedSong);
  };

  const handlePutRequest = () => {
    // Check if a song is selected
    if (selectedSong) {
      // Perform your PUT request using selectedSong
      // Example: axios.put('your_put_url', selectedSong)
      console.log("PUT request with selected song:", selectedSong);
    } else {
      console.warn("No song selected");
    }
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

      <div>
        <h3>Selected Song:</h3>
        {selectedSong ? (
          <div>
            <p>{selectedSong.name}</p>
            <p>{selectedSong.artists.map((artist) => artist.name).join(", ")}</p>
            {/* Add more details if needed */}
          </div>
        ) : (
          <p>No song selected</p>
        )}

        <button onClick={handlePutRequest}>Perform PUT Request</button>
      </div>
    </div>
  );
}
