import React,{useState} from "react";
import {Link} from 'react-router-dom';

const Menu = () => {
  const [selectedMenu,setSelectedMenu]=useState(0);
  const [isProfileDropdownOpen,setIsProfileDropdownOpen]=useState(false);

  const handleMenuClick=(index)=>{
    setSelectedMenu(index);
  }
  const handleProfileClick = (index) => {
  setIsProfileDropdownOpen(!isProfileDropdownOpen);
};
const menuClass="menu";
const activeMenuClass="menu selected"
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
             <p className={selectedMenu === 0?activeMenuClass : menuClass}>
            <Link style={{textDecoration:"none"}} to={"/"} onClick={()=>handleMenuClick(0)}>Dashboard</Link>
            </p>
          </li>
          <li>
            <p className={selectedMenu === 1?activeMenuClass : menuClass}>
            <Link style={{textDecoration:"none"}} to={"/orders"} onClick={()=>handleMenuClick(1)}>Orders</Link>
            </p>
          </li>
          <li>
            <p className={selectedMenu === 2?activeMenuClass : menuClass}>
            <Link style={{textDecoration:"none"}} to={"/holdings"} onClick={()=>handleMenuClick(2)}>Holdings</Link>
            </p>
          </li>
          <li>
           <p className={selectedMenu === 3?activeMenuClass : menuClass}>
            <Link style={{textDecoration:"none"}} to={"/positions"} onClick={()=>handleMenuClick(3)}>Positions</Link>
            </p>
          </li>
          <li>
            <p className={selectedMenu === 4?activeMenuClass : menuClass}>
            <Link style={{textDecoration:"none"}} to={"/funds"} onClick={()=>handleMenuClick(4)}>Funds</Link>
            </p>
          </li>
          <li>
             <p className={selectedMenu === 5?activeMenuClass : menuClass}>
            <Link style={{textDecoration:"none"}} to={"/apps"} onClick={()=>handleMenuClick(5)}>Apps</Link>
            </p>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
