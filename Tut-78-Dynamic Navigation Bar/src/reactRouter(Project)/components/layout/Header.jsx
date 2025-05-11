import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="bg-black text-white w-full shadow-lg">
            {/* Top Bar */}
            <section className="flex items-center justify-between px-6 py-3 border-b border-gray-800">
                <div className="text-xl font-semibold tracking-wide">
                    Reason E-Commerce Website
                </div>

                <div className="flex items-center space-x-6">
                    <NavLink to="SignIn" className="hover:text-orange-500 transition">SIGN IN</NavLink>
                    <NavLink to="SingUp" className="hover:text-orange-500 transition">SIGN UP</NavLink>
                </div>
            </section>

            {/* Main Nav */}
            <div className="flex items-center justify-between px-6 py-4">
                <div className="text-2xl font-bold text-white tracking-wide">
                    <NavLink to="index">ReasonFlix</NavLink>
                </div>

                <nav>
                    <ul className="flex space-x-8 text-lg">
                        <li>
                            <NavLink to="/" className="hover:text-orange-500 transition">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="movie" className="hover:text-orange-500 transition">Movie</NavLink>
                        </li>
                        <li>
                            <NavLink to="contact" className="hover:text-orange-500 transition">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="about" className="hover:text-orange-500 transition">About</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
