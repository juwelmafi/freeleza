import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    fetch("https://freeleza-server.vercel.app/tasks")
      .then((res) => res.json())
      .then((data) => setTask(data))
      .catch((err) => console.error("Failed to fetch tutorials:", err));
  }, []);

  const uniqueTaskByCat = task.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.category === item.category)
  );

  return (
    <div className="my-10">
      <h2 className="font-bold text-xl lg:text-3xl text-center mt-5 md:mt-10">
        Find Task By Categories
      </h2>
      <p className="text-xs md:text-sm w-[90%] md:w-[80%] lg:w-[40%] text-center mx-auto mt-2 md:mt-4 mb-5">
        Discover freelance tasks organized by categories. Easily browse tasks in your area of expertise and connect with clients looking to hire skilled professionals like you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 mt-10">
        {uniqueTaskByCat.map((task) => (
          <CategoryCard key={task._id} task={task}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
