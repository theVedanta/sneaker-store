import React from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const SubNav = () => {
    const links = ["Men", "Women", "Kids"];

    return (
        <nav className="w-screen z-10 cont absolute flex items-center justify-center top-1/4 left-0 bg-white">
            {links.map((link, i) => (
                <button
                    className="text-xl transition-all hover:font-bold mx-16 py-2 uppercase z-20"
                    key={i}
                >
                    {link}
                </button>
            ))}
        </nav>
    );
};

const Nav = () => {
    const links = ["Products", "Contact", "About"];

    return (
        <nav className="cont z-10 fixed top-0 left-0 pt-20 flex items-center">
            <FaSearch className="mr-10 text-xl cursor-pointer" />
            <div className="links flex items-center">
                {links.map((link, i) => (
                    <>
                        <Link key={i} href={`/${link.toLowerCase()}`}>
                            <a className="link">
                                {link}
                                {i !== links.length - 1 && (
                                    <div className="nav-line absolute right-0 top-1/2 h-2/3 bg-black"></div>
                                )}
                            </a>
                        </Link>
                    </>
                ))}
            </div>
        </nav>
    );
};

export { Nav, SubNav };
