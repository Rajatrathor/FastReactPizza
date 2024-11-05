import React from "react";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex items-center justify-around border-b border-stone-200 bg-yellow-400 uppercase px-4 py-3 sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
