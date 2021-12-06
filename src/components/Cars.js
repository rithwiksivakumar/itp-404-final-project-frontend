import React from "react";
import DisplayTile from "./DisplayTile";
import Navbar from "./Nav";
import { Link } from "react-router-dom";

class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
    };
  }
  componentDidMount() {
    fetch(`https://itp-404-final-project-server.herokuapp.com/api/cars`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ cars: data });
      });
  }
  render() {
    if (this.state.cars.length > 0) {
      return (
        <>
          <Navbar activePosition={-1} />
          <div className="cars">
            <h1>Cars</h1>
            <div className="add-button-wrapper">
              <Link to="/cars/add">
                <button type="button" className="btn btn-primary">
                  Add Car
                </button>
              </Link>
            </div>
            {this.state.cars.map((car) => {
              return (
                <DisplayTile
                  key={car.id}
                  vehicle={car}
                  view={true}
                  type="cars"
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
          <div className="cars">
            <h1>Cars</h1>
          </div>
        </>
      );
    }
  }
}

export default Cars;
