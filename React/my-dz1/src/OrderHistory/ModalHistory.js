import React, { Component } from "react";
const styles = {
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    maxWidth: 600,
    minHeight: 300,
    backgroundColor: "#fff",
    padding: 16
  }
};
export default class Modal extends Component {
  render() {
    const { onClose, text } = this.props;
    return (
      <div style={styles.backdrop}>
        <div style={styles.modal}>
          <p>{text}</p>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
