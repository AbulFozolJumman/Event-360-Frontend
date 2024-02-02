import serviceImg1 from "../../../assets/service image 1.png";
import serviceImg2 from "../../../assets/service image 2.png";
import checked from "../../../assets/checked.png";
const Services = () => {
  return (
    <>
      <section className="max-w-[1280px] mx-auto px-5">
        <h2 className="text-[64px] font-extrabold text-center uppercase">
          Our Services
        </h2>
        <p className="text-[18px] mx-auto text-center mb-[54px] max-w-2xl">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
        <div className="flex gap-5">
          <div className="max-w-[412px] rounded-md w-full p-[25px] bg-[#F6F2FD]">
            <img src={serviceImg1} alt="" />
            <h2 className="font-extrabold text-[32px] mt-6 mb-3">
              Corporate event
            </h2>
            <div className="flex items-center gap-[18px] mb-4">
              <img src={checked} alt="checked" />
              <p className="text-[18px]">One day pas access all lecture</p>
            </div>
            <div className="flex items-center gap-[18px] mb-4">
              <img src={checked} alt="checked" />
              <p className="text-[18px]">Lunch and Snack</p>
            </div>
            <div className="flex items-center gap-[18px] mb-4">
              <img src={checked} alt="checked" />
              <p className="text-[18px]">Meet Event Speaker</p>
            </div>
            <div className="flex items-center gap-[18px]">
              <img src={checked} alt="checked" />
              <p className="text-[18px]">Front Seat</p>
            </div>
          </div>
          <div className="max-w-[412px] rounded-md w-full p-[25px] bg-[#F6F2FD]">
            <img src={serviceImg2} alt="" />
            <h2 className="font-extrabold text-[32px] mt-6 mb-3">
              Organization event
            </h2>
            <div className="flex items-center gap-[18px] mb-4">
              <img src={checked} alt="checked" />
              <p className="text-[18px]">One day pas access all lecture</p>
            </div>
            <div className="flex items-center gap-[18px] mb-4">
              <img src={checked} alt="checked" />
              <p className="text-[18px]">Lunch and Snack</p>
            </div>
            <div className="flex items-center gap-[18px] mb-4">
              <img src={checked} alt="checked" />
              <p className="text-[18px]">Meet Event Speaker</p>
            </div>
            <div className="flex items-center gap-[18px]">
              <img src={checked} alt="checked" />
              <p className="text-[18px]">Front Seat</p>
            </div>
          </div>
          <div className="max-w-[412px] rounded-md w-full p-[25px] bg-[#E6D9F7]">
            <h2 className="font-extrabold text-[32px] mb-3">Wedding event</h2>
            <p>
              Ut posuere felis arcu tellus tempus in in ultricies. Gravida id
              nibh ornare viverra. Ultrices faucibus neque velit risus ac id
              lorem.Ut posuere felis arcu tellus tempus in in ultricies.Ut
              posuere felis arcu tellus tempus in in ultricies.
            </p>
            <div className="flex items-center gap-[18px] mb-4 mt-8">
              <img src={checked} alt="checked" />
              <p className="text-[18px]">One day pas access all lecture</p>
            </div>
            <div className="flex items-center gap-[18px] mb-4">
              <img src={checked} alt="checked" />
              <p className="text-[18px]">Lunch and Snack</p>
            </div>
            <div className="flex items-center gap-[18px] mb-4">
              <img src={checked} alt="checked" />
              <p className="text-[18px]">Meet Event Speaker</p>
            </div>
            <div className="flex items-center gap-[18px] mb-12">
              <img src={checked} alt="checked" />
              <p className="text-[18px]">Front Seat</p>
            </div>
            <button className="w-full bg-[#5A01CB] rounded-md py-4 text-white font-bold">
              Check it out
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
