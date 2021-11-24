// import React, { Component } from "react";
import { useState } from "react";

// import PropTypes from "prop-types";

function Searchbar({ onSubmit, reset }) {
  const [query, setQuery] = useState("");

  const handleChangeQuery = (e) => {
    const { value } = e.currentTarget;
    // setState({
    //   [name]: value,
    // });
    setQuery(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(query);
    // setQuery("");

    // reset();
  };
  return (
    <header className="Searchbar">
      <form onSubmit={handleSubmit} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
        <input
          onChange={handleChangeQuery}
          value={query}
          className="SearchForm-input"
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

export default Searchbar;
