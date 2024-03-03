import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function BasicExample({ onTagSelect }) {
  const [selectedTag, setSelectedTag] = useState(null);

  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
    // Notify the parent component about the selected tag
    onTagSelect(tag);
  };

  return (
    <Dropdown onSelect={handleTagSelect}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {selectedTag || "Select Tag"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="love">you're falling in love</Dropdown.Item>
        <Dropdown.Item eventKey="heartbroken">you're heartbroken</Dropdown.Item>
        <Dropdown.Item eventKey="ghosted">you're being ghosted</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
