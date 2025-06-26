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
const ChartCard = () => {
  // Dummy chart data
  const salesData = [
    { name: "M", value: 200 },
    { name: "T", value: 300 },
    { name: "W", value: 250 },
    { name: "T", value: 400 },
    { name: "F", value: 320 },
    { name: "S", value: 500 },
    { name: "S", value: 600 },
  ];

  const emailData = [
    { name: "JAN", value: 400 },
    { name: "FEB", value: 700 },
    { name: "MAR", value: 200 },
    { name: "APR", value: 278 },
    { name: "MAY", value: 189 },
    { name: "JUN", value: 239 },
    { name: "JUL", value: 349 },
    { name: "AUG", value: 600 },
    { name: "SEP", value: 450 },
    { name: "OCT", value: 300 },
    { name: "NOV", value: 650 },
    { name: "DEC", value: 700 },
  ];

  const taskData = [
    { name: "1", value: 400 },
    { name: "2", value: 300 },
    { name: "3", value: 200 },
    { name: "4", value: 278 },
    { name: "5", value: 189 },
    { name: "6", value: 239 },
    { name: "7", value: 349 },
  ];

  return (
    <div>
      {/* Chart Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {/* Daily Sales */}
        <div className=" shadow-lg p-4 rounded-xl">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">
            Daily Sales
          </h3>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={salesData}>
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
            📈 15% increase in today sales
          </p>
        </div>

        {/* Email Subscriptions */}
        <div className=" shadow-lg p-4 rounded-xl">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">
            Email Subscriptions
          </h3>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={emailData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis hide />
              <Tooltip />
              <Bar dataKey="value" fill="#f59e0b" />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs  mt-2">
            📬 Last Campaign Performance
          </p>
        </div>

        {/* Completed Tasks */}
        <div className=" shadow-lg p-4 rounded-xl">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">
            Completed Tasks
          </h3>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={taskData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis hide />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#ef4444"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-xs  mt-2">
            ✅ Last Campaign Performance
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
