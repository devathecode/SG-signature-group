import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

const Header = (props: any) => {
    const commonSpanClass = 'block absolute h-0.5 w-full bg-white transition-all duration-700 ease-in-out';
    const [navbar, setNavbar] = useState(false);
    const [open, setOpen] = useState(false);
    const menuOptions = [
        {
            id: 1,
            title: 'Home',
            url: '/'
        },
        {
            id: 2,
            title: 'Properties',
            url: '/properties'
        },
        {
            id: 3,
            title: 'Projects',
            url: '/projects'
        },
        {
            id: 4,
            title: 'Contact Us',
            url: '/contact-us'
        }
    ];
    const handleHamburgerClick = () => {
        props.handleSubMenuOpen(!open);
        setOpen(!open);
    }

    const closeHamburger = () => {
        setOpen(false);
        props.handleSubMenuOpen(!open);
    }

    //navbar scroll changeBackground function
    const changeBackground = () => {
        if (window.scrollY >= 20) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
    })
    return (
        <nav
            className={`px-2 sm:px-12 2xl:px-40 fixed top-0 left-0 right-0 bottom-auto z-50 ${navbar ? 'bg-[#1a1a1a] py-1 sm:py-2 border-b-2 border-gray-400' : 'py-1 sm:py-3 md:py-4 lg:py-5'}`}>
            <div className="grid grid-cols-12 gap-0 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8">
                <div className="col-span-9 sm:col-span-3 justify-self-start my-auto">
                    <NavLink to="/"
                             className="flex flex-row cursor-pointer justify-center items-center text-white font-mono text-2xl font-bold">
                        <div className="ml-3 font-mono">
                            <span
                                className="italic text-4xl text-yellow-600 tracking-widest">SG</span>
                            <span className="text-sm sm:text-lg md:text-2xl font-semibold tracking-tighter text-black">SignatureGroup</span>
                        </div>
                    </NavLink>
                </div>
                <div className="col-span-3 sm:col-span-9 justify-self-end cursor-pointer block sm:hidden"
                     onClick={handleHamburgerClick}>
                    <div className="w-6 relative mx-auto transition-all duration-700 ease-in-out rotate-0">
                        <div
                            className={`${commonSpanClass} bg-yellow-600 ${open ? 'rotate-[135deg] top-4' : 'rotate-0 top-2'}`}></div>
                        <div className={`${commonSpanClass} bg-yellow-600 ${open ? 'hidden' : 'rotate-0 top-4'}`}></div>
                        <div
                            className={`${commonSpanClass} bg-yellow-600 ${open ? '-rotate-[135deg] top-4' : 'rotate-0 top-6'}`}></div>
                    </div>
                </div>
                <div className="col-span-2 sm:col-span-9 place-self-end cursor-pointer hidden sm:block my-auto">
                    <ul className="flex justify-between space-x-8">
                        {menuOptions.map((data) => {
                            return <NavLink to={data.url} key={data.id}
                                            className={`text-yellow-600 font-semibold uppercase`}>{data.title}</NavLink>
                        })}
                    </ul>
                </div>
            </div>
            <div
                className={`${open ? 'active left-0 block' : '-left-[200%]'} fixed z-50 top-12 w-full transition-all px-2 duration-700 bg-white h-full border-t-2 border-gray-400`}>
                <ul className="grid grid-cols-12 gap-0 sm:gap-5 gap-y-7 place-items-center mt-12">
                    {menuOptions.map((data) => {
                        return <NavLink onClick={closeHamburger} to={data.url} key={data.id}
                                        className={`col-span-12 text-yellow-600 font-semibold uppercase`}>{data.title}</NavLink>
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Header;