// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useContext } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Event360Context } from "../../../Provider/Event360Provider";
import Loader from "../../../Components/Loader/Loader";

const responsive = {
  0: {
    items: 1,
  },
  400: {
    items: 1,
  },
  568: {
    items: 2,
  },
  769: {
    items: 3,
  },
  1025: {
    items: 4,
    itemsFit: "contain",
  },
};

const RecentEvents = () => {
  // Importing data from context API
  const { eventsData } = useContext(Event360Context);
  const { data, isLoading, isError } = eventsData;

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
      <section className="py-20 max-w-7xl mx-auto">
        <h2 className="text-[64px] font-extrabold text-center">
          Recent Events
        </h2>
        <p className="text-[18px] mx-auto text-center mb-[80px] max-w-2xl">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
        {/* Slider */}
        <AliceCarousel
          autoPlay
          autoPlayInterval={1000}
          responsive={responsive}
          infinite
          disableButtonsControls
        >
          {data &&
            data?.data.map((r) => (
              <div key={r._id} className="max-w-[266px] mx-5">
                <img
                  className="rounded-t-md w-full h-[220px]"
                  src={r.imgURL}
                  alt={r.name}
                />
                <div className="p-4 bg-[#F2F2F2] rounded-b-md">
                  <p>{r.name}</p>
                  <p className="text-[#475569] text-sm mt-2">
                    by Melvin Spring
                  </p>
                </div>
              </div>
            ))}
        </AliceCarousel>
      </section>
    </>
  );
};

export default RecentEvents;
