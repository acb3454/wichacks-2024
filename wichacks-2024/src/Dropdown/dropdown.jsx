import Dropdown from 'react-bootstrap/Dropdown';

export default function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Choose a feeling
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Happy</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Sad</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Confusion</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
