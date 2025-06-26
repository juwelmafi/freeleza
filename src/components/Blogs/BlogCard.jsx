// BlogCard.jsx
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { Link } from "react-router";

const BlogCard = ({ blog }) => {
  const { id, title, cover_image, published_at, description, tag_list } =
    blog;

  return (
    <Fade>
      <article className="flex flex-col border border-gray-300 lg:h-[396px] rounded-lg shadow-md overflow-hidden">
      <Link to={`/blogs/${id}`}>
        <img
          alt={title}
          className="object-cover w-full h-52 bg-gray-200"
          src={cover_image ? cover_image : "broken-link.jpg"} // force error if no image
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg";
          }}
        />
      </Link>
      <div className="flex flex-col flex-1 p-4">
        <Link
          to={`/blogs/${id}`}
          className="text-xs tracking-wider uppercase text-violet-600 hover:underline mb-1"
        >
          {tag_list?.[0] || "Freelance"}
        </Link>

        <Link to={`/blogs/${id}`}>
          <h3 className="text-lg line-clamp-1 font-semibold leading-snug hover:underline">
            {title}
          </h3>
        </Link>

        <p className=" text-sm mt-1 line-clamp-3">{description}</p>

        <div className="flex flex-wrap justify-between pt-3 text-xs text-gray-400 mt-auto">
          <span>{new Date(published_at).toLocaleDateString()}</span>
          <Link to={`/blogs/${id}`}>
            <span>Read More →</span>
          </Link>
        </div>
      </div>
    </article>
    </Fade>
  );
};

export default BlogCard;
