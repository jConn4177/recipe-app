import React from "react";
import Search from "./Search";

function Header({ searchInput, setSearchInput, isCollapsed }) {
  return (
    <div style={{ display: isCollapsed ? "none" : "" }} className="header-page">
      <div className="form-side">
      </div>
      <div className="search-side">
        <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      </div>
    </div>
  );
}

export default Header;