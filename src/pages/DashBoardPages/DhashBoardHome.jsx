import React from 'react';
import TopCards from '../../components/DashBoardComp/TopCards';
import ChartCard from '../../components/DashBoardComp/ChartCard';
import { useLoaderData } from 'react-router';

const DhashBoardHome = () => {
  const tasks = useLoaderData();
  return (
    <div>
      <TopCards tasks={tasks}></TopCards>
      <ChartCard tasks={tasks}></ChartCard>
    </div>
  );
};

export default DhashBoardHome;