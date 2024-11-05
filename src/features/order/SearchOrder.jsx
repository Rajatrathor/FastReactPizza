import { useState } from "react";
import { useNavigate } from "react-router";

const SearchOrder = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="search order #"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="rounded-full px-4 py-2 text-sm bg-yellow-100 placeholder:text-stone-400 sm:w-64 sm:focus:w-72 transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2"
        />
      </div>
    </form>
  );
};

export default SearchOrder;
