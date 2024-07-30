import React, { useEffect, useState } from "react";
import { doctors } from "../../assets/data/doctors";
import DoctorCard from "../../components/Doctors/DoctorCard";
import Testimonial from "../../components/Testimonial/Testimonial";
import useFecthData from "../../hooks/useFecthData";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import { FaSearch } from "react-icons/fa";

const Doctors = () => {
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");
  const handleSearch = () => {
    setQuery(query.trim());
    console.log("handle search");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query);
    }, 700);
    return () => clearTimeout(timeout);
  }, [query]);

  const {
    data: doctors,
    loading,
    error,
  } = useFecthData(`${BASE_URL}/doctors?query=${debounceQuery}`, {
    headers: { "Cache-Control": "no-cache" },
  });

  return (
    <>
      <section className="bg-[#f0f4f8] h-auto py-10">
        <div className="container text-center">
          <h2 className="heading text-[#2c3e50]">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[20px] mx-auto bg-white rounded-md flex items-center justify-between shadow-lg">
            <input
              type="search"
              className="py-2 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-[#7f8c8d]"
              placeholder="Search by name or specialization"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="btn mt-0 rounded-[0px] rounded-r-md bg-[#1abc9c] text-white flex items-center justify-center p-2"
              onClick={handleSearch}
            >
              <FaSearch className="w-5 h-5" />
            </button>
          </div>
          <div className="container">
            {loading && <Loading />}
            {error && <Error />}
            {!loading && !error && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
                {doctors.map((doctor) => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#f0f4f8] py-10">
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center text-[#34495e]">
              What Our Patients Say
            </h2>
            <p className="text__para text-center text-[#7f8c8d]">
              Our patients' well-being is our top priority. Here's what some of
              them have to say about their experiences with our medical
              services.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctors;
