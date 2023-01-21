import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter an Amiibo Name..." data="https://www.amiiboapi.com/api/amiibo/?name="/>
    </div>
  );
}

export default App;
