// Share.jsx

import React, { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import BasicExample from "../Dropdown/dropdown";
import "./share.css";

export default function Share({ token }) {
  const [nextId, setNextId] = useState(1);
  const [displayName, setDisplayName] = useState("");
  const formRef = useRef(null);

  const fetchDisplayName = async () => {
    try {
      const response = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDisplayName(response.data.display_name);
    } catch (error) {
      console.error("Error fetching display name:", error);
    }
  };

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Fetch display name if not already fetched
    if (!displayName) {
      fetchDisplayName();
    }

    // Include display name in the data
    data.username = displayName;

    // Add an empty array for songs in the initial post
    data.songs = [];

    data.id = nextId;
    setNextId((prevId) => prevId + 1);

    try {
      const response = await axios.post(
        "http://localhost:3001/updateData",
        data
      );
      console.log("data:", JSON.stringify(response.data, null, 2));
      form.reset();
    } catch (error) {
      console.error(error.response.data);
    }
  }, [nextId, displayName, fetchDisplayName, token]);

  useEffect(() => {
    const form = formRef.current;
    if (form) {
      form.addEventListener("submit", handleSubmit);
    }

    return () => {
      if (form) {
        form.removeEventListener("submit", handleSubmit);
      }
    };
  }, [handleSubmit]);

  return (
    <div className="share">
      <div className="shareWrapper">
        <form ref={formRef}>
          <input
            type="text"
            name="playlistName"
            placeholder="What playlist are you creating?"
            className="shareInput"
          ></input>
          <hr className="shareHr"></hr>
          <div className="shareOptions">
            <h3>Tags: </h3>
            <BasicExample />
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
