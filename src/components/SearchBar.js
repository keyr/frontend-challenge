import React from "react";

export default ({ search, handleSearch, handleSearchSubmit }) => {
  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Search for a course!"
        value={search}
        onChange={(text) => handleSearch(text)}
      />
      <input type="submit" />
    </form>
  );
};
