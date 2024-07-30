import React from "react";
import aboutImg from "../../assets/images/8.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="review py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex justify-between gap-12 flex-col lg:flex-row items-center">
          {/* About img */}
          <div className="relative w-full lg:w-1/2 xl:w-[770px] order-2 lg:order-1 mb-12 lg:mb-0">
            <img className="w-full " src={aboutImg} alt="About Us" />
          </div>
          {/* About content */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold text-teal-800 mb-6">
              Dedicated to Your Health and Well-being
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              At our hospital, we are committed to providing exceptional
              healthcare services to our community. Our team of experienced
              medical professionals works round the clock to ensure the best
              possible outcomes for our patients. We utilize state-of-the-art
              technology and evidence-based practices to deliver high-quality
              care.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our mission is to improve the health and quality of life of our
              patients through compassionate care and medical excellence. We
              strive to create a healing environment that supports the physical,
              emotional, and mental well-being of our patients and their
              families.
            </p>
            <Link to="/contact">
              <button className="btn bg-teal-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300 mt-6">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
