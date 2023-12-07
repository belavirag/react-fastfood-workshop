import React, { useContext } from "react";
import { ThemeContext } from "../App";
import Button from "./Button";

const Card = ({ title, desc, image, price, onClick }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="col mt-4">
      <div className={`card ${theme && "bg-black text-white"}`}>
        <img src={image} alt={title} className="rounded-2 p-2 bg-white" />
        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text">{desc}</p>
          <p className="card-text fw-bold">Price: {price} kr</p>
          <div className="text-center">
            <Button onClick={onClick}>Add to Order</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
