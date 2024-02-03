import React from "react";
import { Link } from "react-router-dom";
import cartSVG from "../assets/cart.svg";

const Header = () => {
  return (
    <div className="h-20">
      <div className=" h-10 bg-[#2E524A]">
        <h1 className="text-center py-2 text-white">
          Free shipping on orders above ₹349
        </h1>

        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-semibold italic px-4">
              <a href="/">Planto</a>
            </h1>
          </div>
          <ul className="w-1/2 flex justify-evenly">
            <li className="flex items-center">
              <Link to="/">Home</Link>
            </li>
            <li className="flex items-center">
              <Link to="/about">About</Link>
            </li>
            <li className="flex items-center">
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/cart" className="flex items-center">
                Cart
                <img className="h-10" src={cartSVG} alt="cartsvg" />
                <div className="h-4 w-4 rounded-xl -mx-4 -mt-4 bg-black text-white">
                  <h1 className="-mt-[5px] mx-[3px]">1</h1>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
