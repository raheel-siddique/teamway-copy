import React from "react";

import { CounterStyle } from "./Counter.style";

function Counter(props) {
  const { icon, heading, counterNo, color, onClick } = props;
  return (
    <CounterStyle color={color} onClick={onClick}>
      <span className="icon">{icon}</span>
      <figcaption className="card-details">
        <h3 className="heading">{heading}</h3>
        <h2 className="counter-no">{counterNo}</h2>
      </figcaption>
    </CounterStyle>
  );
}

export default Counter;
