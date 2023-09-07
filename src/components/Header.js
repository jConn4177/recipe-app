import React from "react";
import Search from "./Search";
import NewRecipeForm from "./NewRecipeForm";

function Header({ searchInput, setSearchInput }) {
  return (
    <div id="header">
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <NewRecipeForm />
    </div>
  );
}

export default Header;
