import React, { useEffect, useRef, useState } from 'react'
import "./Header.scss"
import neysanLogo from "../../assets/image/Neysanlogo.png";
import SearchIcon from "../../assets/icons/SearchIcon";
import MenuIcon from "../../assets/icons/MenuIcon";
import { Link,NavLink } from 'react-router-dom';
import CloseIcon from '../../assets/icons/CloseIcon';
// import ArrowBottomIcon from '../../assets/icons/ArrowBottomIcon';
const Header = () => {
  const [navActive,setnavActive] = useState(false)
  const [mobiLListActive,setmobilListActive] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolledFar, setIsScrolledFar] = useState(false);
;
const openActiveList = ()=>{
  setmobilListActive(!mobiLListActive)
}

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (scrollTop > 100) {
        setIsScrolledFar(true);
      } else {
        setIsScrolledFar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
    
    
  <header className={`desktopNavbar ${isScrolledFar ? "navbaractive" : ""}`}
        style={{
          transform: isScrolled && !isScrolledFar ? "translateY(-200px)" : "translateY(0px)",
        }}>
    <div className="container">
        <div className="row justify-content-around">
            <div className="col-3">
            <NavLink to="/" >
            <div className="logo">
                <img src={neysanLogo} alt="" />
              </div>
            </NavLink>
              
            </div>
            <div className="col-9">
              <div className="nav_items justify-content-around row align-items-center">
             
                <ul className='nav_links'>
                <li>
                <NavLink
              to="/our-company"
              style={({ isActive }) => ({
                color: isActive ? "#FFB212" : "#777777"
              })}
            >
              Our Company
            </NavLink></li>
                <li>
                <NavLink
              to="/product"
              style={({ isActive }) => ({
                color: isActive ? "#FFB212" : "#777777"
              })}
            >
              Products
            </NavLink></li>
                <li>
                <a >Media</a>
                <ul className='hoverList'>
                  <li>
                    <NavLink to="/photos">Photo</NavLink>
                  </li>
                  <li>
                    <NavLink to="/videos">Video</NavLink>
                  </li>
                </ul>
                </li>
                <li>
                <NavLink
              to="/point-of-sale"
              style={({ isActive }) => ({
                color: isActive ? "#FFB212" : "#777777"
              })}
            >
              Point of sale
            </NavLink></li>
                <li>
                <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#FFB212" : "#777777"
              })}
            >
              Contact
            </NavLink></li>

              
              </ul>
               
                
                  <div className="nav_btns">
                    <div className="search">
                      <input type="text" placeholder='Search...' />
                      <div className="icon">

                      <SearchIcon/>
                      </div>
                    </div>
                    <div className="changeLang">
                      {/* <ArrowBottomIcon/> */}
                      <select  name="language">
                            <option value="az">AZ</option>
                            <option value="en">EN</option>
                            <option value="ru">RU</option>
                        </select>
                    </div>
                  </div>
                
              </div>
            
            </div>
        </div>
    </div>
    
  </header>
  <header className={`mobileNavbar ${isScrolledFar ? "navbaractive" : ""}`}
        style={{
          transform: isScrolled && !isScrolledFar ? "translateY(-200px)" : "translateY(0px)",
        }}
  >
    <div className="container d-flex align-items-center justify-content-around">
      <div className="searchIcon">
        <SearchIcon/>
      </div>
      <div className="mobileLogo">
        <NavLink
        to="/"
        onClick={()=>{setnavActive(false);}}>

        <img src={neysanLogo} alt="" />
        </NavLink>
      </div>
     
        {navActive == true ?  <span 
        onClick={()=>{setnavActive(false);}}
         className="openNavbar"><CloseIcon/></span >: <span onClick={()=>{
        setnavActive(true)
        console.log(navActive);
      }} className="openNavbar"><MenuIcon/></span >}
     
      
    </div>
    <div className={`${navActive==true ? "mobileNavbarItems" :"noneMobileNavbar"}`}>
    <div className="straxberry-slice">
    </div>
    <ul className='nav_links'>
                <li>
                <NavLink
                onClick={()=>{setnavActive(false);}}
              to="/our-company"
              style={({ isActive }) => ({
                color: isActive ? "#FFB212" : "#006633"
              })}
            >
              Our Company
            </NavLink></li>
                <li>
                <NavLink
                onClick={()=>{setnavActive(false);}}
              to="/product"
              style={({ isActive }) => ({
                color: isActive ? "#FFB212" : "#006633"
              })}
            >
              Products
            </NavLink></li>
                <li onClick={ ()=>openActiveList()}>
                <a>Media</a>
                  <ul style={{
                    "--listHeight" : mobiLListActive == true ? "auto" : "0"
                  }} className="activeList">
                    <li>
                      <NavLink>Photos</NavLink>
                    </li>
                    <li>
                      <NavLink>Videos</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                <NavLink
                onClick={()=>{setnavActive(false);}}
              to="/point-of-sale"
              style={({ isActive }) => ({
                color: isActive ? "#FFB212" : "#006633"
              })}
            >
              Point of sale
            </NavLink></li>
                <li>
                <NavLink
                onClick={()=>{setnavActive(false);}}
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#FFB212" : "#006633"
              })}
            >
              Contact
            </NavLink></li>
               
              
              </ul>
  </div>
  </header>
  </>
  )
}

export default Header