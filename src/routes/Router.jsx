import React from "react";
import { createBrowserRouter } from "react-router";
import Roots from "../layouts/Roots";
import Home from "../pages/Home/Home";
import AddTask from "../pages/AddTask/AddTask";
import BrowsTask from "../pages/BrowsTask/BrowsTask";
import MyPostedTask from "../pages/MyPostedTask/MyPostedTask";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import Loading from "../components/Loading/Loading";
import TaskDetails from "../components/TaskDetails/TaskDetails";
import PrivateRoute from "../providers/PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Roots></Roots>,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:4000/feature-task"),
        hydrateFallbackElement: <Loading></Loading>,
        Component: Home,
      },
      {
        path: "/add-task",
        element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
      },
      {
        path: "/browse-task",
        loader: () => fetch("http://localhost:4000/tasks"),
        hydrateFallbackElement: <Loading></Loading>,
        Component: BrowsTask,
      },
      {
        path: "/browse-tasks/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:4000/browse-tasks/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
        element: <PrivateRoute><TaskDetails></TaskDetails></PrivateRoute>
      },
      {
        path: "/my-posted-task",
        loader: () => fetch('http://localhost:4000/tasks'),
        hydrateFallbackElement: <Loading></Loading>,
        element: <PrivateRoute><MyPostedTask></MyPostedTask></PrivateRoute>
      },
      {
        path: "/login",
        Component: LogIn,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
    ],
  },
]);

export default router;
