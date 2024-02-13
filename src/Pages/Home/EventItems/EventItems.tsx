// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import collageImg from "../../../assets/Collage.png";
import checkedGray from "../../../assets/check-gray.png";
import { useContext } from "react";
import { Event360Context } from "../../../Provider/Event360Provider";
import Loader from "../../../Components/Loader/Loader";

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
      <section className="bg-no-repeat bg-right bg-auto bg-[url('https://i.ibb.co/6bF5CW4/Blue.png')]">
        {/* Event items */}
        <div className="mx-auto px-5 py-[140px] bg-no-repeat bg-left-top bg-auto bg-[url('https://i.ibb.co/Z1DGZFL/Purple.png')]">
          <h2 className="text-[64px] font-extrabold text-center">
            Event Items
          </h2>
          <p className="text-[18px] mx-auto text-center mb-[54px] max-w-2xl">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-5">
            <div className="p-6 bg-[#C4E0E4] rounded-md">
              <img src={item1.imgURL} alt="" />
              <h3 className="text-[24px] font-medium mt-3">{item1.name}</h3>
            </div>
            <div className="p-6 bg-[#FEE2F3] rounded-md">
              <img src={item2.imgURL} alt="" />
              <h3 className="text-[24px] font-medium mt-3">{item2.name}</h3>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-5 mt-5">
            <div className="p-6 bg-[#FEEFE2] rounded-md">
              <img src={item3.imgURL} alt="" />
              <h3 className="text-[24px] font-medium mt-3">{item3.name}</h3>
            </div>
            <div className="p-6 bg-[#E2F8FC] rounded-md">
              <img src={item4.imgURL} alt="" />
              <h3 className="text-[24px] font-medium mt-3">{item4.name}</h3>
            </div>
            <div className="p-6 bg-[#E4CCC6] rounded-md">
              <img src={item5.imgURL} alt="" />
              <h3 className="text-[24px] font-medium mt-3">{item5.name}</h3>
            </div>
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <div className=" bg-no-repeat bg-right-top bg-auto bg-[url('https://i.ibb.co/02Wf8Bb/Party.png')]">
              <h2 className="text-[64px] font-extrabold my-8">Gallery</h2>
              <p className="text-[18px] mx-auto mb-[35px] max-w-2xl">
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
            <div>
              <img src={collageImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventItems;
