import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const menuItems = ["Home", "About", "Programs", "Alumni", "Team", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <nav className="navigation flex justify-between pt-5 mx-10 items-center">
        <div className="logo text-white text-xl font-medium md:text-3xl text">
          <a href="#home">Better Tomorrow</a>
        </div>

        {/* Hamburger menu for small screens */}
        <div className="menu md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <X /> : <Menu />}
        </div>

        {/* Menu Links */}
        <div className={`links ${isOpen ? "block" : "hidden"} md:block`}>
          <ul className="list-div flex flex-col md:flex-row gap-4 text-sm md:text-lg mt-4 md:mt-0 cursor-pointer">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`nav-link ${active === item ? "active" : ""}`}
                  onClick={() => {
                    setActive(item);
                    setIsOpen(false); // close menu on mobile click
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
