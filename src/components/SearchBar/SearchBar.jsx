import React from "react";
import { MdSearch } from "react-icons/md";
import { SearchbarStyle } from "./SearchBar.style";

function SearchBar(props) {
  const { value, onChange } = props;
  return (
    <SearchbarStyle>
      <input
        type="text"
        className="search-input"
        placeholder="Search Table..."
        value={value}
        onChange={onChange}
      />

      <button className="search-icon">
        <MdSearch />
      </button>
    </SearchbarStyle>
  );
}

export default SearchBar;
