import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class NavLink extends React.Component {
  constructor(props) {
    super(props);
    this.getStyle = this.getStyle.bind(this);
  }
  getStyle() {
    let style = {};
    if (this.props.activePosition === this.props.position) {
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
        <Link to={this.props.url} style={this.getStyle()} data-testid="navlink">
          {this.props.text}
        </Link>
      </>
    );
  }
}

NavLink.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
  position: PropTypes.number,
  activePosition: PropTypes.number,
};

export default NavLink;
