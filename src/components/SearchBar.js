import React from "react";

export default ({
  search,
  handleSearch,
  handleSearchSubmit,
  error,
  isLoading,
}) => {
  return (
    <>
      <form className="flex-container search-bar" onSubmit={handleSearchSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Search for a course!"
          value={search}
          onChange={(text) => handleSearch(text)}
          disabled={isLoading}
        />
        <input className="button is-link" type="submit" />
      </form>
      {error.trim().length !== 0 && (
        <div className="subtitle is-6 has-text-danger">{error}</div>
      )}
    </>
  );
};
