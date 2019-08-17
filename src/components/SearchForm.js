import React from "react";

import { useLocalStorage } from "./hooks/useLocalStorage.js";

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useLocalStorage("search", {
    name: ""
  });

  const handleInputChange = event => {
    setQuery({ ...query, name: event.target.value });
  };

  return (
    <section className="search-form">
      <form onSubmit={event => onSearch(event, query)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={query.name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
