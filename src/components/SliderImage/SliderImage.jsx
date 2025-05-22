import React from "react";

const SliderImage = () => {
  return (
    <div>
      <div
        className=" hero min-h-[70vh]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/nMtyB7Bd/IMG-20250519-235941.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="text-white">
          <div className="w-full">
            <h1 className="mb-2 text-5xl font-bold">Post Your First Task — It's Free!</h1>
            <p className="mb-5">
              Connect with top-rated freelancers in minutes.
            </p>
            <button className="btn bg-[#04284B] text-white border-0 shadow-none">Post a Task</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderImage;
