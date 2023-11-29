import React from "react";
import { FaSearch } from "react-icons/fa";
const Autocomplete = ({ search, handleSearch }) => {
  return (
    <div className="bg-white border rounded-xl w-[300px] p-2 items-center flex gap-2">
      <FaSearch />
      <input className="outline-none" value={search} onChange={handleSearch} />
    </div>
  );
};

export default Autocomplete;
