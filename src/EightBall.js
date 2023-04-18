import React, { useState } from "react";
// TODO: import .css here

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
  // TODO: could have one piece of state storing both msg and color
  // const [answer, setAnswer] = useState({msg: "Think of...", color: "black"});
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

  // TODO: put this in a .css file and convert property names to .css format
  const buttonStyle = {
    color: "white",
    backgroundColor: color,
    width: "200px",
    fontSize: "14pt",
    height: "200px",
    borderRadius: "50%"
  };

  // TODO: style={{backgroundColor: color}}, put rest of style in .css
  // give button a className="EightBall"
  return (
    <div>
    <button onClick={handleClick} style={buttonStyle}>
      <b>{msg}</b>
    </button>
  </div>
  );
}

export default EightBall;