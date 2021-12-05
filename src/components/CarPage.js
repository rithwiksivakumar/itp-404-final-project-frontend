import React from "react";
import DisplayTile from "./DisplayTile";
import Navbar from "./Nav";

class CarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      car: null,
    };
  }
  componentDidMount() {
    fetch(
      `https://itp-404-final-project-server.herokuapp.com/api/cars/${this.props.match.params.id}`
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
        <div className="car-page">
          <h1>{this.state.car && this.state.car.name}</h1>
          <DisplayTile car={this.state.car} view={false} />
        </div>
      </>
    );
  }
}

export default CarPage;
