import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router";

const BrowsTask = () => {
  const tasks = useLoaderData();

  // const formattedDeadline = ;

  useEffect(() => {
    document.title = `Browse Task | Freeleza`;
    return () => {
      document.title = "Freeleza";
    };
  }, []);

  return (
    <div>
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
            {tasks.map((task, index) => (
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
