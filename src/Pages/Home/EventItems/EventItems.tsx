// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import checkedGray from "../../../assets/check-gray.png";
import { useContext } from "react";
import { Event360Context } from "../../../Provider/Event360Provider";
import Loader from "../../../Components/Loader/Loader";
import Item1 from "../../../Components/Items/Item1";
import Item2 from "../../../Components/Items/Item2";
import Item3 from "../../../Components/Items/Item3";
import Item4 from "../../../Components/Items/Item4";
import Item5 from "../../../Components/Items/Item5";
import img from "../../../assets/Picture.png";
import img1 from "../../../assets/Picture (1).png";
import img2 from "../../../assets/Picture (2).png";
import img3 from "../../../assets/Picture (3).png";
import img4 from "../../../assets/Picture (4).png";
import img5 from "../../../assets/Picture (5).png";
import img6 from "../../../assets/Picture (6).png";
import img7 from "../../../assets/Picture (7).png";
import img8 from "../../../assets/Picture (8).png";
import img9 from "../../../assets/Picture (9).png";

const EventItems = () => {
  const { eventItemsData } = useContext(Event360Context);
  const { data, isLoading, isError } = eventItemsData;

  const item1 = data?.data[0];
  const item2 = data?.data[1];
  const item3 = data?.data[2];
  const item4 = data?.data[3];
  const item5 = data?.data[4];

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }
  return (
    <>
      <section className="bg-no-repeat max-w-7xl mx-auto px-5 bg-right bg-auto bg-[url('https://i.ibb.co/6bF5CW4/Blue.png')]">
        {/* Event items */}
        <div className="mx-auto px-5 py-[140px] bg-no-repeat bg-left-top bg-auto bg-[url('https://i.ibb.co/Z1DGZFL/Purple.png')]">
          <h2 className="text-[32px] md:text-[64px] font-extrabold text-center">
            Event Items
          </h2>
          <p className="text-[14px] md:text-[18px] mx-auto text-center mb-[54px] max-w-2xl">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <Item1 item1={item1} />
            <Item2 item2={item2} />
            <Item3 item3={item3} />
            <Item4 item4={item4} />
            <Item5 item5={item5} />
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-5 mt-5">
            {data &&
              data?.data?.slice(5).map((i) => (
                <div className="p-6 bg-[#E4CCC6] rounded-md">
                  <img src={i.imgURL} alt="" />
                  <h3 className="text-[24px] font-medium mt-3">{i.name}</h3>
                </div>
              ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="max-w-[1280px] mx-auto px-5 pb-[160px] bg-no-repeat bg-right-bottom bg-auto bg-[url('https://i.ibb.co/qMPXLNw/Explosion.png')]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className=" bg-no-repeat bg-right-top bg-auto bg-[url('https://i.ibb.co/02Wf8Bb/Party.png')]">
              <h2 className="text-[32px] md:text-[64px] font-extrabold my-8">
                Gallery
              </h2>
              <p className="text-[14px] md:text-[18px] mx-auto mb-[35px] max-w-2xl">
                Ut posuere felis arcu tellus tempus in in ultricies. Gravida id
                nibh ornare viverra. Ultrices faucibus neque velit risus ac id
                lorem.Ut posuere felis arcu tellus tempus in in ultricies.
                Gravida id nibh ornare viverra. Ultrices faucibus neque velit
                risus ac id lorem.
              </p>
              <div className="flex items-center gap-[18px] mb-4">
                <img src={checkedGray} alt="checked" />
                <p className="text-[18px]">One day pas access all lecture</p>
              </div>
              <div className="flex items-center gap-[18px] mb-4">
                <img src={checkedGray} alt="checked" />
                <p className="text-[18px]">Lunch and Snack</p>
              </div>
              <div className="flex items-center gap-[18px] mb-4">
                <img src={checkedGray} alt="checked" />
                <p className="text-[18px]">Meet Event Speaker</p>
              </div>
              <div className="flex items-center gap-[18px]">
                <img src={checkedGray} alt="checked" />
                <p className="text-[18px]">Front Seat</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2">
              <div className="flex items-end justify-center gap-2 flex-col">
                <img src={img} alt="" />
                <img src={img1} alt="" />
              </div>
              <div className="flex items-center justify-center gap-2 flex-col">
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
              </div>
              <div className="flex items-center justify-center gap-2 flex-col">
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
              </div>
              <div className="flex items-start justify-center gap-2 flex-col">
                <img src={img8} alt="" />
                <img src={img9} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventItems;
