import React from "react";

function Search({ searchInput, setSearchInput }) {
  const handleOnChange = (e) => {
    setSearchInput(e.target.value);
  };
  <div className="ui search">
    <div className="ui icon input">
      <input
        className="prompt"
        value={searchInput}
        type="text"
        placeholder="Search Recipe Names and Ingredients..."
        onChange={handleOnChange}
      />
      <i className="search icon"></i>
    </div>
  </div>;
}

export default Search;
