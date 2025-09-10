import React, { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#1E1E1E] fixed w-full z-10 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <span className="text-white text-xl font-bold">HazardApp</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <a href="#" className="text-white hover:text-gray-300">Home</a>
                        <a href="#" className="text-white hover:text-gray-300">Report Hazard</a>
                        <a href="#" className="text-white hover:text-gray-300">Live Map</a>
                        <a href="#" className="text-white hover:text-gray-300">Analytics</a>
                        <a href="#" className="text-white hover:text-gray-300">About</a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none"
                        >
                            {isOpen ? "Close" : "Menu"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#1E1E1E]">
                    <a href="#" className="block px-4 py-2 text-white hover:bg-gray-800">Home</a>
                    <a href="#" className="block px-4 py-2 text-white hover:bg-gray-800">Report Hazard</a>
                    <a href="#" className="block px-4 py-2 text-white hover:bg-gray-800">Live Map</a>
                    <a href="#" className="block px-4 py-2 text-white hover:bg-gray-800">Analytics</a>
                    <a href="#" className="block px-4 py-2 text-white hover:bg-gray-800">About</a>
                </div>
            )}
        </nav>
    );
}