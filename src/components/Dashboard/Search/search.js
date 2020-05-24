import React from "react";
import SearchIcon from '../../../assets/search.png';
import "./search.css";

const Search = ({ onChange }) => {
  return (
    <div className="search">
      <img src={SearchIcon} alt="search" />
      <input onChange={onChange} className="search--input" placeholder="Search 'India'" />
    </div>
  );
};

export default Search;
