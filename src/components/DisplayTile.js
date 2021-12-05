import React from "react";
import { Link } from "react-router-dom";

class DisplayTile extends React.Component {
  render() {
    if (this.props.vehicle != null) {
      return (
        <div className="display-tile">
          <img src={this.props.vehicle.img} alt="vehicle" />
          <p>{this.props.vehicle.name}</p>
          {this.props.type === "cars" && (
            <p>Horsepower: {this.props.vehicle.horsepower}</p>
          )}
          <p className="last-p">Curb Weight: {this.props.vehicle.weight}</p>
          {this.props.view ? (
            <Link to={`/${this.props.type}/${this.props.vehicle.id}`}>
              <button type="button" class="btn btn-primary">
                View
              </button>
            </Link>
          ) : (
            <>
              <Link
                to={`/${this.props.type}/${this.props.vehicle.id}/update`}
                style={{ marginRight: "10%" }}
              >
                <button type="button" class="btn btn-secondary">
                  Update
                </button>
              </Link>
              <Link to="/" style={{ marginLeft: "10%" }}>
                <button type="button" class="btn btn-danger">
                  Delete
                </button>
              </Link>
            </>
          )}
        </div>
      );
    } else {
      return <div className="display-tile"></div>;
    }
  }
}

export default DisplayTile;
