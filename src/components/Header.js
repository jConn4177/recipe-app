import React from "react";
import Search from "./Search";
import NewRecipeForm from "./NewRecipeForm";

function Header({ searchInput, setSearchInput, isCollapsed }) {
  return (
    <div
      className="row g-5"
      id="header"
      style={{ display: isCollapsed ? "none" : "" }}
    >
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
