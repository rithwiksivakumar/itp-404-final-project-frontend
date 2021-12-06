import React from "react";
import NotFound from "./NotFound";
import Navbar from "./Nav";
import { toast } from "react-toastify";

class UpdateCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicle: null,
      name: "",
      img: "",
      horsepower: "",
      weight: "",
      invalidSubmit: false,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleImgChange = this.handleImgChange.bind(this);
    this.handleHorsepowerChange = this.handleHorsepowerChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    document.title = "Update Car";

    fetch(
      `https://itp-404-final-project-server.herokuapp.com/api/cars/${this.props.match.params.id}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (
          data !== null &&
          data !== undefined &&
          data.id !== this.props.match.params.id
        ) {
          this.setState({ vehicle: -1 });
        } else {
          this.setState({
            vehicle: data,
            name: data.name,
            img: data.img,
            horsepower: data.horsepower,
            weight: data.weight,
          });
        }
      });
  }
  checkFormValidity(attribute, isNum) {
    let len = attribute.length;
    if (isNum && len > 0 && parseInt(attribute) < 0) {
      return ["form-control is-invalid", true, false];
    }
    return attribute.length <= 0
      ? ["form-control is-invalid", false, false]
      : ["form-control", false, true];
  }
  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleImgChange(event) {
    this.setState({ img: event.target.value });
  }

  handleHorsepowerChange(event) {
    this.setState({ horsepower: event.target.value });
  }

  handleWeightChange(event) {
    this.setState({ weight: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let valid = true;
    valid = valid && this.checkFormValidity(this.state.name, false)[2];
    valid = valid && this.checkFormValidity(this.state.img, false)[2];
    valid = valid && this.checkFormValidity(this.state.horsepower, true)[2];
    valid = valid && this.checkFormValidity(this.state.weight, true)[2];
    if (valid) {
      this.setState({ invalidSubmit: false });
      fetch(
        `https://itp-404-final-project-server.herokuapp.com/api/cars/${this.props.match.params.id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            name: this.state.name,
            img: this.state.img,
            horsepower: parseInt(this.state.horsepower),
            weight: parseInt(this.state.weight),
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.setState({
            vehicle: data,
            name: data.name,
            img: data.img,
            horsepower: data.horsepower,
            weight: data.weight,
          });
          toast.success(`${data.name} has been successfully updated!`);
        });
    } else {
      this.setState({ invalidSubmit: true });
    }
  }

  handleReset() {
    let vehicle = this.state.vehicle;
    this.setState({
      name: vehicle.name,
      img: vehicle.img,
      horsepower: vehicle.horsepower,
      weight: vehicle.weight,
      invalidSubmit: false,
    });
  }

  render() {
    if (this.state.vehicle != null && this.state.vehicle !== -1) {
      return (
        <>
          <Navbar />
          <div className="update-page">
            <h1>Update Page</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="mx-2">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input
                  type="name"
                  className={this.checkFormValidity(this.state.name, false)[0]}
                  id="name"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
                <div className="invalid-feedback">Name cannot be empty</div>
              </div>
              <div className="my-4 mx-2">
                <label className="form-label" htmlFor="img-url">
                  Image URL
                </label>
                <input
                  type="url"
                  className={this.checkFormValidity(this.state.img, false)[0]}
                  id="img-url"
                  value={this.state.img}
                  onChange={this.handleImgChange}
                />
                <div className="invalid-feedback">Please add image URL</div>
              </div>
              <div className="my-4 mx-2">
                <label className="form-label" htmlFor="power">
                  Horsepower
                </label>
                <input
                  type="number"
                  className={
                    this.checkFormValidity(this.state.horsepower, true)[0]
                  }
                  id="power"
                  value={this.state.horsepower}
                  onChange={this.handleHorsepowerChange}
                />
                <div className="invalid-feedback">
                  {this.checkFormValidity(this.state.horsepower, true)[1]
                    ? "Horsepower cannot be negative"
                    : "Please specify horsepower"}
                </div>
              </div>
              <div className="my-4 mx-2">
                <label className="form-label" htmlFor="curb-weight">
                  Curb Weight (lbs)
                </label>
                <input
                  type="number"
                  className={this.checkFormValidity(this.state.weight, true)[0]}
                  id="curb-weight"
                  value={this.state.weight}
                  onChange={this.handleWeightChange}
                />
                <div className="invalid-feedback">
                  {this.checkFormValidity(this.state.weight, true)[1]
                    ? "Curb weight cannot be negative"
                    : "Please specify curb weight"}
                </div>
              </div>
              <div className="mx-2">
                <p
                  style={{
                    color: "red",
                    fontSize: "14px",
                    display: this.state.invalidSubmit ? "block" : "none",
                  }}
                >
                  Unable to Update Car
                </p>
              </div>
              <button type="submit" className="btn btn-primary mx-2">
                Submit
              </button>
              <button
                type="reset"
                className="btn btn-secondary mx-4"
                onClick={this.handleReset}
              >
                Reset
              </button>
            </form>
          </div>
        </>
      );
    } else if (this.state.vehicle === -1) {
      return (
        <>
          <NotFound />
        </>
      );
    } else {
      return (
        <>
          <Navbar />
          <h1>Update</h1>
        </>
      );
    }
  }
}

export default UpdateCar;
