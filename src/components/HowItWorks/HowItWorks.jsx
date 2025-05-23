import React from "react";
import { Fade } from "react-awesome-reveal";

const HowItWorks = () => {
  return (
    <Fade>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col-reverse md:flex-row justify-between  gap-8 items-center">
          {/* Left Section: Steps */}

          <div className="md:space-y-3 space-y-6 lg:space-y-6 lg:ml-20 md:w-[45%]">
            <h2 className="text-xl lg:text-3xl font-bold">How It Works</h2>

            <div className="flex items-start gap-4">
              <span className="text-sm lg:text-lg font-bold">1.</span>
              <div>
                <h3 className="text-sm lg:text-lg font-semibold">
                  Post a Task
                </h3>
                <p className="text-gray-400 text-xs lg:text-sm">
                  Need to do your task? Just post here and see the magic!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-sm lg:text-lg font-bold">2.</span>
              <div>
                <h3 className="text-sm lg:text-lg font-semibold">
                  Review Bids
                </h3>
                <p className="text-gray-400 text-xs lg:text-sm">
                  You can see who bids on your task, and review to hire best
                  one!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-sm lg:text-lg font-bold">3.</span>
              <div>
                <h3 className="text-sm lg:text-lg font-semibold">
                  Hire a Ereealancer
                </h3>
                <p className="text-gray-400 text-xs lg:text-sm">
                  Wooo, hire a freelancer to complete your task on best quality!
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: Blue Box */}
          <div className="md:w-[55%] rounded-xl">
            <img src="https://i.ibb.co/qYCsrT8J/1693327622536.jpg" alt="" />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default HowItWorks;
