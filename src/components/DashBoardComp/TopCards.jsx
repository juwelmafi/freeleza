import React from "react";
import {
  FaDatabase,
  FaDollarSign,
  FaBug,
  FaTwitter,
  FaTasks,
  FaHandshake,
  FaUser,
} from "react-icons/fa";
import { Fa42Group } from "react-icons/fa6";
import { Link } from "react-router";

const TopCards = ({ tasks }) => {
  const uniqueTaskByCat = tasks.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.category === item.category)
  );

  const totalBudget = tasks.reduce((sum, item) => sum + parseInt(item.budget), 0);
  const totalBIds = tasks.reduce((sum, item) => sum + parseInt(item.bids), 0);
  const uniqueEmailCount = new Set(tasks.map(task => task.userEmail)).size;
  console.log(uniqueEmailCount);
  console.log(tasks)


  return (
    <div className="space-y-6 mt-10">
      {/* Top Cards Section */}
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Used Space */}
        <div className=" shadow-lg p-4 border border-gray-200 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="text-orange-500 text-2xl">
              <FaTasks />
            </div>
            <div className="text-right">
              <p className="text-sm ">Total Tasks</p>
              <h3 className="text-lg font-bold">{tasks?.length}</h3>
            </div>
          </div>
          <Link to={"/browse-task"} className="text-xs  text-orange-500 mt-2">
            ⚠ Browse the tasks...
          </Link>
        </div>

        {/* Revenue */}
        <div className=" shadow-lg p-4 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-green-500 text-2xl">
              <Fa42Group />
            </div>
            <div className="text-right">
              <p className="text-sm ">Total Categories</p>
              <h3 className="text-lg font-bold">{uniqueTaskByCat.length}</h3>
            </div>
          </div>
          <Link to={"/"} className="text-xs  mt-2 text-green-500">
            📝 Task by categories...
          </Link>
        </div>

        {/* Fixed Issues */}
        <div className=" shadow-lg p-4 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-red-500 text-2xl">
              <FaDollarSign />
            </div>
            <div className="text-right">
              <p className="text-sm ">Total Amount</p>
              <h3 className="text-lg font-bold">${totalBudget}</h3>
            </div>
          </div>
          <Link to={'/browse-task'} className="text-xs  mt-2 text-red-500">💸 View task budgets...</Link>
        </div>

        {/* Followers */}
        <div className=" shadow-lg p-4 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sky-500 text-2xl">
              <FaHandshake />
            </div>
            <div className="text-right">
              <p className="text-sm ">Total Bids</p>
              <h3 className="text-lg font-bold">+{totalBIds}</h3>
            </div>
          </div>
          <Link to={'/browse-task'} className="text-xs  mt-2 text-sky-500">👉 Bid Now...</Link>
        </div>


        {/* Clients */}
        <div className=" shadow-lg p-4 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-purple-500 text-2xl">
              <FaUser />
            </div>
            <div className="text-right">
              <p className="text-sm ">Total Buyers</p>
              <h3 className="text-lg font-bold">{uniqueEmailCount}</h3>
            </div>
          </div>
          <Link to={"/browse-task"} className="text-xs  mt-2 text-purple-500">🔔 Knock for work...</Link>
        </div>
      </div>
    </div>
  );
};

export default TopCards;
