import Marquee from "react-fast-marquee";
import user1 from "../../../assets/user-1.png";
import user2 from "../../../assets/user-2.png";
import user3 from "../../../assets/user-3.png";

const Review = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-[#6a0de0] to-[#1e0044] py-20">
        <h2 className="text-[32px] md:text-[64px] font-extrabold text-white mb-20 max-w-[1280px] mx-auto px-5">
          What everyone says
        </h2>
        {/* Marquee */}
        <Marquee pauseOnHover>
          <div className="p-8 rounded-md w-[412px] bg-[#633BAB] mx-3">
            <p className="text-[14px] md:text-[18px] text-white mb-8">
              Lacus vestibulum ultricies mi risus, duis non, volutpat nullam
              non. Magna congue nisi maecenas elit aliquet eu sed consectetur.
              Vitae quis cras vitae praesent morbi adipiscing purus consectetur
              mi.
            </p>
            <div className="flex items-center justify-start gap-5">
              <img src={user1} alt="" />
              <div className="">
                <h3 className="text-[18px] text-white">Hellen Jimmy</h3>
                <p className="text-[#8190A6]">Financial Counselor</p>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-md w-[412px] bg-[#633BAB] mx-3">
            <p className="text-[14px] md:text-[18px] text-white mb-8">
              Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut
              id. In tortor turpis viverra sagittis ultrices nisi, nec tortor.
              Vestibulum, ultrices ultricies neque, hac ultricies dolor.
            </p>
            <div className="flex items-center justify-start gap-5">
              <img src={user2} alt="" />
              <div className="">
                <h3 className="text-[18px] text-white">Ralph Edwards</h3>
                <p className="text-[#8190A6]">Math Teacher</p>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-md w-[412px] bg-[#633BAB] mx-3">
            <p className="text-[14px] md:text-[18px] text-white mb-8">
              Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et
              cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat
              tellus, congue malesuada sit nisl donec a.
            </p>
            <div className="flex items-center justify-start gap-5">
              <img src={user3} alt="" />
              <div className="">
                <h3 className="text-[18px] text-white">Hellena John</h3>
                <p className="text-[#8190A6]">Psychology Student</p>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-md w-[412px] bg-[#633BAB] mx-3">
            <p className="text-[14px] md:text-[18px] text-white mb-8">
              Lacus vestibulum ultricies mi risus, duis non, volutpat nullam
              non. Magna congue nisi maecenas elit aliquet eu sed consectetur.
              Vitae quis cras vitae praesent morbi adipiscing purus consectetur
              mi.
            </p>
            <div className="flex items-center justify-start gap-5">
              <img src={user1} alt="" />
              <div className="">
                <h3 className="text-[18px] text-white">Hellen Jummy</h3>
                <p className="text-[#8190A6]">Financial Counselor</p>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-md w-[412px] bg-[#633BAB] mx-3">
            <p className="text-[14px] md:text-[18px] text-white mb-8">
              Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut
              id. In tortor turpis viverra sagittis ultrices nisi, nec tortor.
              Vestibulum, ultrices ultricies neque, hac ultricies dolor.
            </p>
            <div className="flex items-center justify-start gap-5">
              <img src={user2} alt="" />
              <div className="">
                <h3 className="text-[18px] text-white">Ralph Edwards</h3>
                <p className="text-[#8190A6]">Math Teacher</p>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-md w-[412px] bg-[#633BAB] mx-3">
            <p className="text-[14px] md:text-[18px] text-white mb-8">
              Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et
              cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat
              tellus, congue malesuada sit nisl donec a.
            </p>
            <div className="flex items-center justify-start gap-5">
              <img src={user3} alt="" />
              <div className="">
                <h3 className="text-[18px] text-white">Hellena John</h3>
                <p className="text-[#8190A6]">Psychology Student</p>
              </div>
            </div>
          </div>
        </Marquee>
      </section>
    </>
  );
};

export default Review;
