import React from "react";
import starIcon from "../../assets/images/Star.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const { name, avgRating, photo, specialization, totalRating, experiences } =
    doctor;

  const roundedTotalRating = Math.round(totalRating);

  return (
    <div className="p-4 doc shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
      <div className="overflow-hidden rounded-t-lg h-64">
        <img
          src={photo}
          alt={name}
          className="w-full h-64 object-contain rounded-md mb-4"
        />
      </div>

      <div className="p-4 ">
        <h2 className="text-xl font-semibold text-black mt-2">{name}</h2>

        <div className="mt-2 flex items-center justify-between">
          <span className="bg-[#1abc9c] text-black py-1 px-3 text-sm font-medium rounded">
            {specialization || "General Doctor"}
          </span>
          <div className="flex items-center gap-2">
            <span className="flex items-center text-sm font-semibold text-black">
              <img src={starIcon} alt="rating" className="w-4 h-4" />{" "}
              {avgRating}
            </span>
            <span className="text-sm text-black">({roundedTotalRating})</span>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm text-black">
            {experiences && experiences[0]?.hospital}
          </p>
          <Link
            to={`/doctors/${doctor._id}`}
            className="w-10 h-10 rounded-full border border-solid border-[#2c3e50] flex items-center justify-center text-[#2c3e50] hover:bg-[#1abc9c] hover:text-white transition-colors duration-300"
          >
            <BsArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
