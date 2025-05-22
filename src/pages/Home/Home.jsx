import React from 'react';
import Banner from '../../components/Banner/Banner';
import { useLoaderData } from 'react-router'
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import TaskCard from '../../components/TaskCard/TaskCard';




const Home = () => {
  const featureTask = useLoaderData();
  console.log(featureTask)
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <main className=''>
        {/* Feature task Section  */}
        <section>
          <h2 className='font-bold text-xl lg:text-3xl text-center my-8'>Featured Tasks</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {
            featureTask.map((task)=> <TaskCard key={task._id} task={task}></TaskCard>)
          }
        </div>
        </section>
        {/* How It Work Section  */}

        <section>
          <HowItWorks></HowItWorks>
        </section>


        {/* Our Developer Task */}
        <section className='mb-20'>
            <WhyChooseUs></WhyChooseUs>
        </section>
      </main>
    </div>
  );
};

export default Home;