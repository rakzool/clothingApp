import React from "react";
import "./menuItem.scss";
import { useNavigate } from "react-router-dom";

export default function MenuItem({ title, imageUrl, size, linkUrl }) {
  const navigate = useNavigate();

  return (
    <div className={`menuItem ${size}`} onClick={() => navigate(`${linkUrl}`)}>
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
