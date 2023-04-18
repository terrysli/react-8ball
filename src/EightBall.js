import React, { useState } from "react";

/** Magic Eight Ball showing random messages and corresponding colors
 *
 * Props:
 * - answers: [{msg, color}, {msg, color}, ...]
 *
 * States:
 * - msg: "It is certain"
 * - color: "green"
 *
 * App -> EightBall
*/

function EightBall({ answers }) {
  const [msg, setMsg] = useState("Think of a Question.");
  const [color, setColor] = useState("black");

  console.log("EightBall", msg, color);

  function handleClick(evt) {
    const answer = answers[Math.floor(Math.random() * answers.length)];
    setMsg(answer.msg);
    console.log("msg:", msg);
    setColor(answer.color);
    console.log("color:", color);
  }

  console.log("After handleClick", msg, color);

  const buttonStyle = {
    color: "white",
    backgroundColor: color,
    width: "200px",
    height: "200px",
    borderRadius: "50%"
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      <b>{msg}</b>
    </button>
  )
}

export default EightBall;