import React, { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((m) =>
      m.name.toLowerCase().includes(searchField)
    );
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (e) => {
    const searchText = e.target.value.toLocaleLowerCase();

    setSearchField(searchText);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder={"Search monsters"}
        classes={"search-box"}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
