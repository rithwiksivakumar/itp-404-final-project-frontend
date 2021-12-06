import React from "react";
import Navbar from "./Nav";
import DisplayTile from "./DisplayTile";

class VehiclePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicle: null,
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
        this.setState({ vehicle: data });
        document.title = data.name;
      });
  }
  render() {
    return (
      <>
        <Navbar />
        <div className="vehicle-page">
          <h1>{this.state.vehicle && this.state.vehicle.name}</h1>
          <DisplayTile
            vehicle={this.state.vehicle}
            type={this.props.match.params.auto}
            view={false}
          />
        </div>
      </>
    );
  }
}

export default VehiclePage;
