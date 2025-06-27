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
import TaskByCat from "../pages/TaskByCat/TaskByCat";
import NoContent from "../pages/ErrorPage/NoContent";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import BlogPage from "../pages/allBlogs/BlogPage";
import DashBoard from "../layouts/DashBoard";
import DhashBoardHome from "../pages/DashBoardPages/DhashBoardHome";
import FaQ from "../pages/HelpSupport/FaQ/FaQ";
import HelpSupport from "../pages/HelpSupport/HelpSupport";
;

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Roots></Roots>,
    children: [
      {
        path: "/",
        loader: () => fetch("https://freeleza-server.vercel.app/feature-task"),
        hydrateFallbackElement: <Loading></Loading>,
        Component: Home,
      },
      
      {
        path: "/browse-task",
        loader: () => fetch("https://freeleza-server.vercel.app/tasks"),
        hydrateFallbackElement: <Loading></Loading>,
        Component: BrowsTask,
      },
      {
        path: "/browse-task/:category",
        Component: TaskByCat
      },
      {
        path: "/browse-tasks/:id",
        loader: ({ params }) =>
          fetch(`https://freeleza-server.vercel.app/browse-tasks/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
        element: <PrivateRoute><TaskDetails></TaskDetails></PrivateRoute>
      },
      
      
      {
        path: "/login",
        Component: LogIn,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/no-content",
        Component: NoContent
      },
      {
        path: "/blogs/:id",
        Component: BlogDetails,
      },
      {
        path: "/blogs",
        loader: ()=> fetch("https://dev.to/api/articles?tag=freelance&per_page=20"),
        hydrateFallbackElement: <Loading></Loading>,
        Component: BlogPage,
      },
      {
        path:"/help-support",
        Component: HelpSupport,
      }
    ],
  },
  {
    path: "/",
    Component: DashBoard,
    children: [
      {
        path: "/dashboard",
        loader: () => fetch("https://freeleza-server.vercel.app/tasks"),
        hydrateFallbackElement: <Loading></Loading>,
        Component: DhashBoardHome,
      },
      {
        path: "/my-posted-task",
        loader: () => fetch('https://freeleza-server.vercel.app/tasks'),
        hydrateFallbackElement: <Loading></Loading>,
        element: <PrivateRoute><MyPostedTask></MyPostedTask></PrivateRoute>
      },
      {
        path: "/add-task",
        element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
      },
    ]
  }
]);

export default router;
