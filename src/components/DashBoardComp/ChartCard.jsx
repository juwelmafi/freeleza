import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
const ChartCard = ({ tasks }) => {
  console.log(tasks);
  const getShortName = (category) => {
    return category
      .split(" ") // split words
      .map((word) => word[0]?.toUpperCase()) // take first letter
      .join(""); // join as acronym
  };

  // 📊 Tasks per Category
  const categoryCount = {};
  tasks.forEach((task) => {
    const shortName = getShortName(task.category || "Other");
    categoryCount[shortName] = (categoryCount[shortName] || 0) + 1;
  });
  const categoryData = Object.entries(categoryCount).map(([name, value]) => ({
    name,
    value,
  }));

  // 💰 Budget per Category
  const budgetPerCategory = {};
  tasks.forEach((task) => {
    const shortName = getShortName(task.category || "Other");
    const budget = parseFloat(task.budget || "0");
    budgetPerCategory[shortName] = (budgetPerCategory[shortName] || 0) + budget;
  });
  const budgetData = Object.entries(budgetPerCategory).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div>
      {/* Chart Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
        {/* Daily Sales */}
        <div className=" shadow-lg p-4 rounded-xl border border-gray-200">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">
            Tasks per Category
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis hide />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#22c55e"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-xs  mt-2">
            📊 Distribution of tasks across categories
          </p>
        </div>

        {/* Email Subscriptions */}
        <div className=" shadow-lg p-4 rounded-xl border border-gray-200">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">
            Budget per Category
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={budgetData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis hide />
              <Tooltip />
              <Bar dataKey="value" fill="#f59e0b" />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs  mt-2"> 💰 Total budget allocated by clients</p>
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
