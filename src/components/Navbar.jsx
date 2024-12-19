import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [ muneOpen, setMuneOpen ] = useState(false);
  const navItems = [
    { label: "Features", href: "#" },
    { label: "Workflow", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Testimonials", href: "#" },
  ];
  const toggleMune = () => {
    setMuneOpen(!muneOpen);
  };
  return (
    <>
      <div className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container py-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="w-10 h-10 mr-2" src={logo} alt="" />
              <span className="text-xl tracking-tight">VirtualR</span>
            </div>
            <ul className="hidden lg:flex ml-4 space-x-12 text-white">
              {navItems.map((items, index) => (
                <li key={index}>
                  <a href={items.href}>{items.label}</a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items center">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sing in
              </a>
              <a
                href="#"
                className="py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md"
              >
                Create account
              </a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button className="cursor-pointer" onClick={toggleMune}>
                {muneOpen ? "X" : "mune"}
              </button>
            </div>
          </div>
          {muneOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {
                  navItems.map((items,index)=>(
                   <li key={index} className="py-4 text-lg">
                    <a href={items.href}>{items.label}</a>
                   </li>
                  ))
                }
              </ul>
              <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sing in
              </a>
              <a
                href="#"
                className="py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md"
              >
                Create account
              </a>
            </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
