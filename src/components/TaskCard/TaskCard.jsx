import React from "react";
import { formatDate } from "../FormateDate";
import { Link } from "react-router";
import { Fade } from "react-awesome-reveal";

const TaskCard = ({ task }) => {
  const { taskName, budget, deadline, _id } = task;

  return (
    <div>
      <Fade>
        <div className="max-w-md mx-auto p-4">
          <div className="rounded-lg shadow-md p-6 border border-[#9aa9b7] hover:shadow-lg transition">
            <h2 className="text-lg lg:text-xl font-semibold mb-2">
              {taskName}
            </h2>

            <div className="text-gray-400 mb-1 text-xs lg:text-sm">
              <span className="font-medium ">Deadline: </span>
              {formatDate(deadline)}
            </div>

            <div className="text-gray-400 mb-4 text-xs lg:text-sm">
              <span className="font-medium ">Budget: </span>${budget}
            </div>

            <Link to={`/browse-tasks/${_id}`}>
              <button className="btn border-none btn-sm lg:btn-md mt-2 w-full bg-[#04284B] text-white hover:bg-[#222e39] py-2 px-4 rounded-md transition">
                View Task
              </button>
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default TaskCard;
