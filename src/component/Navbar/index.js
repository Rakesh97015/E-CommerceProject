
import React, { useContext, useState } from 'react';
import './index.css'
import { assets } from '../../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../../context/Shopcontext';

const ProfileDropdown = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  return (
    <div className="position-relative">
      <img
        src={assets.profile_icon}
        onClick={toggleDropdown}
        style={{
          width: "23px",
          height: "23px",
          cursor: "pointer",
          borderRadius: "50%",
        }}
        className="w-4 cursor-pointer gap-1 hover:shadow-lg hover:scale-105"
        alt="Profile Icon"
      />
      {isDropdownVisible && (
        <div className="position-absolute bg-white border border-dark p-2 mt-2">
          <p className="cursor-pointer hover:text-black">My Profile</p>
          <p className="cursor-pointer hover:text-black">Orders</p>
          <p className="cursor-pointer hover:text-black">Logout</p>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {setShowSearch,getCartCount}=useContext(ShopContext);

  return (
    <div>
      {!visible && (
        <div className="d-flex justify-content-between p-5 font-medium  nav-component">
         <Link to='/'>  <img src={assets.logo} className="w-20" alt="Logo" /></Link>

          <ul className="d-none d-md-flex gap-5 text-sm text-gray-700 ml-auto">
              <div className="d-flex justify-content-between font-medium gap-2">
                 <NavLink to="/" className="flex flex-col items-center gap-1 text-decoration-none">
                  <p>HOME</p>
                </NavLink>
                <NavLink to="/collection" className="flex flex-col items-center gap-1 text-decoration-none">
                 <p>COLLECTION</p>
                </NavLink>
               <NavLink to="/about" className="flex flex-col items-center gap-1 text-decoration-none">
                  <p>ABOUT</p>
               </NavLink>
               <NavLink to="/contact" className="flex flex-col items-center gap-1 text-decoration-none">
                 <p>CONTACT</p>
               </NavLink>
            </div>
          </ul>

          <div className="d-flex justify-content-between align-items-center gap-3" style={{ height: "60px" }}>
            <img
            onClick={()=>{setShowSearch(true)}}
              src={assets.search_icon}
              style={{ width: "25px", height: "25px", cursor: "pointer" }}
              className="w-4 cursor-pointer gap-1"
              alt="Search Icon"
            />

            <ProfileDropdown />

            <Link to="/cart" className="d-flex position-relative ms-3 d-inline-block gap-3">
              <img
                src={assets.cart_icon}
                style={{ width: "25px", height: "25px", cursor: "pointer", borderRadius: "50%" }}
                className="cursor-pointer img-fluid gap-3"
                alt="Cart"
              />
              <span className="position-absolute bottom-0 start-100 translate-middle-x badge rounded-pill bg-black text-white px-1 py-1">
                {getCartCount()}
              </span>
            </Link>

            <img
              onClick={() => setVisible(true)}
              src={assets.menu_icon}
              style={{ width: "23px", height: "23px", cursor: "pointer" }}
              className="w-4 cursor-pointer d-lg-none d-md-none"
              alt="Menu Icon"
            />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {visible && (
        <div className="absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all w-full">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 ">
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back" />
            <p>Back</p>
          </div >
       <div className="flex ">

         <NavLink  onClick={()=>{setVisible(false)}} className="py-2 pl-6 border" to="/">HOME</NavLink>
          <NavLink  onClick={()=>{setVisible(false)}}className="py-2 pl-6 border" to="/collection"> COLLECTION </NavLink>
          <NavLink onClick={()=>{setVisible(false)}} className="py-2 pl-6 border" to="/about"> ABOUT</NavLink>
          <NavLink  onClick={()=>{setVisible(false)}} className="py-2 pl-6 border" to="/contact"> CONTACT</NavLink>
        </div>
         
        </div>
      )}
    </div>
  );
};

export default Navbar;


