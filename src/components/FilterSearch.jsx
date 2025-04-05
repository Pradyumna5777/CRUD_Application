import React, { useContext, useEffect } from "react";
import ItemContext from "./itemContext";

const FilterSearch = () => {
  const { items, setAllItems, filteredItems, searchTerm, setSearchTerm } =
    useContext(ItemContext);

  useEffect(() => {
    setAllItems(items);
  }, [items]);
  const handleSearch = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    if (newSearchTerm.length !== 0) {
      setAllItems(filteredItems);
    } else {
      setAllItems(items);
    }
  };

  const clearSearch = () => {
    setAllItems(items);
    setSearchTerm("");
  };

  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={handleSearch}
        className="px-2 py-1 border rounded-l bg-gray-100 outline-none"
      />
      <button
        onClick={clearSearch}
        className="bg-[#e42525] hover:bg-[#ff0808] text-white px-[1vw] py-[.6vh] rounded-r font-bold"
      >
        Clear
      </button>
    </div>
  );
};

export default FilterSearch;
