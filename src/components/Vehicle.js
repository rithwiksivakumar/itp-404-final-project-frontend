import React from "react";
import DisplayTile from "./DisplayTile";
import Navbar from "./Nav";

class Vehicle extends React.Component {
  constructor(props) {
    super(props);
    this.availableAutos = { cars: -1, motorcycles: 1 };
    this.state = {
      vehicles: [],
    };
    this.getTitle = this.getTitle.bind(this);
  }
  componentDidMount() {
    fetch(
      `https://itp-404-final-project-server.herokuapp.com/api/${this.props.match.params.auto}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ vehicles: data });
      });
  }
  getTitle() {
    let auto = this.props.match.params.auto;
    return auto.charAt(0).toUpperCase() + auto.substring(1);
  }
  render() {
    // return <h1>{this.state.vehicles.length}</h1>;
    if (this.props.match.params.auto in this.availableAutos) {
      if (this.state.vehicles.length > 0) {
        return (
          <>
            <Navbar activePosition={-1} />
            <div className="vehicle">
              <h1>{this.getTitle()}</h1>
              {this.state.vehicles.map((vehicle) => {
                return (
                  <DisplayTile
                    key={vehicle.id}
                    vehicle={vehicle}
                    type={this.props.match.params.auto}
                    view={true}
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
            <div className="vehicle">
              <h1>{this.getTitle()}</h1>
            </div>
          </>
        );
      }
    } else {
      return (
        <>
          <h1>404 Not Found</h1>
        </>
      );
    }
  }
}

export default Vehicle;
