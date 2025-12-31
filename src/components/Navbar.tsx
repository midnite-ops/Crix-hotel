import { MenuIcon } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";
import { useState } from "react";
function Navbar() {
  const [active, setActive] = useState("Home");
  function handleClick(value: string) {
    setActive(value);
  }
  const navLinks = ["Home", "Rooms", "Amenities", "Gallery"];
  return (
    <nav className="flex justify-between items-center p-4" id="navbar">
      <div className="flex space-x-5 items-center">
        
        <h1 className="font-medium text-[22px]">Crix Nook</h1>
      </div>
      <SidebarTrigger className="bg-transparent lg:hidden ">
        <MenuIcon className="h-8 w-8" />
      </SidebarTrigger>
      <div className="hidden lg:flex">
        <ul className="flex space-x-10 items-center">
          {navLinks.map((item, index) => (
            <li
              key={index}
              className={`font-alex text-gray-500 hover:cursor-pointer text-[16px] ${
                active === item ? "text-bgColor" : ""
              }`}
              onClick={() => {
                handleClick(item);
              }}
            >
              <a href={`#${item[0].toLowerCase()}${item.slice(1)}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-x-5 items-center hidden lg:flex">
        <button className="btn-primary">Reserve</button>
      </div>
    </nav>
  );
}

export default Navbar;
