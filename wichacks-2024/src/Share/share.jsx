import React, { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import BasicExample from "../Dropdown/dropdown";
import "./share.css";

export default function Share({ token }) {
  const [nextId, setNextId] = useState(1);
  const formRef = useRef(null);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    console.log("handleSubmit is called");
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

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
  }, [nextId]);

  useEffect(() => {
    console.log("use Effect gets called");
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
