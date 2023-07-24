import React from "react";
import ReactSwitch from "react-switch";

function ThemeToggle(props) {
  return (
    <div
      className="switch"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <ReactSwitch
        onChange={props.onChange}
        checked={props.theme === "dark"}
        height={24}
        width={52}
        uncheckedIcon={
          <i
            class="fas fa-moon"
            style={{ margin: "4px 0 0 7px", color: "#ffd966" }}
          ></i>
        }
        checkedIcon={
          <i
            class="fa-solid fa-sun"
            style={{ margin: "4px 0 0 6px", color: "#e3aa00" }}
          ></i>
        }
        onColor="#d5e5de"
        offColor="#1f3451"
        offHandleColor="#d5e5de"
        onHandleColor="#1f3451"
      ></ReactSwitch>
    </div>
  );
}

export default ThemeToggle;
