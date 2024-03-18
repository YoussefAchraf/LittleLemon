import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./assets/logo.png";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [menuIcon, setMenuIcon] = useState("menu");
  const location = useLocation();

  const toggleNav = () => {
    setOpenNav(!openNav);
    setMenuIcon(openNav ? "menu" : "close");
    if (!openNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setOpenNav(false);
      document.body.style.overflow = "auto";
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeNav = () => {
    setOpenNav(false);
    setMenuIcon(openNav ? "menu" : "close");
    document.body.style.overflow = "auto";
  };

  return window.innerWidth <= 500 ? (
    <header className="w-full h-auto flex flex-col fixed top-0 left-0 bg-[white]">
      <div className="w-full h-[10dvh] flex items-center justify-between px-[5dvw]">
        <div className="logo">
          <img src={logo} width="190px" height="45px" alt="little lemon logo" />
        </div>
        <div className="w-[45px] h-[45px] bg-[#495e57] text-center rounded-[10px]" 
             onClick={toggleNav}
        >
          <span className="material-symbols-outlined text-[white] leading-[45px]">{menuIcon}</span>
        </div>
      </div>
      <nav className="w-[100dvw] h-[90dvh] bg-[#495e57] text-center hidden py-[15dvh]"
           style={{ display: openNav ? "block" : "none" }}
      >
        <Link to="/" className={`block h-[10dvh] w-[80dvw] leading-[10dvh] no-underline mx-auto my-0 hover:bg-[white] hover:text-[#495e57] hover:rounded-[20px] ${location.pathname === '/' ? 'bg-[white] text-[#495e57] rounded-[20px]' : ' text-[white]'}`} onClick={closeNav}>Home</Link>
        <Link to="/about" className={`block h-[10dvh] w-[80dvw] leading-[10dvh] no-underline mx-auto my-0 hover:bg-[white] hover:text-[#495e57] hover:rounded-[20px] ${location.pathname === '/about' ? 'bg-[white] text-[#495e57] rounded-[20px]' : ' text-[white]'}`} onClick={closeNav}>About</Link>
        <Link to="/menu" className={`block h-[10dvh] w-[80dvw] leading-[10dvh] no-underline mx-auto my-0 hover:bg-[white] hover:text-[#495e57] hover:rounded-[20px] ${location.pathname === '/menu' ? 'bg-[white] text-[#495e57] rounded-[20px]' : ' text-[white]'}`} onClick={closeNav}>Menu</Link>
        <Link to="/reservations" className={`block h-[10dvh] w-[80dvw] leading-[10dvh] no-underline mx-auto my-0 hover:bg-[white] hover:text-[#495e57] hover:rounded-[20px] ${location.pathname === '/reservations' ? 'bg-[white] text-[#495e57] rounded-[20px]' : ' text-[white]'}`} onClick={closeNav}>Reservations</Link>
        <Link to="/orders" className={`block h-[10dvh] w-[80dvw] leading-[10dvh] no-underline mx-auto my-0 hover:bg-[white] hover:text-[#495e57] hover:rounded-[20px] ${location.pathname === '/orders' ? 'bg-[white] text-[#495e57] rounded-[20px]' : ' text-[white]'}`} onClick={closeNav}>Orders</Link>
        <Link to="/identification" className={`block h-[10dvh] w-[80dvw] leading-[10dvh] no-underline mx-auto my-0 hover:bg-[white] hover:text-[#495e57] hover:rounded-[20px] ${location.pathname === '/identification' ? 'bg-[white] text-[#495e57] rounded-[20px]' : ' text-[white]'}`} onClick={closeNav}>Identification</Link>
      </nav>
    </header>
  ) : (
    <header className="w-[100dvw] h-[15dvh] flex items-center justify-around fixed top-0 left-0 bg-[white]">
      <div className="logo"> 
        <img src={logo} width="190px" height="45px" alt="little lemon logo" />
      </div>
      <nav>
        <Link to="/" className={`px-[1dvw] font-bold  ${location.pathname === '/' ? 'text-[#F4CE15]' : 'text-[#495e57]'}`}> Home</Link>
        <Link to="/about" className={`px-[1dvw] font-bold  ${location.pathname === '/about' ? 'text-[#F4CE15]' : 'text-[#495e57]'}`}>About</Link>
        <Link to="/menu" className={`px-[1dvw] font-bold  ${location.pathname === '/menu' ? 'text-[#F4CE15]' : 'text-[#495e57]'}`}>Menu</Link>
        <Link to="/reservations" className={`px-[1dvw] font-bold  ${location.pathname === '/reservations' ? 'text-[#F4CE15]' : 'text-[#495e57]'}`}>Reservations</Link>
        <Link to="/orders" className={`px-[1dvw] font-bold  ${location.pathname === '/orders' ? 'text-[#F4CE15]' : 'text-[#495e57]'}`}>Orders</Link>
        <Link to="/identification" className={`px-[1dvw] font-bold  ${location.pathname === '/identification' ? 'text-[#F4CE15]' : 'text-[#495e57]'}`}>Identification</Link>
      </nav>
    </header>
  );
};

export default Header;
