import React, { useContext, useState,useEffect } from "react";
import { NewsContext } from "../../contexts/NewsContext";
import Logo from "../assets/logo.svg";

function Navbar() {
  const { setSearchQuery,searchQuery } = useContext(NewsContext);
  const [searchQueryValue, setSearchQueryValue] = useState("");

  const handleSearch = (e) => {
    setSearchQueryValue(e.target.value);
  };
  useEffect(() => {
    setSearchQueryValue(searchQuery);
  }, [searchQuery]);
  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#09357B] p-2">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a
          href="/"
          className="pl-24 text-xl font-bold cursor-pointer text-white transition-all duration-500 hover:text-blue-500"
        >
         <img
          src={Logo}
          alt={"logo"}
          className="w-full w-28 object-cover object-center bg-transparent"
        />
        </a>
      </div>
      <form className="w-full max-w-sm p-2 pr-28">
        <div className="flex items-center border-b-2 border-blue-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-1 leading-tight focus:outline-none"
            type="text"
            placeholder="Search"
            value={searchQueryValue}
            onChange={handleSearch}
            onBlur={() => setSearchQuery(searchQueryValue)}
          />
        </div>
      </form>
    </nav>
  );
}

export default Navbar;
