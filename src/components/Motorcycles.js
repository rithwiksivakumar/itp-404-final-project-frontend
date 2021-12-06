import React from "react";
import DisplayTile from "./DisplayTile";
import Navbar from "./Nav";
import { Link } from "react-router-dom";

class Motorcycles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      motorcycles: [],
    };
  }
  componentDidMount() {
    document.title = "Motorcycles List";
    fetch(`https://itp-404-final-project-server.herokuapp.com/api/motorcycles`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ motorcycles: data });
      });
  }
  render() {
    if (this.state.motorcycles.length > 0) {
      return (
        <>
          <Navbar activePosition={1} />
          <div className="motorcycles">
            <h1>Motorcycle</h1>
            <div className="add-button-wrapper">
              <Link to="/motorcycles/add">
                <button type="button" className="btn btn-primary">
                  Add Motorcycle
                </button>
              </Link>
            </div>
            {this.state.motorcycles.map((motorcycle) => {
              return (
                <DisplayTile
                  key={motorcycle.id}
                  vehicle={motorcycle}
                  view={true}
                  type="motorcycles"
                />
              );
            })}
          </div>
        </>
      );
    } else {
      return (
        <>
          <Navbar activePosition={-1} />
          <div className="motorcycles">
            <h1>Motorcycles</h1>
          </div>
        </>
      );
    }
  }
}

export default Motorcycles;
