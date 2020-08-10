import React from "react";
import { Link } from "react-router-dom";

function NavigationMenu(props) {
  return (
    <div>
      <div>The Menu</div>
      <ul>
        <li className="listChild">
          <Link to="/" onClick={props.showMenu}>
            Home
          </Link>
        </li>
        <li className="listChild">
          <Link to="/about" onClick={props.showMenu}>
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export { NavigationMenu };
