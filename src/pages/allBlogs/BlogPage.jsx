// BlogPage.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import BlogCard from "../../components/Blogs/BlogCard";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?tag=freelance&per_page=20")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 mt-20">
      <h2 className="text-2xl font-bold mb-6">All Freelancing Blogs</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {blogs.map((blog) => (
         <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
