import React from "react";
import "../Components/SearchBar.css"; 
import map from '../Components/Images/map.png';
import search from '../Components/Images/search.png';

const SearchBar = () => {
    return (
        <div className="searchbar">
           
            <img src={map} alt="location" className="location"/>
            <img src={search} alt="search" className="search"/>
            <input type="text" value="" className="inputlocation"/>
           
        </div>
    )
}

export default SearchBar;