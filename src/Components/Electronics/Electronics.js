import React from "react";

const Electronics = (props) => {

  return (
    <div>
      <h1>Electronics</h1>
      {props.electronics.map((item) => {
        return (
          <div
            key={item.id}
          >
            <h3>
              {item.name}--{item.price}--{item.category}
              <button onClick={() => props.deleteElectronics(item.id)}>  Delete</button>
            </h3>
           
          </div>
        );
      })}
    </div>
  );
};

export default Electronics;