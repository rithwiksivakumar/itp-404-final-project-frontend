import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import NavLink from "./Navlink";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            height: "64px",
            width: "100%",
            lineHeight: "64px",
            textAlign: "center",
            background: "#F0F0F0",
          }}
        >
          <NavLink
            text="Cars"
            url="https://www.google.com/"
            position={-1}
            active={false}
          ></NavLink>
          <NavLink
            text="Home"
            url="https://www.google.com/"
            position={0}
            active={true}
          ></NavLink>
          <NavLink
            text="Motorcycles"
            url="https://www.google.com/"
            position={1}
            active={false}
          ></NavLink>
        </div>
      </>
    );
  }
}

export default Navbar;
