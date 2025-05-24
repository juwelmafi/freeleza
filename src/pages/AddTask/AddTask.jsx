import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthPrivider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const AddTask = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTask = Object.fromEntries(formData.entries());
    if (newTask.deadline) {
      newTask.deadline = new Date(newTask.deadline);
      console.log(newTask);
    }

    // Add Data to DB //
    fetch("https://freeleza-server.vercel.app/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then(() => {
        // console.log("data from db", data);
        toast.success("Task added successfully");
        navigate("/my-posted-task");
        // e.reset();
      });
  };

  useEffect(() => {
    document.title = `Add Task | Freeleza`;
    window.scroll(0, 0);
    return () => {
      document.title = "Freeleza";
    };
  }, []);

  return (
    <div className="my-10 px-1 text-xs md:text-sm">
      <h2 className="text-2xl font-bold text-center mb-6">Add New Task</h2>
      <div className="max-w-2xl mx-auto p-6 bg-[#88dee6] text-black  border-gray-200 rounded-lg shadow-md mt-10">
        <form className="space-y-4" onSubmit={handleAddTask}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
            <div className="md:col-span-2">
              <label className="block mb-1 font-medium ">Task Title</label>
              <input
                type="text"
                placeholder="Enter task title"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
                name="taskName"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium ">Description</label>
              <textarea
                placeholder="Describe the task"
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white"
                name="description"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium ">Category</label>
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white"
                name="category"
                required
              >
                <option value="Select a category">Select a category</option>
                <option value="Web Development">Web Development</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Content Writing">Content Writing</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="App Development">App Development</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium ">Deadline</label>
              <input
                type="date"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2"
                name="deadline"
                min={new Date().toISOString().split("T")[0]}
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium ">Budget ($)</label>
              <input
                type="text"
                placeholder="Enter budget"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white"
                name="budget"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Your Email</label>
              <input
                type="email"
                value={user?.email}
                readOnly
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 cursor-not-allowed"
                name="userEmail"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Your Name</label>
              <input
                type="text"
                value={user?.displayName}
                readOnly
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 cursor-not-allowed"
                name="userName"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Your Photo</label>
              <input
                type="text"
                value={user?.photoURL}
                readOnly
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 cursor-not-allowed"
                name="userPhoto"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Bids</label>
              <input
                type="text"
                value={0}
                readOnly
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 cursor-not-allowed"
                name="bids"
              />
            </div>
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="text-white w-full bg-[#04284B]  font-semibold py-2 px-4 rounded-lg hover:bg-[#222e39] transition"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
