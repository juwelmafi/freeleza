import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router";

const BrowsTask = () => {
  const tasks = useLoaderData();
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [filteredTasks, setFilteredTasks] = useState([]);
  // const formattedDeadline = ;

  useEffect(() => {
    document.title = `Browse Task | Freeleza`;
    return () => {
      document.title = "Freeleza";
    };
  }, []);

  useEffect(() => {
    // Shuffle tasks initially
    const shuffled = [...tasks].sort(() => Math.random() - 0.5);
    setFilteredTasks(shuffled);
  }, [tasks]);

  useEffect(() => {
    let updated = [...tasks];

    if (sortBy === "deadline") {
      updated.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    } else {
      updated.sort(() => Math.random() - 0.5); // Shuffle again
    }

    setFilteredTasks(updated);
  }, [sortBy, tasks]);

  return (
    <div className="max-w-7xl mx-auto mt-[67px]">
      <div className="flex px-5 md:px-0 flex-col mt-20 md:flex-row justify-between mb-4 gap-2">
        <input
          type="text"
          placeholder="🔍 Search by category"
          className="input input-bordered input-sm w-full max-w-xs"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <select
          className="select select-bordered select-sm max-w-xs"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">Default (Random)</option>
          <option value="deadline">Sort by Deadline</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="table my-10">
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Posted By</th>
              <th>Posted Task</th>
              <th>Budget</th>
              <th>More Info</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks
              .filter((task) =>
                task?.category?.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((task, index) => (
                <tr key={task?._id}>
                  <td>
                    <p className="font-bold text-xs md:text-sm">{index + 1}</p>
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={task?.userPhoto}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-xs md:text-sm">
                          {task?.userName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="font-semibold text-xs md:text-sm">
                      {task?.taskName}
                    </p>
                  </td>
                  <td>
                    <span className="font-semibold text-xs md:text-sm">
                      Budget: ${task?.budget}
                    </span>
                  </td>
                  <td className="space-x-2">
                    <Link to={`/browse-tasks/${task?._id}`}>
                      <button className="btn btn-sm bg-[#04284B] border border-gray-500 shadow-none text-[10px] md:text-xs text-white hover:bg-[#222e39]">
                        Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowsTask;
