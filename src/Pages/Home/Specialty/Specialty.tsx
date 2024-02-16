import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaMusic,
  FaUserTie,
} from "react-icons/fa";
import "./Specialty.css";

const Specialty = () => {
  return (
    <>
      <section className="max-w-[1280px] mx-auto px-5">
        <h2 className="text-[32px] md:text-[64px] font-extrabold text-center">
          Our Specialty
        </h2>
        <p className="text-[14px] md:text-[18px] mx-auto text-center mb-[54px] max-w-2xl">
          We have been successfully doing various kind of event since 2012
        </p>
        <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          <div className="flex items-center justify-center flex-col gap-8 text-white curved-hexagon bg-gradient-to-r from-[#6a0de0] to-[#1e0044] p-5">
            <div>
              <FaCalendarAlt className="text-[50px] text-white" />
            </div>
            <h3 className="text-2xl text-center">24/7 EVENT AVAILABLE</h3>
          </div>
          <div className="flex items-center justify-center flex-col gap-8 text-white curved-hexagon bg-gradient-to-r from-[#6a0de0] to-[#1e0044] p-5">
            <div>
              <FaMapMarkerAlt className="text-[50px] text-white" />
            </div>
            <h3 className="text-2xl text-center">GREAT LOCATIONS</h3>
          </div>
          <div className="flex items-center justify-center flex-col gap-8 text-white curved-hexagon bg-gradient-to-r from-[#6a0de0] to-[#1e0044] p-5">
            <div>
              <FaUserTie className="text-[50px] text-white" />
            </div>
            <h3 className="text-2xl text-center">MORE THEN 200 SPEAKERS</h3>
          </div>
          <div className="flex items-center justify-center flex-col gap-8 text-white curved-hexagon bg-gradient-to-r from-[#6a0de0] to-[#1e0044] p-5">
            <div>
              <FaMusic className="text-[50px] text-white" />
            </div>
            <h3 className="text-2xl text-center">LETS PARTY AFTER EVENT</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Specialty;
