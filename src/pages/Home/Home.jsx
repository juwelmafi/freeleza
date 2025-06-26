import React, { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import { useLoaderData } from "react-router";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import TaskCard from "../../components/TaskCard/TaskCard";
import Categories from "../../components/Categories/Categories";
import HomeBlogPreview from "../../components/Blogs/HomeBlogPreview";


const Home = () => {
  const featureTask = useLoaderData();
  console.log(featureTask);

  useEffect(() => {
    document.title = `Home | Freeleza`;
    return () => {
      document.title = "Freeleza";
    };
  }, []);

  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <main className="max-w-7xl mx-auto">
        {/* Feature task Section  */}
        <section>
          <h2 className="font-bold text-xl lg:text-3xl text-center mt-5 md:mt-10">
            Featured Tasks
          </h2>
          <p className="text-xs md:text-sm w-[90%] md:w-[80%] lg:w-[40%] text-center mx-auto mt-2 md:mt-4 mb-5">
            Stay on top of your priorities. This section highlights the tasks
            with the nearest deadlines so you can focus on what matters most
            right now.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featureTask.map((task) => (
              <TaskCard key={task._id} task={task}></TaskCard>
            ))}
          </div>
        </section>

        {/* Show task by categories  */}

        <section>
          <Categories></Categories>
        </section>

        {/* How It Work Section  */}

        <section>
          <HowItWorks></HowItWorks>
        </section>

        {/* Our Developer Task */}
        <section className="mb-20">
          <WhyChooseUs></WhyChooseUs>
        </section>

        {/* Blogs section  */}

        <section>
          <HomeBlogPreview></HomeBlogPreview>
        </section>
      </main>
    </div>
  );
};

export default Home;
