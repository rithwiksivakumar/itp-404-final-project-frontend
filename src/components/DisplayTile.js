import Modal from "./Modal";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

class DisplayTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    fetch(
      `https://itp-404-final-project-server.herokuapp.com/api/${this.props.type}/${this.props.vehicle.id}`,
      { method: "DELETE" }
    ).then((data) => {
      this.setState({ modalOpen: false });
      toast.success(`${this.props.vehicle.name} is successfully deleted`);
    });
  }
  render() {
    if (this.props.vehicle != null) {
      return (
        <div className="display-tile">
          <img src={this.props.vehicle.img} alt="vehicle" />
          <p>{this.props.vehicle.name}</p>
          {this.props.type === "cars" && (
            <p>Horsepower: {this.props.vehicle.horsepower}</p>
          )}
          {this.props.type === "motorcycles" && (
            <p>Displacement: {this.props.vehicle.displacement}</p>
          )}
          <p className="last-p">Curb Weight: {this.props.vehicle.weight}</p>
          {this.props.view ? (
            <Link to={`/${this.props.type}/${this.props.vehicle.id}`}>
              <button type="button" className="btn btn-primary">
                View
              </button>
            </Link>
          ) : (
            <>
              <Link
                to={`/${this.props.type}/${this.props.vehicle.id}/update`}
                style={{ marginRight: "10%" }}
              >
                <button type="button" className="btn btn-secondary">
                  Update
                </button>
              </Link>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  this.setState({ modalOpen: true });
                }}
              >
                Delete
              </button>
              {this.state.modalOpen && (
                <Modal
                  title="Confirmation"
                  body={`Are you sure you want to delete ${this.props.vehicle.name}?`}
                  onBack={() => {
                    this.setState({ modalOpen: false });
                  }}
                  onDelete={this.handleDelete}
                />
              )}
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
