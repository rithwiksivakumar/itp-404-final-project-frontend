import React from "react";

class NotFound extends React.Component {
  componentDidMount() {
    document.title = "404 Not Found";
  }
  render() {
    return <h1>This page is not found</h1>;
  }
}

export default NotFound;
