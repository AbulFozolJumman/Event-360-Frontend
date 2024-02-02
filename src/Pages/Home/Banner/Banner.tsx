import bannerImage from "../../../assets/banner.png";

const Banner = () => {
  return (
    <>
      <header className="max-w-[1280px] mx-auto px-5">
        <h1 className="text-[64px] font-extrabold text-center uppercase">
          Brand New event Packages
        </h1>
        <h2 className="text-[56px] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FE8900] to-[#5A01CB]">
          For Winter
        </h2>
        <p className="text-[18px] mx-auto text-center mb-[42px] max-w-2xl">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
        <img
          className="mx-auto mb-[72px]"
          src={bannerImage}
          alt="Banner image"
        />
      </header>
    </>
  );
};

export default Banner;
