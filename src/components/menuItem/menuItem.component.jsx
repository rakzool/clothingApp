import React from "react";
import "./menuItem.scss";

export default function MenuItem({ title, imageUrl, size }) {
  return (
    <div className={`menuItem ${size}`}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="backgroundImage"
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}
