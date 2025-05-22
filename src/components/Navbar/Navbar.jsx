import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import "./active.css";
import { AuthContext } from "../../providers/AuthPrivider";
import { Popover } from "@headlessui/react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

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
              className="menu menu-md text-[#04284B] dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"}>
            <img
              className="w-38"
              src={"https://i.ibb.co/RkzD2vMP/1000338150.png"}
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{links}</ul>
        </div>

        <div className="navbar-end gap-2 pr-3">
          {user ? (
            <Popover className="relative">
              <Popover.Button>
                <img
                  src={user?.photoURL}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </Popover.Button>

              <Popover.Panel className="absolute z-10 mt-1 -ml-36 w-48 bg-base-100 border border-gray-300 rounded shadow p-4">
                <p className="font-semibold">{user?.displayName}</p>
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
                <button className="btn btn-sm lg:btn-md lg:p-4 lg:text-sm text-[10px] p-[8px]  bg-[#04284B] text-white hover:bg-[#222e39]">
                  Log in
                </button>
              </Link>
              <Link to={"/signup"}>
                <button className="btn btn-sm lg:btn-md lg:p-4 lg:text-sm text-[10px] p-[8px] bg-[#04284B] text-white hover:bg-[#222e39]">
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
