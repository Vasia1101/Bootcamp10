import React from "react";
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
    alignItems: "center",
    zIndex: 99999
  },
  modal: {
    maxWidth: 600,
    minHeight: 300,
    backgroundColor: "#fff",
    padding: 16
  }
};
const Modal = React.forwardRef((props, ref) => {
  const { onClose, handleWindowClick } = props;
  return (
    <div onClick={handleWindowClick} style={styles.backdrop}>
      <div style={styles.modal} ref={ref}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ipsum
          obcaecati maiores ipsam harum distinctio quia, soluta voluptatibus
          iste deserunt consectetur totam quas quidem, aliquid voluptatem nisi,
          nobis expedita quis?
        </p>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
});

export default Modal;
