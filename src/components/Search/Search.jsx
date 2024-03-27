import { useState } from "react";

function SearchCategories({ searchValue }) {
  const [value, setValue] = useState("");

  // input
  const handleChange = (e) => setValue(e.target.value);

  // clear input
  const handleClear = (e) => {
    searchValue(value);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleClear();
    }
  };
  return (
    <div className="header-wrap">
      <div className="header-wrap-search">
        <input
          placeholder=" Search"
          className="home-input"
          value={value}
          onKeyDown={handleKey}
          onChange={handleChange}
        />
        <button className="home-btn" onClick={handleClear}>
          Enter
        </button>
      </div>
    </div>
  );
}
export default SearchCategories;
