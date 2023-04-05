import React, { useContext, useState } from "react";
import { NewsContext } from "../../contexts/NewsContext";

function Footer() {
  const { setSearchQuery, searchQuery } = useContext(NewsContext);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex items-center justify-between flex-wrap bg-[#09357B] pt-12 pb-4">
    </div>
  );
}

export default Footer;
