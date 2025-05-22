import React from 'react';
import './BusinessCard.css';

function BusinessCard({ name, title, company, email, phone, website }) {
  return (
    <div className="business-card">
      <h2>{name || "Your Name"}</h2>
      <div>{title || "Your Title"}</div>
      <div>{company || "Your Company"}</div>
      <div style={{ marginTop: 10 }}>
        <div>Email: {email || "you@example.com"}</div>
        <div>Phone: {phone || "+1234567890"}</div>
        <div>Website: {website || "yourwebsite.com"}</div>
      </div>
    </div>
  );
}

export default BusinessCard;