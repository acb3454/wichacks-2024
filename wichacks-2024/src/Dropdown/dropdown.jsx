import Dropdown from 'react-bootstrap/Dropdown';

export default function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        that feeling when...
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">you're falling in love</Dropdown.Item>
        <Dropdown.Item href="#/action-2">you're heartbroken</Dropdown.Item>
        <Dropdown.Item href="#/action-3">you're being ghosted</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
