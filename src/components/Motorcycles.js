import React from "react";
import Navbar from "./Nav";

class Motorcycles extends React.Component {
  render() {
    return (
      <>
        <Navbar activePosition={1} />
        <h1>Motorcycles</h1>
      </>
    );
  }
}

export default Motorcycles;
