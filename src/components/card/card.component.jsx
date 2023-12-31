import React from "react";
import "./card.styles.css";

const Card = (props) => {
  const { id, name, email } = props.monster;
  return (
    <div key={id}>
      <div className="card-container">
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt="monster"
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
