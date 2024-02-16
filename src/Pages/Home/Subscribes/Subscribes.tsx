const Subscribes = () => {
  const handleClick = () => {
    alert("You are now a subscriber");
  };
  return (
    <>
      <section
        id="subscribe"
        className="bg-gradient-to-r from-[#E2F8FC] to-[#FEEFE2] px-5 py-20 md:py-24"
      >
        <h2 className="text-[32px] md:text-[64px] font-semibold md:text-center">
          Subscribe Us
        </h2>
        <p className="md:text-[18px] mb-7 md:text-center">
          Subscribe to newsletter and never miss the new post every week
        </p>
        <div className="flex justify-center flex-col md:flex-row gap-2">
          <input
            className="md:w-[456px] rounded-[5px] w-full h-[40px] border border-black md:pl-8 pl-5 outline-[#8e37ff] text-[#5a01cb] font-bold"
            type="text"
            placeholder="Enter your email here"
          />
          <a
            onClick={handleClick}
            className="font-semibold bg-[#5a01cb] h-[40px] flex items-center justify-center w-[120px] text-center text-white rounded-[5px] hover:bg-white border border-[#5a01cb] hover:text-[#5a01cb]"
            href="#Subscribe"
          >
            Subscribe
          </a>
        </div>
      </section>
    </>
  );
};

export default Subscribes;
