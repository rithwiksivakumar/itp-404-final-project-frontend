import React from "react";
import { toast } from "react-toastify";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      name: "",
      text: "",
      invalidSubmit: false,
    };
    this.loadComments = this.loadComments.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // checkFormValidity(attribute) {
  //   attribute.length <= 0;
  // }
  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    let valid = this.state.name.length > 0 && this.state.text.length > 0;
    if (valid) {
      this.setState({ invalidSubmit: false });
      fetch(`https://itp-404-final-project-server.herokuapp.com/api/comments`, {
        method: "POST",
        body: JSON.stringify({
          author: this.state.name,
          text: this.state.text,
          timestamp: Date.now(),
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          toast.success("Sucessfully added comment");
          this.loadComments();
        });
    } else {
      this.setState({ invalidSubmit: true });
    }
  }
  loadComments() {
    fetch(
      `https://itp-404-final-project-server.herokuapp.com/api/comments?_sort=timestamp&_order=desc`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ comments: data });
      });
  }
  padZeros(num) {
    if (num < 10) {
      return "0" + num;
    } else return num;
  }
  getTime(date) {
    let hours = date.getHours();
    let isPM = false;
    if (hours > 12) {
      hours = hours - 12;
      isPM = true;
    }
    isPM = isPM ? "PM" : "AM";
    return hours + ":" + this.padZeros(date.getMinutes()) + " " + isPM;
  }
  getDate(timestamp) {
    let date = new Date(timestamp);
    let dateString =
      date.getMonth() +
      1 +
      "/" +
      date.getDate() +
      "/" +
      date.getFullYear() +
      " " +
      this.getTime(date);
    return dateString;
  }
  componentDidMount() {
    this.loadComments();
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="name"
              className={
                this.state.name.length <= 0
                  ? "form-control is-invalid"
                  : "form-control"
              }
              id="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <div className="invalid-feedback">Name cannot be empty</div>
          </div>
          <div className="my-3">
            <textarea
              className={
                this.state.text.length <= 0
                  ? "form-control is-invalid"
                  : "form-control"
              }
              id="text"
              placeholder="Add a comment"
              style={{ height: "160px" }}
              value={this.state.text}
              onChange={this.handleTextChange}
            />
            <div className="invalid-feedback">Comment cannot be empty</div>
          </div>
          <div>
            <p
              style={{
                color: "red",
                fontSize: "14px",
                display: this.state.invalidSubmit ? "block" : "none",
              }}
            >
              Unable to Add Comment
            </p>
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
        <div className="comment-wrapper">
          {this.state.comments.map((item, key) => {
            return (
              <div className="comment" key={item.id}>
                <p className="author" style={{ fontWeight: "bold" }}>
                  {item.author}
                </p>
                <p className="date">{this.getDate(item.timestamp)}</p>
                <p> {item.text}</p>
                <hr />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Comments;
