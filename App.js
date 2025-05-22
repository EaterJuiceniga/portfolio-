import React, { useState } from "react";
import CardForm from "./CardForm";
import BusinessCard from "./BusinessCard";
import "./App.css";

function App() {
  const [cardData, setCardData] = useState({
    name: "",
    title: "",
    company: "",
    email: "",
    phone: "",
    website: ""
  });

  return (
    <div className="App">
      <h1>Business Card Generator</h1>
      <CardForm cardData={cardData} setCardData={setCardData} />
      <BusinessCard {...cardData} />
    </div>
  );
}

export default App;