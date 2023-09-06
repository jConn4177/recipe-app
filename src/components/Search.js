import React from "react";

function Search({ searchInput, setSearchInput }) {
  <div className="ui large fluid icon input">
    <input
      value={searchInput}
      type="text"
      placeholder="Search Recipe Names and Ingredients..."
      onChange={(e) => setSearchInput(e.target.value)}
    />
    <i className="circular search link icon"></i>
  </div>;
}

export default Search;