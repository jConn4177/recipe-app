import React, {useState} from "react";
import RecipePage from "./RecipePage";
import Header from "./Header";

function App() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="App">
      <h1 className="app-title">TasteBud: The Ultimate Flavor Buddy</h1>
      <Header searchInput={searchInput} setSearchInput={setSearchInput} />
      <RecipePage />
    </div>
  );
}

export default App;
