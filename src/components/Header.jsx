import { useState } from "react";
import "./Header.css";
import React from "react";


const Header = () => {
  const [value, setValue] = useState("");
  const [text, setText] = useState("");
  const [select, setSelect] = useState("");

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  const writeHandler = (event) => {
    setText(event.target.value);
  };

  const selectHandler = (event) => {
    setSelect(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(value, text, select);
    setText("");
    setValue("");
    setSelect("");
  };

  return (
    <div className="form">
        <h3>Makeup Product Beaty</h3>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={changeHandler} value={value} placeholder='product' />
        <select onChange={selectHandler} value={select}>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
        </select>
        <textarea onChange={writeHandler} value={text} placeholder='weight' />
        <div>
        <button type="submit">buy in</button>
        </div>
      </form>
    </div>
  );
};

export default Header;