import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
const Navbar = () => {

    const menuItem = [
        {
            id: 1,
            menu: <Link to="/"> Home </Link>
        },
        {
            id: 2,
            menu: <Link to="/books"> Books </Link>
        },
        {
            id: 3,
            menu: <Link to="/blogs"> Blogs </Link>
        },
        {
            id: 1,
            menu: <Link to="/contact"> Contact </Link>
        },
        {
            id: 1,
            menu: <Link to="/about"> About us </Link>
        },
    ]

    return (
        <Fragment>
            <div className="navbar bg-primary text-white px-12">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary text-white rounded-box w-52">
                            {
                                menuItem?.map((item) => (
                                    <li key={item?.id}> {item?.menu} </li>
                                ))
                            }
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl flex justify-center items-center content-center gap-2">
                        <img src={logo} alt="Logo" />
                        <h1> Book Sharing </h1>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex text-lg font-bold">
                    <ul className="menu menu-horizontal px-1">
                        {
                            menuItem?.map((item) => (
                                <li key={item?.id}> {item?.menu} </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className='text-lg font-bold '> Login </Link>
                </div>
            </div>
        </Fragment>
    );
};

export default Navbar;