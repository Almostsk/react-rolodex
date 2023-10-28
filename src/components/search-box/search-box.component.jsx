import React, { Component } from "react";
import "./search-box.styles.css";

export class SearchBox extends Component {
  render() {
    const { onChangeHandler, placeholder, classes } = this.props;
    return (
      <div>
        <input
          type="search"
          className={`search-box ${classes}`}
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
