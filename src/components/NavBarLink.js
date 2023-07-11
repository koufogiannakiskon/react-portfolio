import React from "react";

function NavBarLink(props) {
  return (
    <li class="nav-item">
      <a class="nav-link" aria-current="page" href={props.name}>
        {props.name}
      </a>
    </li>
  );
}

export default NavBarLink;
