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
        <Dropdown.Item eventKey="that feeling when you're falling in love">you're falling in love</Dropdown.Item>
        <Dropdown.Item eventKey="that feeling when you're feeling heartbroken">you're heartbroken</Dropdown.Item>
        <Dropdown.Item eventKey="that feeling when you're being ghosted">you're being ghosted</Dropdown.Item>
        <Dropdown.Item eventKey="that feeling when you're relaxing">you're relaxing</Dropdown.Item>
        <Dropdown.Item eventKey="that feeling when you're no contact">you're no contact</Dropdown.Item>
        <Dropdown.Item eventKey="that feeling when you face imposter syndrome">you face imposter syndrome</Dropdown.Item>
        <Dropdown.Item eventKey="that feeling when you're slaying">you're slaying</Dropdown.Item>
        <Dropdown.Item eventKey="that feeling when you're a gym girly">you're a gym girly</Dropdown.Item>
        <Dropdown.Item eventKey="that feeling when you need to study">you need to study</Dropdown.Item>
        <Dropdown.Item eventKey="that feeling when you're on an adventure">you're on an adventure</Dropdown.Item>
        <Dropdown.Item eventKey="that feeling when you need a cheerleader">you need a cheerleader</Dropdown.Item>
        <Dropdown.Item eventKey="that feeling when you fumble the bag">you fumble the bag</Dropdown.Item>
        <Dropdown.Item eventKey="that feeling when you need a dance party">you need a dance party</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
