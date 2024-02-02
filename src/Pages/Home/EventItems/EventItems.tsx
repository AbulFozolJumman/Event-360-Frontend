import eventItem1 from "../../../assets/Event-item-1.png";
import eventItem2 from "../../../assets/Event-item-2.png";
import eventItem3 from "../../../assets/Event-item-3.png";
import eventItem4 from "../../../assets/Event-item-4.png";
import eventItem5 from "../../../assets/Event-item-5.png";
import collageImg from "../../../assets/Collage.png";
import checkedGray from "../../../assets/check-gray.png";

const EventItems = () => {
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
          <div className="flex justify-center gap-5">
            <div className="p-6 bg-[#C4E0E4] rounded-md">
              <img src={eventItem1} alt="" />
              <h3 className="text-[24px] font-medium mt-3">Event Item - 1</h3>
            </div>
            <div className="p-6 bg-[#FEE2F3] rounded-md">
              <img src={eventItem2} alt="" />
              <h3 className="text-[24px] font-medium mt-3">Event Item - 2</h3>
            </div>
          </div>
          <div className="flex justify-center gap-5 mt-5">
            <div className="p-6 bg-[#FEEFE2] rounded-md">
              <img src={eventItem3} alt="" />
              <h3 className="text-[24px] font-medium mt-3">Event Item - 3</h3>
            </div>
            <div className="p-6 bg-[#E2F8FC] rounded-md">
              <img src={eventItem4} alt="" />
              <h3 className="text-[24px] font-medium mt-3">Event Item - 4</h3>
            </div>
            <div className="p-6 bg-[#E4CCC6] rounded-md">
              <img src={eventItem5} alt="" />
              <h3 className="text-[24px] font-medium mt-3">Event Item - 5</h3>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="max-w-[1280px] mx-auto px-5 pb-[160px] bg-no-repeat bg-right-bottom bg-auto bg-[url('https://i.ibb.co/qMPXLNw/Explosion.png')]">
          <div className="flex justify-between items-center gap-5">
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
