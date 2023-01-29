import React, { Component } from "react";
import Toast from "react-bootstrap/Toast";
import propTypes from "prop-types";

const variants = {
  white: "#fff",
  primary: "#007bff",
  secondary: "#6c757d",
  success: "#28a745",
  info: "#17a2b8",
  warning: "#ffc107",
  danger: "#dc3545",
  light: "#f8f9fa",
  dark: "#343a40",
};

let openNotification;

export const notify = ({ text = "", variant = "primary", onClose }) => {
  if (!openNotification) throw new Error("Can't use notify before declaration");

  openNotification(text, variant, onClose);
};

export default class Notification extends Component {
  static propTypes = {
    options: propTypes.shape({
      animation: propTypes.bool,
      delay: propTypes.number,
      autohide: propTypes.bool,
    }),
  };

  state = {
    show: false,
    variant: variants["primary"],
    text: "",
    onClose: null,
  };

  constructor() {
    super();
    openNotification = this.open;
  }

  open = (text = "", variant = "primary", onClose) => {
    this.setState({
      show: true,
      text: text,
      variant: variants[variant],
      onClose: onClose,
    });
  };

  onClose = () => {
    this.setState({ show: false });
    if (this.state.onClose) this.state.onClose();
  };

  render() {
    const { options } = this.props;
    const { show, variant, text } = this.state;

    let animation = false,
      delay = 4000,
      autohide = true,
      position = "bottom";
    if (options) {
      animation = options.animation || false;
      delay = options.delay || 4000;
      autohide = options.autohide || true;
      position = options.position || "bottom";
    }

    return (
      <div className="d-flex justify-content-center">
        <Toast
          style={{
            background: variant,
            position: "fixed",
            [position]: 20,
            zIndex: 999,
          }}
          onClose={this.onClose}
          show={show}
          animation={animation}
          // delay={delay}
          // autohide={autohide}
        >
          <Toast.Header>
            <strong className="mr-auto">{text}</strong>
          </Toast.Header>
        </Toast>
      </div>
    );
  }
}
