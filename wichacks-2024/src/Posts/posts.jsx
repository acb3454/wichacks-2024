import React, { useState } from 'react';
import SongSearch from '../SongSearch/SongSearch';
import axios from 'axios';
import "./posts.css"

const Post = ({ post, token }) => {
  const [isSongSearchVisible, setIsSongSearchVisible] = useState(false);

  const handleAddSong = () => {
    setIsSongSearchVisible(true);
  };

  const handleSongSelect = async (selectedSong) => {
    try {
      // Make a PUT request to update the post with the selected song
      const response = await axios.put(
        `http://localhost:3001/addSong/${encodeURIComponent(post.playlistName)}`,
        {
          song: selectedSong,
        }
      );

      console.log('PUT request response:', response.data);
    } catch (error) {
      console.error('Error updating post with selected song:', error);
    }

    setIsSongSearchVisible(false);
  };

  const createSpotifyPlaylist = async (playlistName) => {
    // Use the Spotify API to create a new playlist
    try {
      const response = await axios.post(
        'https://api.spotify.com/v1/me/playlists',
        {
          name: playlistName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data.id; // Return the playlist ID
    } catch (error) {
      console.error('Error creating playlist:', error);
      return null;
    }
  };

  const addTracksToPlaylist = async (playlistId, tracks) => {
    // Use the Spotify API to add tracks to the playlist
    try {
      await axios.post(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          uris: tracks.map((track) => track.uri),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Tracks added to playlist successfully');
    } catch (error) {
      console.error('Error adding tracks to playlist:', error);
    }
  };

  const handleExportPlaylist = async () => {
    // Create a new playlist on Spotify
    const playlistId = await createSpotifyPlaylist(post.playlistName);

    if (playlistId) {
      // Add tracks to the created playlist
      addTracksToPlaylist(playlistId, post.songs);
    }
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

        {/* Display songs if available */}
        {post.songs && post.songs.length > 0 && (
          <div className="postSongs">
            <h4>Songs:</h4>
            <ul>
              {post.songs.map((song, index) => (
                <li key={index}>{song.name} - {song.artists.map((artist) => artist.name).join(", ")}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="postBottom">
          <button className="commentBtn" onClick={handleAddSong}>
            Add Song
          </button>
          <button className="addBtn" onClick={handleExportPlaylist}>
            Export Playlist
          </button>
        </div>
      </div>

      {isSongSearchVisible && (
        <SongSearch token={token} onSongSelect={handleSongSelect} />
      )}
    </div>
  );
};

export default Post;
