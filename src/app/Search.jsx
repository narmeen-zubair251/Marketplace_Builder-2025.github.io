import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"; 

const SearchBar = ({ Food = [] }) => {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Runs only when Food updates (Prevents infinite loop)
  useEffect(() => {
    console.log("Food data received:", Food); 
    setFilteredProducts(Food);
  }, [Food]); 

  // Runs only when query updates (Prevents infinite loop)
  useEffect(() => {
    if (!query) {
      setFilteredProducts(Food); // Reset when query is empty
      return;
    }

    const lowerCaseQuery = query.toLowerCase();
    const filtered = Food.filter((item) =>
      item.name.toLowerCase().includes(lowerCaseQuery) ||
      item.category.toLowerCase().includes(lowerCaseQuery) ||
      (item.tags && item.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery)))
    );

    console.log("Filtered results:", filtered); 
    setFilteredProducts(filtered);
  }, [query]); // Removed Food from dependency to avoid re-triggering

  return (
    <div className="flex flex-col items-center mt-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for food..."
        className="w-full max-w-lg px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-300"
      />

      <div className="mt-4 w-full max-w-lg">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div key={item.slug?.current || item.name} className="p-2 border-b">
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-gray-500">{item.category}</p>
              <p className="text-green-600">${item.price}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-2">No results found</p>
        )}
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  Food: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.shape({ current: PropTypes.string }),
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

export default SearchBar;
