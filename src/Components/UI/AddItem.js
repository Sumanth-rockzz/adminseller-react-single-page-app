import React, { useState } from "react";

const AddItem = (props) => {
    
  const [id, setId] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [category, setCategory] = useState('');

  const idHandler = (e) => {
    setId(e.target.value);
  };
  const itemNameHandler = (e) => {
    setItemName(e.target.value);
  };
  const itemPriceHandler = (e) => {
    setItemPrice(e.target.value);
  };

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const itemDetails = {
      id: id,
      name: itemName,
      price: itemPrice,
      category: category,
    };
    if (category === "Electronics") {
      props.addElectronics(itemDetails);
    }
    if (category === "Food") {
      props.addFood(itemDetails);
    }

    if (category === "Skincare") {
      props.addSkin(itemDetails);
    }

    localStorage.setItem(id, JSON.stringify(itemDetails));
    setId("");
    setItemPrice("");
    setItemName("");
    setCategory("");
  };
  return(
  <form>
    <div>
      <label htmlFor="">Product Id : </label>
      <input
        type="number"
        placeholder="Enter Product Id"
        onChange={idHandler}
        value={id}
      />
    </div>
    <div>
      <label htmlFor="">Selling Price : </label>
      <input
        type="number"
        placeholder="Enter Product Price"
        onChange={itemPriceHandler}
        value={itemPrice}
      />
    </div>
    <div>
      <label htmlFor="">Product Name : </label>
      <input
        type="text"
        placeholder="Enter Product Name"
        onChange={itemNameHandler}
        value={itemName}
      />
    </div>
    <div>
      <label htmlFor="">Select Categories : </label>
      <select value={category} onChange={categoryHandler}>
        <option>Choose</option>
        <option value="Electronics">Electronics</option>
        <option value="Food">Food</option>
        <option value="Skincare">Skincare</option>
      </select>
    </div>
    <button type="submit" onClick={submitHandler}>
      Add Item
    </button>
  </form>
  );
};
export default AddItem;
