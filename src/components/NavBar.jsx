import { Link, useLocation } from 'react-router-dom';
import DropDownMenu from './DropDownMenu';
import { useState } from "react";
import Logo from '../images/logo.svg';
import { useSelector } from "react-redux";

const NavBar = () => {
  const [dropDownMenu, setDropDownMenu] = useState(false);

  const { user, token } = useSelector((state) => state.auth);
  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/sign-up' || location.pathname === '/complete-register';

  if (hideNavbar) {
    return null; // Return null to hide the navbar
  }

  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link to="/">
              <img
                className="w-auto h-6 sm:h-7"
                src={Logo}
                alt=""
              />
            </Link>

            <div className="flex lg:hidden">
              <button
                x-cloak
                type="button"
                className="text-gray-500  hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
              >
                <svg
                  x-show="!isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>

                <svg
                  x-show="isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/" className={`cursor-pointer ${location.pathname === '/' ? 'font-semibold  text-secondary' : 'text-gray-500'}`}>Home</Link>
            <Link to="/our-app" className={`cursor-pointer ${location.pathname === '/our-app' ? 'font-semibold  text-secondary' : 'text-gray-500'}`}>Our App</Link>
          </div>

          <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
            <div className="flex items-center mt-4 lg:mt-0">
              <button
                className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block hover:text-gray-700 focus:text-gray-700 focus:outline-none"
                aria-label="show notifications"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              {token ?
                <div>
                  <div
                    type="button"
                    className="flex items-center focus:outline-none"
                    aria-label="toggle profile dropdown"
                  >
                    <div className="cursor-pointer w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full" onClick={() => setDropDownMenu((prev) => !prev)}>
                      <img
                        src={user.image}
                        className="object-cover w-full h-full"
                        alt="avatar"
                      />
                    </div>

                    <h3 className="mx-2 text-gray-700 lg:hidden">{user.user_name}</h3>
                  </div>
                  {dropDownMenu && <DropDownMenu />}
                </div>
                :
                <Link to="/login" className="mx-2 text-white bg-secondary py-2 px-4 rounded-md">Login</Link>
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
