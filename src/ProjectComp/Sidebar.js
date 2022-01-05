import React from "react";
import "../App.css";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";



export default function Sidebar() {
  return (
    <>
    <div className="fixed">
      <div className="sidebar">
        <ul className="sidebarList">
          <li className="row">
            <div className="Head">
              <h2 className="bi bi-bullseye"></h2>
              <h3 id="Headicon" style={{marginRight: "40px"}}>Kleen</h3>
            </div>
          </li>
          {SidebarData.map((val, key) => {
            return (
              <li className="row" key={key}>
                <Link to={val.Link}>
                  <div id="icon">{val.icon}</div>
                  <div id="title">{val.title}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
    
      </>
  );
}
