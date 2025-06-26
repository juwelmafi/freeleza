import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { formatDate } from "../FormateDate";
import toast from "react-hot-toast";
import { IoCaretBackSharp } from "react-icons/io5";
import { FaHandshakeSimple } from "react-icons/fa6";

const TaskDetails = () => {
  const task = useLoaderData();
  const navigate = useNavigate();
  const bidCount = task.bids;
  const [bids, setBids] = useState(bidCount);

  const handleBidNowButton = () => {
    const newBidCount = parseInt(bids) + 1;
    setBids(newBidCount);
    handleUpdateBid(newBidCount);
  };

  const handleUpdateBid = (newBids) => {
    fetch(`https://freeleza-server.vercel.app/browse-tasks/${task._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ bids: newBids }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("data from db", data);
        if (data.modifiedCount) {
          toast.success("Bid successfully");
        }
        // e.reset();
      });
  };

  useEffect(() => {
    document.title = `${task?.taskName} | Freeleza`;
    window.scroll(0, 0);
    return () => {
      document.title = "Freeleza";
    };
  }, [task?.taskName]);


  return (
    <div className="px-2 md:px-0 mb-22 mt-[67px]">
      <div className="flex justify-center items-center my-5">
        <span className="font-semibold text-center mt-5 bg-purple-100 text-purple-700 px-4 border border-purple-700 mx-auto p-2 rounded-3xl">
          You bid for {bids} opportunities.
        </span>
      </div>
      <div className="max-w-4xl mx-auto p-6 md:px-12 my-5 bg-[#88dee6] shadow-md rounded-lg">
        <div className="flex justify-between items-center">
          <button
            onClick={() => navigate(-1)}
            className=" px-4 py-2 bg-[#04284B] text-white hover:bg-[#222e39] text-sm rounded flex gap-1 items-center"
          >
            <IoCaretBackSharp />
            Back
          </button>
          <button
            onClick={() => handleBidNowButton()}
            className="px-4 py-2 bg-[#04284B] text-white hover:bg-[#222e39] text-sm rounded flex gap-1 items-center"
          >
            <FaHandshakeSimple />
            Bid Now
          </button>
        </div>

        <h2 className="text-xl md:text-3xl font-bold text-gray-800 my-4 ">
          {task?.taskName}
        </h2>

        <div className="space-y-3 text-gray-700">
          <p className="text-sm">
            <span className="font-bold text-sm">Category:</span>{" "}
            {task?.category}
          </p>
          <p className="text-sm">
            <span className="font-bold text-sm">Deadline:</span>{" "}
            {formatDate(task?.deadline)}
          </p>
          <p className="text-sm">
            <span className="font-bold text-sm">Budget:</span> ${task?.budget}
          </p>
          <p className="text-sm">
            <span className="font-bold text-sm">Posted By:</span>{" "}
            {task?.userName}
          </p>
          <p className="text-sm">
            <span className="font-bold text-sm">Contact:</span>{" "}
            {task?.userEmail}
          </p>
          <div>
            <p className="font-bold text-sm mb-1">Description:</p>
            <p className="bg-gray-100 text-sm p-4 rounded">
              {task?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
