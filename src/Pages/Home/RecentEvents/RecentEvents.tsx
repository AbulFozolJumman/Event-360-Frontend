import rc1 from "../../../assets/rc-1.png";
import rc2 from "../../../assets/rc-2.png";
import rc3 from "../../../assets/rc-3.png";
import rc4 from "../../../assets/rc-4.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: {
    items: 1,
  },
  568: {
    items: 2,
  },
  1024: {
    items: 4,
    itemsFit: "contain",
  },
};

const RecentEvents = () => {
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
          <div className="max-w-[266px]">
            <img className="rounded-t-md" src={rc1} alt="" />
            <div className="p-4 bg-[#F2F2F2] rounded-b-md">
              <p>Flower Decorations</p>
              <p className="text-[#475569] text-sm">by Melvina Spring</p>
            </div>
          </div>
          <div className="max-w-[266px]">
            <img className="rounded-t-md" src={rc2} alt="" />
            <div className="p-4 bg-[#F2F2F2] rounded-b-md">
              <p>Flower Decorations</p>
              <p className="text-[#475569] text-sm">by Melvina Spring</p>
            </div>
          </div>
          <div className="max-w-[266px]">
            <img className="rounded-t-md" src={rc3} alt="" />
            <div className="p-4 bg-[#F2F2F2] rounded-b-md">
              <p>Splash</p>
              <p className="text-[#475569] text-sm">by Rwanda Melflor</p>
            </div>
          </div>
          <div className="max-w-[266px]">
            <img className="rounded-t-md" src={rc4} alt="" />
            <div className="p-4 bg-[#F2F2F2] rounded-b-md">
              <p>Colorful Face</p>
              <p className="text-[#475569] text-sm">by Melvina Spring</p>
            </div>
          </div>
          <div className="max-w-[266px]">
            <img className="rounded-t-md" src={rc1} alt="" />
            <div className="p-4 bg-[#F2F2F2] rounded-b-md">
              <p>Flower Decorations</p>
              <p className="text-[#475569] text-sm">by Melvina Spring</p>
            </div>
          </div>
          <div className="max-w-[266px]">
            <img className="rounded-t-md" src={rc2} alt="" />
            <div className="p-4 bg-[#F2F2F2] rounded-b-md">
              <p>Flower Decorations</p>
              <p className="text-[#475569] text-sm">by Melvina Spring</p>
            </div>
          </div>
          <div className="max-w-[266px]">
            <img className="rounded-t-md" src={rc3} alt="" />
            <div className="p-4 bg-[#F2F2F2] rounded-b-md">
              <p>Splash</p>
              <p className="text-[#475569] text-sm">by Rwanda Melflor</p>
            </div>
          </div>
          <div className="max-w-[266px]">
            <img className="rounded-t-md" src={rc4} alt="" />
            <div className="p-4 bg-[#F2F2F2] rounded-b-md">
              <p>Colorful Face</p>
              <p className="text-[#475569] text-sm">by Melvina Spring</p>
            </div>
          </div>
          <div className="max-w-[266px]">
            <img className="rounded-t-md" src={rc1} alt="" />
            <div className="p-4 bg-[#F2F2F2] rounded-b-md">
              <p>Flower Decorations</p>
              <p className="text-[#475569] text-sm">by Melvina Spring</p>
            </div>
          </div>
          <div className="max-w-[266px]">
            <img className="rounded-t-md" src={rc2} alt="" />
            <div className="p-4 bg-[#F2F2F2] rounded-b-md">
              <p>Flower Decorations</p>
              <p className="text-[#475569] text-sm">by Melvina Spring</p>
            </div>
          </div>
          <div className="max-w-[266px]">
            <img className="rounded-t-md" src={rc3} alt="" />
            <div className="p-4 bg-[#F2F2F2] rounded-b-md">
              <p>Splash</p>
              <p className="text-[#475569] text-sm">by Rwanda Melflor</p>
            </div>
          </div>
          <div className="max-w-[266px]">
            <img className="rounded-t-md" src={rc4} alt="" />
            <div className="p-4 bg-[#F2F2F2] rounded-b-md">
              <p>Colorful Face</p>
              <p className="text-[#475569] text-sm">by Melvina Spring</p>
            </div>
          </div>
        </AliceCarousel>
      </section>
    </>
  );
};

export default RecentEvents;
