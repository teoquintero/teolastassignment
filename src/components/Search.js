import React, { useState } from "react";
import {Input} from 'antd'
const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = e => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  };

  return (
    <form className="search">
      <Input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />

      <Input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
};

export default Search;