import React from "react";
import "./client-card.scss";

export default function ClientCard(props) {
  const { text, person } = props;
  return (
    <div id="client-card">
      <div className="container">
        <h4>{text}</h4>
        <div className="circle"></div>
        <p>{person}</p>
      </div>
    </div>
  );
}
