import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ item }) => {
  const { name, desc, bgColor, textColor } = item;

  return (
    <div
      className="py-[30px] px-5 rounded-lg shadow-md transition-transform transform hover:scale-105"
      style={{ backgroundColor: bgColor }}
    >
      <h3
        className="text-2xl font-semibold text-center"
        style={{ color: textColor }}
      >
        {name}
      </h3>
      <p className="text-center mt-4 text-gray-700">{desc}</p>
    </div>
  );
};

export default ServiceCard;
