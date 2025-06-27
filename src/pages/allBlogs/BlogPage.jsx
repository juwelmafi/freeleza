// BlogPage.jsx
import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router";
import BlogCard from "../../components/Blogs/BlogCard";

const BlogPage = () => {
  const blogs = useLoaderData();
  useEffect(() => {
      document.title = `Blogs | Freeleza`;
      window.scroll(0, 0)
      return () => {
        document.title = "Freeleza";
      };
    }, []);
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 mt-20">
      <h2 className="md:text-2xl text-xl font-bold mb-6">Grow Up Your Knowledge</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
