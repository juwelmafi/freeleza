import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import DashNav from "../components/DashBoardComp/DashNav";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
const DashBoard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
      document.title = `Dashboard | Freeleza`;
      return () => {
        document.title = "Freeleza";
      };
    }, []);

  return (
    <div className="">
      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className={`${isSidebarOpen ? "block" : "hidden"} lg:block`}>
          <DashNav
            isSidebarOpen={isSidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        </div>

        {/* Main Content */}
        <div className="w-full  min-h-screen lg:ml-64 p-4 relative">
          {/* Toggle Button */}
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="lg:hidden text-2xl mb-4"
          >
            <FaBars />
          </button>

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
