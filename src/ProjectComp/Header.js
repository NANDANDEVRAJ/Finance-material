import React from "react";
import "../App.css"
import { Dropdown } from "react-bootstrap";


export default function Header() {
  return (
    <div className="Header" >
      <div className="Headsection">
        <div></div>
        <Dropdown className="btn">
          <Dropdown.Toggle variant="white" id="dropdown-basic">
            <i className="bi bi-file-person-fill"></i> John Doe
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="">
              <i className="bi bi-file-person-fill"></i> My Profile
            </Dropdown.Item>
            <Dropdown.Item href="">
              <i className="bi bi-gear-fill"></i> Settings
            </Dropdown.Item>
            <Dropdown.Item href="">
              <i className="bi bi-box-arrow-right"></i> Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>
      </div>
  );
}
