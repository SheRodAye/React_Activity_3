import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./style.css"

function ColorChanger() {
  const [color, setColor] = useState("");

  function handleChange(event) {
    setColor(event.target.value);
  }

  return (
    <div>
      <div className="div" style={{ backgroundColor: color }}>
    <div className="bg-light p-3" >
      <Form.Group controlId="formBasicColor">
        <Form.Label>Enter a color name to change color of div:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Color name"
          value={color}
          onChange={handleChange}
        />
      </Form.Group>
      
    </div>
    <div className="p-3 mb-3 text-center display-6 fw-bolder">
    This div's background color will change based on your input.
  </div>
  <div className=" d-flex justify-content-center align-items-center display-3 fw-bold text-light res">
      {color.toUpperCase()}
  </div>
  </div>
  </div>
  );
}

export default ColorChanger;
