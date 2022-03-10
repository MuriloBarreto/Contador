import React from "react";
import "./Digit.jsx";
import './Digit.css';

export default function Digit(props) {
  return (
    <div className="display">
      <span className="digit">{props.digit}</span>
      <p>{props.label}</p>
    </div>
  );
}
