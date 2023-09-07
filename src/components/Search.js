import React from "react";

function Search({ searchInput, setSearchInput }) {
  const handleOnChange = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <div>
      <h2>Search function...</h2>
      <form className="app-form">
        <label>Search Recipes</label>
        <input
          className="prompt"
          value={searchInput}
          type="text"
          placeholder="Search Recipe Names and Ingredients..."
          onChange={handleOnChange}
        />
      </form>
    </div>
  );
}

export default Search;
