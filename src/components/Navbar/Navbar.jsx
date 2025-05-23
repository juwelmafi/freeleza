import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import "./active.css";
import { AuthContext } from "../../providers/AuthPrivider";
import { Popover } from "@headlessui/react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will miss some feature",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOutUser()
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            console.log(error.code);
          });
        toast.success("Logged out successfully!");
      }
    });
  };
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/browse-task"}>Browse Task</NavLink>
      </li>
      <li>
        <NavLink to={"/add-task"}>Add Task</NavLink>
      </li>
      <li>
        <NavLink to={"/my-posted-task"}>My Posted Task</NavLink>
      </li>
    </>
  );

  // Theme Toggle //

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Get saved theme or default to light
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="w-full bg-base-100 shadow-sm">
      <div className="navbar  max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"}>
            <img
              className="w-38"
              src={
                theme === "light"
                  ? "https://i.ibb.co/RkzD2vMP/1000338150.png"
                  : "https://i.ibb.co/gMRHCynm/1747924964354.png"
              }
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{links}</ul>
        </div>

        <div className="navbar-end gap-2 pr-3">
          <label className="swap swap-rotate cursor-pointer">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
              onChange={toggleTheme}
              checked={theme === "dark"}
            />

            {/* sun icon */}
            <svg
              className="swap-off h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {user ? (
            <Popover className="relative">
              <Popover.Button>
                <img
                  src={user?.photoURL}
                  className="w-10 h-10 rounded-full object-cover cursor-pointer"
                />
              </Popover.Button>

              <Popover.Panel className="absolute z-10 mt-1 -ml-36 w-48 bg-base-100 border border-gray-300 rounded shadow p-4">
                <p
                  className="font-semibold text-xs md:text-sm bg-green-100  text-green-500 px-2 py-1 rounded-2xl text-center cursor-default"
                  data-tooltip-id="user-tooltip"
                  data-tooltip-content={user?.email}
                >
                  {user?.displayName}
                </p>
                <Tooltip id="user-tooltip" place="left" />
                <button
                  onClick={handleLogOut}
                  className=" btn btn-sm w-full mt-2 bg-[#04284B] text-white px-3 py-1 rounded"
                >
                  Logout
                </button>
              </Popover.Panel>
            </Popover>
          ) : (
            <div className="flex gap-2">
              <Link to={"/login"}>
                <button className="btn btn-sm lg:btn-md lg:p-4 lg:text-sm text-[10px] p-[8px] border border-gray-500  bg-[#04284B] text-white hover:bg-[#222e39]">
                  Log in
                </button>
              </Link>
              <Link to={"/signup"}>
                <button className="btn btn-sm lg:btn-md lg:p-4 lg:text-sm text-[10px] p-[8px] border border-gray-500 bg-[#04284B] text-white hover:bg-[#222e39]">
                  Sign up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
