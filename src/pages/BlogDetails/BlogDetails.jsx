// BlogDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`https://dev.to/api/articles/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [id]);

  if (!blog) return <p className="text-center mt-10">Loading blog...</p>;

  return (
    <div className=" max-w-5xl shadow-md mx-auto py-10 px-10 my-10 mt-28">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        By {blog.user.name} • {new Date(blog.published_at).toDateString()}
      </p>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.body_html }}
      />
    </div>
  );
};

export default BlogDetails;
