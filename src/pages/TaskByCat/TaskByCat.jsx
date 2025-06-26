import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import TaskCard from "../../components/TaskCard/TaskCard";

const TaskByCat = () => {
  const [tasks, setTasks] = useState([]);
  const params = useParams();
  const formatted = params?.category.replace(/([a-z])([A-Z])/g, "$1 $2");
  useEffect(() => {
    fetch(`https://freeleza-server.vercel.app/browse-task/${params.category}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTasks(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


   useEffect(() => {
        document.title = `${formatted} | Freeleza`;
        window.scroll(0, 0)
        return () => {
          document.title = "Freeleza";
        };
      }, []);


  return (
    <div className=" my-10 md:mt-28  max-w-7xl mx-auto">
      <h2 className="font-bold text-xl lg:text-3xl text-center mt-5 md:mt-10">
        All {formatted} Related Task.
      </h2>
      <p className="text-xs md:text-sm w-[90%] md:w-[80%] lg:w-[40%] text-center mx-auto mt-2 md:mt-4 mb-5">
       Explore all freelance tasks posted under {formatted}. Clients are actively looking to hire skilled professionals—pick a task that matches your expertise and start earning today!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tasks.map((task) => (
          <TaskCard key={task?._id} task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default TaskByCat;
