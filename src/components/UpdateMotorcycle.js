import React from "react";
import Navbar from "./Nav";

class UpdateMotorcycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicle: null,
      name: "",
      img: "",
      displacement: "",
      weight: "",
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleImgChange = this.handleImgChange.bind(this);
    this.handleDisplacementChange = this.handleDisplacementChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  componentDidMount() {
    fetch(
      `https://itp-404-final-project-server.herokuapp.com/api/motorcycles/${this.props.match.params.id}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          vehicle: data,
          name: data.name,
          img: data.img,
          displacement: data.displacement,
          weight: data.weight,
        });
      });
  }
  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleImgChange(event) {
    this.setState({ img: event.target.value });
  }

  handleDisplacementChange(event) {
    this.setState({ displacement: event.target.value });
  }

  handleWeightChange(event) {
    this.setState({ weight: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted");
    fetch(
      `https://itp-404-final-project-server.herokuapp.com/api/motorcycles/${this.props.match.params.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          name: this.state.name,
          img: this.state.img,
          displacement: parseInt(this.state.displacement),
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
          displacement: data.displacement,
          weight: data.weight,
        });
      });
  }

  handleReset() {
    let vehicle = this.state.vehicle;
    this.setState({
      name: vehicle.name,
      img: vehicle.img,
      displacement: vehicle.displacement,
      weight: vehicle.weight,
    });
  }

  render() {
    if (this.state.vehicle != null) {
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
                  className="form-control"
                  id="name"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
              </div>
              <div className="my-4 mx-2">
                <label className="form-label" htmlFor="img-url">
                  Image URL
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="img-url"
                  value={this.state.img}
                  onChange={this.handleImgChange}
                />
              </div>
              <div className="my-4 mx-2">
                <label className="form-label" htmlFor="power">
                  Displacement (cc)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="power"
                  value={this.state.displacement}
                  onChange={this.handleDisplacementChange}
                />
              </div>
              <div className="my-4 mx-2">
                <label className="form-label" htmlFor="curb-weight">
                  Curb Weight (lbs)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="curb-weight"
                  value={this.state.weight}
                  onChange={this.handleWeightChange}
                />
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

export default UpdateMotorcycle;
