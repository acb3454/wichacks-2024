import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import BasicExample from "../Dropdown/dropdown";
import "./share.css";

export default function Share({ token }) {
    const [nextId, setNextId] = useState(1); // Initial ID value
  const formRef = useRef(null);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
        try {
          const response = await axios.get("https://api.spotify.com/v1/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          if (response.data.items) {
            setProfile(response.data.items);
          }
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      };
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', handleSubmit);
    }

    if (token) {
        fetchProfile();
      }

    return () => {
      if (form) {
        form.removeEventListener('submit', handleSubmit);
      }
    };
  }, [nextId, token]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    data.id = nextId;
    setNextId(prevId => prevId + 1);

    try {
      const response = await axios.post('http://localhost:3001/updateData', data);
      console.log("data:", JSON.stringify(response.data, null, 2));
      form.reset();
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <h2>{profile.display_name}</h2>
        <form ref={formRef}>
          <input type= "text" name="playlistName" placeholder="What playlist are you creating?" className="shareInput"></input>
          <hr className="shareHr"></hr>
          <div className="shareOptions">
            <h3>Tags: </h3>
            <BasicExample />
          </div>
          <button className="shareButton" type="submit">Share</button>
        </form>
      </div>
    </div>
  );
}
