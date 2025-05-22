import React from "react";

function CardForm({ cardData, setCardData }) {
  const handleChange = (e) => {
    setCardData({
      ...cardData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form className="card-form">
      <label>
        Name:
        <input name="name" value={cardData.name} onChange={handleChange} />
      </label>
      <label>
        Title:
        <input name="title" value={cardData.title} onChange={handleChange} />
      </label>
      <label>
        Company:
        <input name="company" value={cardData.company} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input name="email" value={cardData.email} onChange={handleChange} />
      </label>
      <label>
        Phone:
        <input name="phone" value={cardData.phone} onChange={handleChange} />
      </label>
      <label>
        Website:
        <input name="website" value={cardData.website} onChange={handleChange} />
      </label>
    </form>
  );
}

export default CardForm;