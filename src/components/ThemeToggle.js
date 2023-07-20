import React from "react";
import ReactSwitch from "react-switch";

function ThemeToggle(props) {
  return (
    <div className="switch" style={{ alignShelf: "center" }}>
      <ReactSwitch
        onChange={props.onChange}
        checked={props.theme === "dark"}
        height={24}
        width={52}
        uncheckedIcon={
          <i
            class="fas fa-moon"
            style={{ margin: "6px 0 0 6px", color: "#ffd966" }}
          ></i>
        }
        checkedIcon={
          <i
            class="fa-solid fa-sun"
            style={{ margin: "6px 0 0 6px", color: "#e3aa00" }}
          ></i>
        }
        onColor="#d5e5de"
        offColor="#1f3451"
      ></ReactSwitch>
    </div>
  );
}

export default ThemeToggle;
