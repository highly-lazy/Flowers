import { NavLink } from "react-router-dom";
import location from "../../assets/icons/location.svg";
import search from "../../assets/icons/icon.svg";
import korzinka from "../../assets/icons/korzinka.svg";
import './style.scss'
function Header() {
  return (
    <header>
      <div className="head">
        <div className="container">
          <div className="flex justify-between items-center p-[20px]">
            <div className="flex items-center gap-2">
              <img
                src={location}
                alt="logo"
                className="cursor-pointer hover:scale-150 "
              />
              <p className="hover:text-gray-600 active:underline cursor-pointer hover:scale-110">
                Madagascar
              </p>
            </div>

            <div className="flex items-center gap-5 ">
              <img src={search} alt="search" className="hover:scale-110" />
              <img src={korzinka} alt="korzinka" className="hover:scale-110" />
            </div>
          </div>

          <nav className="flex justify-center p-[20px] items-center gap-x-[60px] ">
            <NavLink
              to="/flowers"
              className="text-base font-normal border-solid rounded-md border-2 p-[5px] border-gray-500  hover:text-gray-600 hover:scale-110 active:underline "
            >
              Flowers
            </NavLink>
            <NavLink
              to="Plants"
              className="text-base font-normal border-solid rounded-md border-2 p-[5px] border-gray-500  hover:text-gray-600 hover:scale-110 active:underline "
            >
              Plants
            </NavLink>
            <NavLink
              to="/gifts"
              className="text-base font-normal border-solid rounded-md border-2 p-[5px] border-gray-500  hover:text-gray-600 hover:scale-110 active:underline "
            >
              Gifts
            </NavLink>
            <NavLink
              to="/discount"
              className="text-base font-normal border-solid rounded-md border-2 p-[5px] border-gray-500  hover:text-gray-600 hover:scale-110 active:underline "
            >
              Discounts
            </NavLink>
            <NavLink
              to="/about"
              className="text-base font-normal border-solid rounded-md border-2 p-[5px] border-gray-500  hover:text-gray-600 hover:scale-110 active:underline "
            >
              About us
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
