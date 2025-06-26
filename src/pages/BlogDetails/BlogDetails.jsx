// BlogDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../components/Loading/Loading";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`https://dev.to/api/articles/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [id]);

  if (!blog) return <Loading></Loading>

  return (
    <div className=" max-w-5xl overflow-x-hidden shadow-md mx-auto md:py-10 md:px-10 px-5 my-10 mt-28">
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
