import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../providers/AuthPrivider";
import { formatDate } from "../../components/FormateDate";
import Swal from "sweetalert2";
import Loading from "../../components/Loading/Loading";
import toast from "react-hot-toast";

const MyPostedTask = () => {
  const { user } = useContext(AuthContext);
  const initialTaks = useLoaderData();
  const [tasks, setTasks] = useState([]);
  const [singleTask, setSingleTask] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("");

  const [formInputs, setFormInputs] = useState({
    taskName: "",
    description: "",
    category: "",
    deadline: "",
    budget: "",
  });

  const handleFetchSingleTask = async (id) => {
    const res = await fetch(`http://localhost:4000/my-posted-task/${id}`);
    const task = await res.json();
    setSingleTask(task);
    setFormInputs({
      taskName: task.taskName || "",
      description: task.description || "",
      category: task.category || "",
      deadline: new Date(task.deadline).toISOString().split("T")[0],
      budget: task.budget || "",
    });
    setSelectedCategory(task.category);
  };

  console.log(singleTask);

  useEffect(() => {
    if (user?.email) {
      const myPostedTask = initialTaks.filter(
        (task) => task.userEmail === user.email
      );
      setTasks(myPostedTask);
    }
  }, [user, initialTaks]);
  console.log(tasks);

  // Handle Delete Task //

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/my-posted-task/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              toast.success("Task deleted successfully");

              const remainingTask = tasks.filter((task) => task._id !== id);
              setTasks(remainingTask);
            }
          });
      }
    });
  };

  const handleUpdateButton = (id) => {
    document.getElementById("my_modal_4").showModal();
    handleFetchSingleTask(id);
  };

  const handleBidButton = (id) => {
    document.getElementById("my_modal_3").showModal();
    handleFetchSingleTask(id);
  };

  // Handle Update Task //

  const handleUpdateTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedTask = Object.fromEntries(formData.entries());
    if (updatedTask.deadline) {
      updatedTask.deadline = new Date(updatedTask.deadline);
      console.log(updatedTask);
    }

    // update task to db //

    fetch(`http://localhost:4000/my-posted-task/${singleTask._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("data from db", data);
        if (data.modifiedCount) {
          toast.success("Task added successfully");
          document.getElementById("my_modal_4").close();
          const updatedTasks = tasks.map((task) =>
            task._id === singleTask._id ? { ...task, ...updatedTask } : task
          );

          setTasks(updatedTasks);
        }
        // e.target.reset();
      });
  };

  return (
    <div>
      {tasks.length > 0 ? (
        <div className="overflow-x-auto my-10 rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Task Name</th>
                <th>Category</th>
                <th>Deadline</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={task._id}>
                  <th>{index + 1}</th>
                  <td>
                    <p className="font-semibold">{task?.taskName}</p>
                    <p className="text-xs">Budget: ${task?.budget}</p>
                  </td>
                  <td>{task?.category}</td>
                  <td>{formatDate(task?.deadline)}</td>
                  <td className="flex gap-2">
                    <button
                      onClick={() => handleUpdateButton(task._id)}
                      className="btn btn-xs bg-green-100 text-green-600"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(task?._id)}
                      className="btn btn-xs bg-red-100 text-red-600"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleBidButton(task?._id)}
                      className="btn btn-xs bg-purple-100 text-purple-600"
                    >
                      Bids
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h2 className="font-thin text-4xl text-center pt-32">
          You have not posted any task yet!
        </h2>
      )}

      {/* Bid Modal is here  */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Wooo!</h3>
          <p className="py-4">Total bids for this task: {singleTask.bids}</p>
        </div>
      </dialog>

      {/* Modal is here  */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box p-0 bg-[#88dee6]">
          <div className="text-[#04284B]">
            <div className="w-full mx-auto p-5 ">
              <form className="space-y-4" onSubmit={handleUpdateTask}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                  <div className="col-span-2">
                    <label className="block mb-1 font-medium ">
                      Task Title
                    </label>
                    <input
                      type="text"
                      placeholder="Enter task title"
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
                      name="taskName"
                      required
                      value={formInputs.taskName}
                      onChange={(e) =>
                        setFormInputs({
                          ...formInputs,
                          taskName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium ">
                      Description
                    </label>
                    <textarea
                      placeholder="Describe the task"
                      rows="4"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white"
                      name="description"
                      required
                      value={formInputs.description}
                      onChange={(e) =>
                        setFormInputs({
                          ...formInputs,
                          description: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium ">Category</label>
                    <select
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white"
                      name="category"
                      required
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="Select a category">
                        Select a category
                      </option>
                      <option value="Web Development">Web Development</option>
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="Content Writing">Content Writing</option>
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
                      <option value="App Development">App Development</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-1 font-medium ">Deadline</label>
                    <input
                      type="date"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white"
                      name="deadline"
                      min={new Date().toISOString().split("T")[0]}
                      required
                      value={formInputs.deadline}
                      onChange={(e) =>
                        setFormInputs({
                          ...formInputs,
                          deadline: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium ">
                      Budget ($)
                    </label>
                    <input
                      type="text"
                      placeholder="Enter budget"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white"
                      name="budget"
                      required
                      value={formInputs.budget}
                      onChange={(e) =>
                        setFormInputs({
                          ...formInputs,
                          budget: e.target.value,
                        })
                      }
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
                <div className="pt-4 flex flex-col gap-1">
                  <button
                    type="submit"
                    className="text-white bg-[#04284B]  font-semibold py-2 px-4 rounded-lg hover:bg-[#222e39] transition"
                  >
                    Update
                  </button>
                </div>
              </form>
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
                <button className="btn w-full rounded-lg mt-2">Close</button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyPostedTask;
