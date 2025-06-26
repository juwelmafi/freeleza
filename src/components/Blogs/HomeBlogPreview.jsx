// HomeBlogPreview.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import BlogCard from "./BlogCard";

const HomeBlogPreview = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?tag=freelance&per_page=4")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="md:text-3xl text-xl  font-bold mb-6">Latest Freelancing Blogs</h2>
      <div className="grid gap-6 md:grid-cols-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      <div className="mt-6 text-right">
        <Link
          to="/blogs"
          className="text-[#48CCDA] font-medium hover:text-blue-500 flex items-center justify-end gap-1"
        >
          Show All Blogs <span className="text-xl">→</span>
        </Link>
      </div>
    </div>
  );
};

export default HomeBlogPreview;
