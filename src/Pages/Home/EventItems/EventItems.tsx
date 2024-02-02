import eventItem1 from "../../../assets/Event-item-1.png";
import eventItem2 from "../../../assets/Event-item-2.png";
import eventItem3 from "../../../assets/Event-item-3.png";
import eventItem4 from "../../../assets/Event-item-4.png";
import eventItem5 from "../../../assets/Event-item-5.png";
// import purpleBg from "../../../assets/Purple.png";
// import blueBg from "../../../assets/Blue.png";
// import partyBg from "../../../assets/Party.png";
// import explotionBg from "../../../assets/Explosion.png";

const EventItems = () => {
  return (
    <>
      <section className="max-w-[1280px] mx-auto px-5 py-[140px] bg-no-repeat bg-left-top bg-auto bg-[url('https://i.ibb.co/Z1DGZFL/Purple.png')]">
        <h2 className="text-[64px] font-extrabold text-center uppercase">
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
      </section>
    </>
  );
};

export default EventItems;
