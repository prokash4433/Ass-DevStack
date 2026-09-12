import React, { useState } from "react";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="border-b border-gray-100">

            <nav className="py-3 sm:py-4 md:py-5 lg:py-4">

                <div className="container mx-auto px-3 sm:px-6 md:px-8 lg:px-10">

                    {/* ====== NAVBAR ======= */}
                    <div className="flex items-center justify-between">

                        
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-gray-500 text-xl md:hidden cursor-pointer"
                        >
                            ☰
                        </button>


                        {/* Logo */}
                        <img src={Logo} alt="Logo" className="w-[85px] sm:w-[110px] md:w-[125px]lg:w-[147px] h-auto"/>


                        {/* ================= DESKTOP MENU ================= */}
                        <ul className="hidden md:flex items-center gap-3 lg:gap-5 text-xs md:text-sm lg:text-base">
                            <li className="cursor-pointer hover:text-purple-600 transition text-orange-500">
                                Home
                            </li>

                            <li className="cursor-pointer hover:text-[#FF5722] transition text-blue-500">
                                Technologies
                            </li>

                            <li className="cursor-pointer hover:text-[#00C8B3] transition text-fuchsia-600">
                                Projects
                            </li>

                            <li className="cursor-pointer hover:text-[#D81B7E] transition text-green-500">
                                About
                            </li>

                            <li className="cursor-pointer hover:text-[#1BD831] transition text-cyan-500">
                                Contact
                            </li>
                        </ul>


                        {/* ================= BUTTONS ================= */}
                        <div className="flex items-center gap-1 sm:gap-2 md:gap-3">

                            <button
                                className="text-[9px]sm:text-xs md:text-sm lg:text-base text-gray-600 px-1 sm:px-2 md:px-3 cursor-pointer hover:text-purple-600">
                                Sign In
                            </button>

                            <button
                                className="text-[9px] sm:text-xs md:text-sm lg:text-base text-white px-2 sm:px-3 md:px-4 lg:px-5 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 cursor-pointer hover:opacity-90 transition">
                                Sign Up
                            </button>

                        </div>

                    </div>


                    {/* ================= MOBILE MENU ================= */}
                    {menuOpen && (
                        <div className="md:hidden mt-4 border-t border-gray-100 pt-3">

                            <ul className="flex flex-col gap-3 text-sm">

                                <li className="cursor-pointer text-orange-500 hover:text-purple-600 transition">
                                    Home
                                </li>

                                <li className="cursor-pointer text-blue-500 hover:text-[#FF5722] transition">
                                    Technologies
                                </li>

                                <li className="cursor-pointer text-fuchsia-600 hover:text-[#00C8B3] transition">
                                    Projects
                                </li>

                                <li className="cursor-pointer text-green-500 hover:text-[#D81B7E] transition">
                                    About
                                </li>

                                <li className="cursor-pointer text-cyan-500 hover:text-[#1BD831] transition">
                                    Contact
                                </li>

                            </ul>

                        </div>
                    )}

                </div>

            </nav>

        </div>
    );
};

export default Navbar;