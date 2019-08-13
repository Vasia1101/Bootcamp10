import React from "react";

const IconButton = ({ app }) => {
  const { img, href, alt, color, txt, name } = app;

  return (
    <a
      href={href}
      style={{ backgroundColor: color, margin: 5, display: "block" }}
      title={txt}
      className="btn login-btn"
    >
      <img src={img} alt={alt} />
      <span className="btn-txt">{name.toUpperCase()} Login</span>
    </a>
  );
};
export default IconButton;
