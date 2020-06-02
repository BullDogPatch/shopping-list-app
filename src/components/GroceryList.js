import React from "react";
import Item from "./Item";

const GroceryList = props => {
  // console.log(props.groceries)
  return (
    <div className="shopping-list">
      {props.groceries.map(item => {
        // console.log(item)
        return <Item item={item} key={item.id} toggleItem={props.toggleItem} />;
      })}
    </div>
  );
};

export default GroceryList;
