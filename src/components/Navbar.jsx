import React, { useState } from 'react';

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className="text-black py-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo/Brand */}
                <div className="text-black">
                    <a href="#" className="text-xl font-light">Abhishek Panwar</a>
                </div>
                
                {/* Mobile Menu Button */}
                <div className="block lg:hidden">
                    <button onClick={toggleMobileMenu} className="text-black hover:text-gray-300 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <div className={mobileMenuOpen ? "block lg:flex space-x-6 text-black" : "hidden lg:flex space-x-6 text-black"}>
                    <a href="#" className="hover:text-gray-300">About</a>
                    <a href="#" className="hover:text-gray-300">Work</a>
                    <a href="#" className="hover:text-gray-300">Interest</a>
                    <a href="#" className="hover:text-gray-300">Explore</a>
                   
                </div>
                <div>
                <a href="#" className="hover:text-gray-300 hover:bg-black   bg-white text-zinc-500 px-10 py-1 border-2 rounded-full">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
