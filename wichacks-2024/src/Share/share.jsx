import React, { useEffect } from "react";
import axios from "axios";
import "./share.css";

export default function Share() {
  useEffect(() => {
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', handleSubmit);
    }

    return () => {
      if (form) {
        form.removeEventListener('submit', handleSubmit);
      }
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const response = await axios.post('http://localhost:3000/updateData', data);
      console.log(response.data);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <form>
          <input placeholder="What playlist are you creating?" className="shareInput"></input>
          <hr className="shareHr"></hr>
          <div className="shareOptions">
            <h3>Tags: </h3>
          </div>
          <button className="shareButton" type="submit">Share</button>
        </form>
      </div>
    </div>
  );
}
