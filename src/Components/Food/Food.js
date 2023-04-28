import React from "react";

const Food = (props) => {
   
  return (
    <div>
      <h1>Food</h1>
      {props.food.map((item) => {
        return (
          <div
            key={item.id}
          >
            <h3>
              {item.name}--{item.price}--{item.category}
              <button onClick={() => props.deleteFood(item.id)}>  Delete</button>
            </h3>
            
          </div>
        );
      })}
    </div>
  );
};

export default Food;