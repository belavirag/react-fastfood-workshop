import React, { useContext } from "react";
import { ThemeContext } from "../App";
import Button from "./Button";

const Card = ({ title, desc, image, price }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="col">
      <div className={`card ${theme && "bg-dark text-white"}`}>
        <img src={image} alt={title} className="rounded-2" />
        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text">{desc}</p>
          <p className="card-text fw-bold">Price: {price} kr</p>
          <div className="text-center">
            <Button>Add</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
