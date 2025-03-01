import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/Shopcontext';
import { assets } from '../../assets/assets';
import './index.css';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const[visible,setVisible]=useState(false)
  const location = useLocation()

  useEffect(()=>{
    if(location.pathname.includes('collection')) {
    setVisible(true)
    }else{
      setVisible(false)
    }

  },[location])

  return showSearch && visible ? (
    <div className="search-wrapper">
      <div className="search-container">
        {/* Input Field */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
          placeholder="Search"
        />

        {/* Search Icon */}
        <img src={assets.search_icon} alt="Search" className="search-icon" />
      </div>

      {/* Close (X) Icon - Placed Outside */}
      <img
        src={assets.cross_icon}
        alt="Close"
        className="close-icon-outside"
        onClick={() => setShowSearch(false)}
      />
    </div>
  ) : null;
};

export default SearchBar;
