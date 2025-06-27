import Lottie from "lottie-react";
import React from "react";
import formAnime from "../../assets/lottie-react/formAnime.json";
import toast from "react-hot-toast";

const ContactUs = () => {

  const handleMessage = (e)=>{
    e.preventDefault();
    toast.success("Message sent successfully!")
  }

  return (
    <div>
      <div className="grid max-w-screen-xl grid-cols-1 gap-10 px-5 py-16 mx-auto rounded-lg md:grid-cols-2">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold lg:text-5xl">
              Let's talk!
            </h2>
            <div className="">Send your message, we will connect you soon.</div>
          </div>
          <div className=" -ml-10 lg:w-[80%]">
            <Lottie animationData={formAnime} loop={true} />
          </div>
        </div>
        <form onSubmit={handleMessage} className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded input"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input id="email" type="email" className="w-full input p-3 rounded " required/>
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded textarea"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm btn bg-[#04284B] text-white font-bold tracking-wide uppercase rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
