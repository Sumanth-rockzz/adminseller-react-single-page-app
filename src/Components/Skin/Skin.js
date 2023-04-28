import React from "react";

const Skin = (props) => {
  return (
    <div>
      <h1>Skin</h1>
      {props.skin.map((item) => {
        return (
          <div
            key={item.id}
          >
            <h3>
              {item.name}--{item.price}--{item.category}
              <button onClick={() => props.deleteSkin(item.id)}>Delete</button>
            </h3>
            
          </div>
        );
      })}
    </div>
  );
};

export default Skin;