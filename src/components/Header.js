import React from "react";
import Search from "./Search";
import NewRecipe from "./NewRecipe";

function Header({ searchInput, setSearchInput }) {
  return (
    <div>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <NewRecipe />
    </div>
  );
}

export default Header;
