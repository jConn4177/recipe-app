import React from "react";
import Search from "./Search";
import NewRecipeForm from "./NewRecipeForm";

function Header({ searchInput, setSearchInput, isCollapsed }) {
  return (
    <div className="header-page">
      <div className="form-side">
      <NewRecipeForm/>
      </div>
      <div className="search-side">
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      </div>
    </div>
  );
}

export default Header;
