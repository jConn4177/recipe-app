import React from "react";
import Search from "./Search";
import NewRecipeForm from "./NewRecipeForm";

function Header({ searchInput, setSearchInput }) {
  return (
    <div className="row" id="header">
      <div className="col">
        <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      </div>
      <div className="col">
        <NewRecipeForm />
      </div>
    </div>
  );
}

export default Header;
