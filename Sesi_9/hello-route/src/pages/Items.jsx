import React from "react";
import { Outlet } from "react-router-dom";
import { getItems } from "../items";
import ItemRow from "../components/ItemRow";

const Items = () => {
  const items = getItems();

  return (
    <div>
      <h1>Items page</h1>
      <p>Lorem ipsum dolor sit.</p>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <ItemRow key={item.id} item={item} />
          ))}
        </tbody>
      </table>
      <Outlet />
    </div>
  );
};

export default Items;
