import React from "react";
import { services } from "../assets/data/services";
import ServiceCard from "../components/Services/ServiceCard";

const Services = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-800">Our Services</h2>
          <p className="text-gray-700">
            We offer a variety of specialized medical services to cater to your
            needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px]">
          {services.map((item, index) => (
            <ServiceCard item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
