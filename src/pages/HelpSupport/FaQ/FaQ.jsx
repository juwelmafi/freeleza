import Lottie from "lottie-react";
import React from "react";
import faqAnime from "../../../assets/lottie-react/faqMan.json";

const FaQ = () => {
  return (
    <div className="max-w-7xl mx-auto my-10 mt-28">
      <h2 className="text-center text-2xl md:text-3xl font-bold my-3">
        Frequently Asked question
      </h2>
      <p className="text-center w-[90%] md:w-[60%] lg:w-[50%] mx-auto text-xs md:text-sm">
        Clear answers to common queries users have about your service or
        product, helping them quickly find the information they need.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10">
        <div className="text-center lg:text-left md:w-[40%]">
          <Lottie animationData={faqAnime} loop={true} />
        </div>
        <div className="md:w-[60%] px-2 md:px-0">
          <div className="join join-vertical bg-base-100 w-full">
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title font-semibold">
                How do I create a freelancer profile on Freeleza?
              </div>
              <div className="collapse-content text-sm">
                Simply sign up, fill in your skills and experience, upload your
                portfolio, and set your hourly rate to start getting freelance
                jobs.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title font-semibold">
                How does Freeleza ensure payment security?
              </div>
              <div className="collapse-content text-sm">
                Freeleza uses an escrow system that holds client payments
                securely until the work is delivered and approved by the client.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title font-semibold">
                Can I cancel a project or request a refund?
              </div>
              <div className="collapse-content text-sm">
                Yes, you can request a cancellation or refund through Freeleza’s
                dispute resolution center if you and the freelancer cannot
                agree.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title font-semibold">
                Are the freelancers verified on Freeleza?
              </div>
              <div className="collapse-content text-sm">
                Yes, Freeleza verifies freelancers’ identities and reviews their
                portfolios to maintain quality and trust on the platform.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title font-semibold">
                What types of freelance jobs are available?
              </div>
              <div className="collapse-content text-sm">
                Freeleza offers a variety of freelance categories including web
                development, graphic design, content writing, digital marketing,
                and more.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaQ;
