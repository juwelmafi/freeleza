import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthPrivider";
import { NavLink, useNavigate } from "react-router";
import {
  FaTachometerAlt,
  FaUser,
  FaTasks,
  FaFont,
  FaIcons,
  FaMap,
  FaBell,
  FaSyncAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const DashNav = ({ isSidebarOpen, setSidebarOpen }) => {
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
  return (
    <aside
      className={`w-64 min-h-screen bg-white text-black lg:text-base lg:bg-transparent shadow-xl border-r border-gray-100 p-5 fixed z-50 top-0 left-0 h-full transition-transform duration-300
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
    >
      <div className="flex items-center">
        <h2 className="text-lg font-bold  mb-6">DASHBOARD</h2>
        <button
          className="lg:hidden mt-1  text-xl absolute top-4 right-4"
          onClick={() => setSidebarOpen(false)}
        >
          ✕
        </button>
      </div>
      <nav className="space-y-3">
        <NavLink
          className="block text-purple-600 font-semibold"
          to="/dashboard"
        >
          📊 Dashboard
        </NavLink>
        <NavLink className="block  hover:text-purple-600" to="/">
          🏠 Home
        </NavLink>
        <NavLink
          className="block  hover:text-purple-600"
          to="/add-task"
        >
          🆕 Add Task
        </NavLink>
        <NavLink
          className="block  hover:text-purple-600"
          to="/my-posted-task"
        >
          📤 My Posted Task
        </NavLink>

        <button onClick={handleLogOut} className="block cursor-pointer text-red-600 font-semibold" to="/logout">
          🚪 Logout
        </button>
      </nav>
    </aside>
  );
};

export default DashNav;
