import React from "react";

export function Header() {
  const aStyle = {
    display: "inline-block",
    color: "blue",
    margin: "7px",
    textDecoration: "none",
  };

  return (
    <div style={{ backgroundColor: "#ccc" }}>
      <a href="" style={aStyle}>
        Home
      </a>{" "}
      |&nbsp;
      <a href="" style={aStyle}>
        React
      </a>{" "}
      |&nbsp;
      <a href="" style={aStyle}>
        React Native
      </a>
    </div>
  );
}

export function Content() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>
        Hello
        <br />
        React & React Native
        <br /> <br />
      </h2>
    </div>
  );
}

export const Footer = () => {
  return (
    <div style={{ textAlign: "center" }}>
      &copy; {new Date().getFullYear()} All rights reserved{" "}
      {/* Fixed typo here */}
    </div>
  );
};
