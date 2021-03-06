import React from "react";
import Comments from "./Comments";
import Navbar from "./Nav";

class Home extends React.Component {
  componentDidMount() {
    document.title = "Home Page";
  }
  render() {
    return (
      <>
        <Navbar activePosition={0} />
        <div className="home">
          <h1>Welcome</h1>
          <p className="subtitle">
            This is a webpage designed for anyone who would like to share and
            discuss about their favorite cars and motorcycles!
          </p>
          <p className="subtitle">
            You can view, update, add, and delete cars/motorcycles.
          </p>
          <p className="subtitle">
            Please click on the links on the navigation bar to get started.
          </p>
          <h1>Discussion</h1>
          <Comments />
        </div>
      </>
    );
  }
}

export default Home;
