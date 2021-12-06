import React from "react";
import ReactDom from "react-dom";

// From bootstrap docs
class Modal extends React.Component {
  render() {
    const modalContainer = document.getElementById("modal-container");
    return ReactDom.createPortal(
      <div className="modal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.title}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={this.props.onBack}
              ></button>
            </div>
            <div className="modal-body">
              <p>{this.props.body}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={this.props.onBack}
              >
                Back
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.props.onDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>,
      modalContainer
    );
  }
}

export default Modal;
