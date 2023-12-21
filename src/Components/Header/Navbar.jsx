import React from 'react';
import { NavLink } from 'react-router-dom';
import useUserInfo from '../../Hooks/useUserInfo/useUserInfo';
import Swal from 'sweetalert2';

const Navbar = () => {
      const { user, userLogout } = useUserInfo()


      const menuItems = <>
            <li>
                  <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                              isPending ? "" : isActive ? "text-green-600" : ""
                        }
                  >
                        Home
                  </NavLink>
            </li>
            {user && <li>
                  <NavLink
                        to="/dashboard/todo-list"
                        className={({ isActive, isPending }) =>
                              isPending ? "pending" : isActive ? "text-green-600" : ""
                        }
                  >
                        Dashboard
                  </NavLink>
            </li>}


            {!user && <>


                  <li>
                        <NavLink
                              to="/login"
                              className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-green-600" : ""
                              }
                        >
                              Login
                        </NavLink>
                  </li>
                  <li>
                        <NavLink
                              to="/register"
                              className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-green-600" : ""
                              }
                        >
                              Register
                        </NavLink>
                  </li>

            </>}

      </>

      //logut User
      const handleLogout = () => {
            userLogout()
                  .then(res => {
                        Swal.fire({
                              icon: "error",
                              title: "Logged Out...",
                        });
                  })
      }
      return (
            <div className="navbar bg-base-100 py-6 shadow w-full px-4">
                  <div className="navbar-start">
                        <div className="dropdown">
                              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </div>
                              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    {menuItems}
                              </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">Task Management</a>
                  </div>
                  <div className="navbar-center hidden lg:flex">
                        <ul className="flex gap-4 menu-horizontal px-1">
                              {menuItems}
                        </ul>
                  </div>
                  <div className="navbar-end">
                        {user ? <button onClick={handleLogout}>Logout</button> : <a className="btn btn-sm md:btn-md">Login</a>}
                  </div>
            </div>
      );
};

export default Navbar;