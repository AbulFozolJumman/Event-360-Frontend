// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import checked from "../../../assets/checked.png";
import "./Services.css";
import { useContext } from "react";
import { Event360Context } from "../../../Provider/Event360Provider";
import Loader from "../../../Components/Loader/Loader";

const Services = () => {
  // Importing data from context API
  const { eventServicesData } = useContext(Event360Context);
  const { data, isLoading, isError } = eventServicesData;

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <p className="flex items-center justify-center font-extrabold text-red-500">
        Something went wrong
      </p>
    );
  }

  return (
    <>
      <section id="services" className="max-w-[1280px] mx-auto px-5">
        <h2 className="text-[32px] md:text-[64px] font-extrabold text-center">
          Our Services
        </h2>
        <p className="text-[14px] md:text-[18px] mx-auto text-center mb-[54px] max-w-2xl">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
        <div className="flex flex-col md:flex-row items-start justify-center gap-5">
          {data &&
            data?.data.map((s) => (
              <div
                key={s._id}
                className="max-w-[412px] service-card rounded-md w-full p-[25px] bg-[#F6F2FD] hover:bg-[#E6D9F7]"
              >
                <img src={s.imgURL} className="service-img w-full" alt="" />
                <h2 className="font-extrabold text-[32px] mt-6 mb-3">
                  {s.name}
                </h2>
                <p className="text-[14px] md:text-[18px] hidden description mb-8">
                  Ut posuere felis arcu tellus tempus in in ultricies. Gravida
                  id nibh ornare viverra. Ultrices faucibus neque velit risus ac
                  id lorem.Ut posuere felis arcu tellus tempus in in
                  ultricies.Ut posuere felis arcu tellus tempus in in ultricies.
                </p>

                {s.services.split(",").map((d, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-[18px] mb-4"
                  >
                    <img src={checked} alt="checked" />
                    <p className="text-[18px]">{d}</p>
                  </div>
                ))}
                <button className="service-btn hidden w-full bg-[#5A01CB] border border-[#5a01cb] hover:bg-white rounded-md py-4 text-white hover:text-[#5A01CB] font-bold mt-10">
                  Check it out
                </button>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Services;
