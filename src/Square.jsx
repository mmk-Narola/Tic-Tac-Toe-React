import React from "react";
import "./App.css";
const Square = ({ value, onClick }) => {
  return (
    <div className="square" onClick={onClick}>
      <h4>{value}</h4>
    </div>
  );
};

export default Square;
