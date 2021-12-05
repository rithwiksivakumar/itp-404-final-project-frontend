import React from "react";
import Navbar from "./Nav";
import DisplayTile from "./DisplayTile";

class VehiclePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      car: null,
    };
  }
  componentDidMount() {
    fetch(
      `https://itp-404-final-project-server.herokuapp.com/api/${this.props.match.params.auto}/${this.props.match.params.id}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ car: data });
      });
  }
  render() {
    return (
      <>
        <Navbar activePosition={-1} />
        <div className="vehicle-page">
          <h1>{this.state.car && this.state.car.name}</h1>
          <DisplayTile car={this.state.car} view={false} />
        </div>
      </>
    );
  }
}

export default VehiclePage;
