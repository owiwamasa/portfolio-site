import { useState } from "react";
import "./DropDown.css";

function DropDown({ scrollProjects, scrollSkills, scrollExperience }) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="dropdown">
      {!dropdown ? (
        <i onClick={() => setDropdown(true)} class="fas fa-bars"></i>
      ) : (
        <div className="dropdown-clicked">
          <i onClick={() => setDropdown(false)} class="fas fa-bars"></i>
          <div className="dropdown-options">
            <div
              onClick={() => {
                setDropdown(false);
                scrollExperience();
              }}
              className="dropdown-link"
            >
              Past Experience
            </div>
            <div
              onClick={() => {
                setDropdown(false);
                scrollProjects();
              }}
              className="dropdown-link"
            >
              Projects
            </div>
            <div
              onClick={() => {
                setDropdown(false);
                scrollSkills();
              }}
              className="dropdown-link"
            >
              Skills
            </div>
            <a
              onClick={() => setDropdown(false)}
              href="mailto:owiwamasa@gmail.com"
              className="dropdown-email"
            >
              owiwamasa@gmail.com
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropDown;
