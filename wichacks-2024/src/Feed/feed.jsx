import Share from "../Share/share";
import React, { useEffect, useState, useRef, useCallback } from "react";
import "./feed.css";
import Post from "../Posts/posts";
import Posts from "../postData";
import Form from 'react-bootstrap/Form';
import BasicExample2 from "../Dropdown2/dropdown2";
import axios from 'axios';

export default function Feed({ token, display_name}) {
  const [selectedTag, setSelectedTag] = useState(null);
  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
  };

  // Filter posts based on the selected tag
  const filteredPosts = selectedTag
    ? Posts.filter((post) => post.tag === selectedTag)
    : Posts;

  return (
    <div className="feed">
      <div className="feedWrapper">
        <div className="search">
          <div className="shareOptions">
            <h3>Tags: </h3>
            <BasicExample2 onTagSelect={handleTagSelect} />
          </div>
        </div>

        {/* Pass the token to the Share component */}
        <Share token={token } display_name={display_name} />

        {/* Map through filtered posts instead of all posts */}
        {filteredPosts.map((p) => (
          <Post token={token} key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
