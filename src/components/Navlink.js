import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import PropTypes from "prop-types";
import "./Navlink.css";

class NavLink extends React.Component {
  constructor(props) {
    super(props);
    this.getStyle = this.getStyle.bind(this);
  }
  getStyle() {
    let style = {};
    if (this.props.active) {
      style.fontWeight = "bold";
    }
    let percent = Math.abs(this.props.position) * 10;
    if (this.props.position < 0) {
      style.marginRight = `${percent}%`;
    } else {
      style.marginLeft = `${percent}%`;
    }
    return style;
  }
  render() {
    return (
      <>
        <a href={this.props.url} style={this.getStyle()}>
          {this.props.text}
        </a>
      </>
    );
  }
}

NavLink.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
  position: PropTypes.number,
  active: PropTypes.bool,
};

export default NavLink;
