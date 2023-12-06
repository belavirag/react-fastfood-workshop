import React from "react";
import CardList from "./CardList";
import Card from "./Card";
import { MENU } from "../data";

const Order = () => {
  return (
    <div>
      <h2>Order</h2>
      <CardList>
        {MENU.map((order, index) => (
          <Card {...order} key={index} />
        ))}
      </CardList>
    </div>
  );
};

export default Order;
