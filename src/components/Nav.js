import React from "react";
import NavLink from "./Navlink";

class Navbar extends React.Component {
  render() {
    return (
      <div
        className="nav-bar"
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
          url="/cars"
          position={-1}
          activePosition={this.props.activePosition}
        ></NavLink>
        <NavLink
          text="Home"
          url="/"
          position={0}
          activePosition={this.props.activePosition}
        ></NavLink>
        <NavLink
          text="Motorcycles"
          url="/motorcycles"
          position={1}
          activePosition={this.props.activePosition}
        ></NavLink>
      </div>
    );
  }
}

export default Navbar;
