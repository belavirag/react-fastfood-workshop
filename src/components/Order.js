import React, { useState } from "react";
import CardList from "./CardList";
import Card from "./Card";
import { MENU } from "../data";
import Content from "./Content";
import Button from "./Button";

const Order = () => {
  const [order, setOrder] = useState([]);

  const addOrder = (index) => {
    let copiedOrder = [...order];

    // since we append to this array objects and they might get out of order
    // we need to find it with filter each time and not index it directly
    let found = copiedOrder.filter((o) => o.id == index);
    if (found.length == 1) {
      found[0].count += 1;
    } else {
      copiedOrder.push({ ...MENU[index], count: 1, id: index });
    }

    setOrder(copiedOrder);
  };

  const removeOrder = (id) => {
    let copiedOrder = [...order];
    // assume the order is in the array, since we want to decrement/remove it
    let found = copiedOrder.filter((o) => o.id == id)[0];

    found.count--;

    if (found.count <= 0) {
      // remove it entirely
      copiedOrder = copiedOrder.filter((o) => o.id != found.id);
    }

    setOrder(copiedOrder);
  };

  return (
    <div>
      <h2 className="text-center">Order</h2>
      <Content className="mt-4">
        <CardList>
          {MENU.map((order, index) => (
            <Card {...order} key={index} onClick={() => addOrder(index)} />
          ))}
        </CardList>
      </Content>

      <h2 className="text-center mt-4">Your Order</h2>
      <Content className="my-4">
        {order.map((order, index) => (
          <div key={index}>
            <div className="d-flex justify-content-between mt-2">
              <div>
                <b>{order.title}</b>
                <span>&nbsp;x {order.count}</span>
              </div>

              <div>
                <Button type="danger" onClick={() => removeOrder(order.id)}>
                  -
                </Button>
                <Button type="success" onClick={() => addOrder(order.id)}>
                  +
                </Button>
              </div>
              <div>
                <span>{(order.price * order.count).toLocaleString()} kr</span>
              </div>
            </div>
            <hr />
          </div>
        ))}
        <div style={{ textAlign: "right" }}>
          <b>
            Total:&nbsp;
            {order.reduce((a, b) => a + b.price * b.count, 0).toLocaleString()}
            &nbsp;kr
          </b>
        </div>
      </Content>
    </div>
  );
};

export default Order;
