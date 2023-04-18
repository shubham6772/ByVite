import React from "react";
import "./Card.css";

const Card = ({
  id,
  name,
  email,
  phone,
  company,
  website,
  address,
  username,
}) => {
  return (
    <div className="main__container flex" key={id}>
      <img
        src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
        alt="avtar"
      />
      <div className="user__info">
        <h1> {name}</h1>
        <div className="single__info info">
          <h4>Email:</h4>
          <p> {email}</p>
        </div>
        <div className="single__info">
          <h4>Phone:</h4>
          <p> {phone}</p>
        </div>
        <div className="single__info">
          <h4>Company:</h4>
          <p> {company.name}</p>
        </div>
        <div className="single__info">
          <h4>Website:</h4>
          <p> {website}</p>
        </div>
        <div className="single__info">
          <h4>Address: </h4>
          <p> {`${address.street},${address.suite},${address.city},${address.zipcode}`}</p>
        </div>
      </div>

    </div>
  );
};

export default Card;
