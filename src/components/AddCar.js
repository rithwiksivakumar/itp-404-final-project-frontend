import React from "react";
import Navbar from "./Nav";
import { toast } from "react-toastify";

class AddCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      img: "",
      horsepower: "",
      weight: "",
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleImgChange = this.handleImgChange.bind(this);
    this.handleHorsepowerChange = this.handleHorsepowerChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    console.log("Submitted");
    fetch(`https://itp-404-final-project-server.herokuapp.com/api/cars/`, {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        img: this.state.img,
        horsepower: parseInt(this.state.horsepower),
        weight: parseInt(this.state.weight),
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          name: data.name,
          img: data.img,
          horsepower: data.horsepower,
          weight: data.weight,
        });
        toast.success(`${data.name} has been successfully added!`);
      });
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="add-page" data-testid="add-car">
          <h1>Add Car</h1>
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
                Horsepower
              </label>
              <input
                type="number"
                className="form-control"
                id="power"
                value={this.state.horsepower}
                onChange={this.handleHorsepowerChange}
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
          </form>
        </div>
      </>
    );
  }
}

export default AddCar;
