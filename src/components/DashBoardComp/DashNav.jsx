import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthPrivider";
import { NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const DashNav = ({ isSidebarOpen, setSidebarOpen }) => {
  const { logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

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
  return (
    <aside
      className={`w-64 min-h-screen bg-white text-black lg:text-gray-400 lg:bg-transparent shadow-xl border-r border-gray-100 p-5 fixed z-50 top-0 left-0 h-full transition-transform duration-300
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
    >
      <div className="flex items-center">
        
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-bold  mb-6">DASHBOARD</h2>
          <label className="swap swap-rotate cursor-pointer mb-6">
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
        </div>
        <button
          className="lg:hidden mt-1  text-xl absolute top-4 right-4"
          onClick={() => setSidebarOpen(false)}
        >
          ✕
        </button>
      </div>
      <nav className="space-y-3">
        <NavLink
          className="block hover:text-purple-600 font-semibold"
          to="/dashboard"
        >
          📊 Dashboard
        </NavLink>
        <NavLink className="block  hover:text-purple-600" to="/">
          🏠 Home
        </NavLink>
        <NavLink className="block  hover:text-purple-600" to="/add-task">
          🆕 Add Task
        </NavLink>
        <NavLink className="block  hover:text-purple-600" to="/my-posted-task">
          📤 My Posted Task
        </NavLink>

        <button
          onClick={handleLogOut}
          className="block cursor-pointer text-red-600 font-semibold"
          to="/logout"
        >
          🚪 Logout
        </button>
      </nav>
    </aside>
  );
};

export default DashNav;
