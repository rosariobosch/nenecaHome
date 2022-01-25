import React from "react";
import "./info-card.scss";

export default function InfoCard(props) {
  const { img, title, description } = props;
  return (
    <div className="infoCard">
      <div className="icon">
        <img src={img} />
      </div>
      <div className="info">
        <h4>{title}</h4>
        <h5>{description}</h5>
      </div>
    </div>
  );
}
