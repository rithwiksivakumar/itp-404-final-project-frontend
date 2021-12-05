import React from "react";
import { Link } from "react-router-dom";

class DisplayTile extends React.Component {
  render() {
    return (
      <div className="display-tile">
        <img src={this.props.car.img} alt="car" />
        <p>{this.props.car.name}</p>
        <p>Horsepower: {this.props.car.horsepower}</p>
        <p>Curb Weight: {this.props.car.weight}</p>

        {/* <Link to="/" style={{ marginRight: "10%" }}>
          <button type="button" class="btn btn-secondary">
            Update
          </button>
        </Link> */}
        <Link to={`/cars/${this.props.car.id}`}>
          <button type="button" class="btn btn-primary">
            View
          </button>
        </Link>
        {/* <Link to="/" style={{ marginLeft: "10%" }}>
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </Link> */}
      </div>
    );
  }
}

export default DisplayTile;
