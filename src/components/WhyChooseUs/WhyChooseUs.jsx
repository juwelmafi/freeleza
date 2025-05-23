import React from "react";
import { Fade } from "react-awesome-reveal";

const WhyChooseUs = () => {
  return (
    <Fade>
      <section className="m-4 md:m-8 ">
        <div className="container p-4 mx-auto my-6 space-y-1 text-center">
          <h2 className="font-bold text-xl lg:text-3xl text-center my-2 lg:my-5">
            Why Choose Us?
          </h2>
          <p className=" text-xs md:text-sm md:w-[70%] mx-auto">
            Discover what sets us apart. From secure payments to expert
            freelancers and round-the-clock support — we’re here to make your
            journey smooth, reliable, and successful.
          </p>
        </div>
        <div className="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4">
          <div className="flex flex-col px-8 py-6 rounded-md border border-gray-200">
            <h2 className="mb-2 text-sm  font-semibold sm:text-lg title-font">
              Secure Payments
            </h2>
            <p className="flex-1 mb-4 text-xs lg:text-sm  leading-relaxed">
              All transactions are protected by industry-leading encryption,
              ensuring your funds and payment details are always safe from fraud
              and unauthorized access.
            </p>
            <a
              className="inline-flex items-center space-x-2 text-xs lg:text-sm "
              href="/components"
            >
              <span>Learn More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="flex flex-col px-8 py-6 rounded-md border border-gray-200">
            <h2 className="mb-2 text-sm  font-semibold sm:text-lg title-font ">
              Verified Experts
            </h2>
            <p className="flex-1 mb-4 text-xs lg:text-sm leading-relaxed">
              Our professionals undergo rigorous vetting and skill assessments,
              so you collaborate only with qualified, reliable freelancers who
              deliver top-quality results.
            </p>
            <a
              className="inline-flex items-center space-x-2 text-xs lg:text-sm "
              href="/sections"
            >
              <span>Learn More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="flex flex-col px-8 py-6 rounded-md border border-gray-200">
            <h2 className="mb-2 text-sm  font-semibold sm:text-lg title-font ">
              24/7 Support
            </h2>
            <p className="flex-1 mb-4 text-xs lg:text-sm leading-relaxed">
              Whether you’re posting a task at midnight or need help on a
              weekend, our dedicated support team is always available to assist
              you.
            </p>
            <a
              className="inline-flex items-center space-x-2 text-xs lg:text-sm "
              href="/templates"
            >
              <span>Learn More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="flex flex-col px-8 py-6 rounded-md border border-gray-200">
            <h2 className="mb-2 text-sm  font-semibold sm:text-lg title-font ">
              Satisfaction Guarantee
            </h2>
            <p className="flex-1 mb-4 text-xs lg:text-sm leading-relaxed">
              We stand by our service: if you’re not happy with the work you
              receive, we’ll help you refine it or issue a full refund.
            </p>
            <a
              className="inline-flex items-center space-x-2 text-xs lg:text-sm "
              href="/docs"
            >
              <span>Learn More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default WhyChooseUs;
