import React from "react";
import DoctorCard from "./DoctorCard";
import useFecthData from "../../hooks/useFecthData";
import Loading from "../Loader/Loading";
import Error from "../Error/Error";
import { BASE_URL } from "../../config";

const DoctorList = () => {
  const {
    data: doctors,
    loading,
    error,
  } = useFecthData(`${BASE_URL}/doctors`, {
    headers: { "Cache-Control": "no-cache" },
  });

  return (
    <div className="py-10">
      <div className="container">
        {loading && <Loading />}
        {error && <Error />}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorList;
