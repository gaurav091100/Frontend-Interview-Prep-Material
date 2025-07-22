import React, { useState, useEffect } from "react";

const ITEMS_PER_PAGE = 20;

function SearchFilterList() {
  const [allItems, setAllItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ category: "" });
  const [page, setPage] = useState(1);
  const [displayItems, setDisplayItems] = useState([]);

  // Fetch data once
  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => setAllItems(data));
  }, []);

  // Filter and search items whenever searchTerm, filters, page, or allItems change
  useEffect(() => {
    let filtered = allItems;

    // Apply search
    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply filters (example: category)
    if (filters.category) {
      filtered = filtered.filter((item) => item.category === filters.category);
    }

    // Pagination
    const paginated = filtered.slice(0, page * ITEMS_PER_PAGE);

    setDisplayItems(paginated);
  }, [allItems, searchTerm, filters, page]);

  // Infinite scroll handler example (simplified)
  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target.scrollingElement;
    if (scrollTop + clientHeight >= scrollHeight - 50) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <input
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {
          setPage(1); // reset page when searching
          setSearchTerm(e.target.value);
        }}
      />
      <select
        onChange={(e) => {
          setPage(1);
          setFilters((f) => ({ ...f, category: e.target.value }));
        }}
        value={filters.category}
      >
        <option value="">All Categories</option>
        <option value="cat1">Category 1</option>
        <option value="cat2">Category 2</option>
      </select>

      <ul>
        {displayItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      {/* Optional: Pagination controls instead of infinite scroll */}
      {/* <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>Prev</button>
      <button onClick={() => setPage(p => p + 1)}>Next</button> */}
    </div>
  );
}

export default SearchFilterList;
