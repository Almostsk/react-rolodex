import React from "react";
import "./search-box.styles.css";

const SearchBox = (props) => {
  const { onChangeHandler, placeholder, classes } = props;
  return (
    <input
      type="search"
      className={`search-box ${classes}`}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
