import React from 'react';
import { Link } from 'react-router-dom';
import { FaFontAwesome, FaGlide,} from "react-icons/fa";

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <Link to='/' className="btn btn-ghost normal-case text-xl"><FaFontAwesome icon={FaGlide}></FaFontAwesome>GenOX</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>               
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/signIn'>SignIn</Link></li>
                    <li><Link to='/signUp'>SignUp</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn">Get started</Link>
            </div>
        </div>
    );
};

export default Header;