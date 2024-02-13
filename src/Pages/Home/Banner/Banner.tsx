import bannerImage from "../../../assets/banner.png";
import { motion } from "framer-motion";

const Banner = () => {
  const banner = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.5,
        delayChildren: 0.5,
      },
    },
  };

  const bannerChildren = {
    hidden: { y: -300, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      <motion.header
        variants={banner}
        initial="hidden"
        animate="visible"
        className="max-w-[1280px] mx-auto px-5"
      >
        <motion.h1
          variants={bannerChildren}
          className="text-[32px] md:text-[64px] font-extrabold text-center uppercase"
        >
          Brand New event Packages
        </motion.h1>
        <motion.h2
          variants={bannerChildren}
          className="text-[32px] md:text-[56px] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FE8900] to-[#5A01CB]"
        >
          For Winter
        </motion.h2>
        <motion.p
          variants={bannerChildren}
          className="text-[18px] mx-auto text-center mb-[42px] max-w-2xl"
        >
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </motion.p>
        <motion.div variants={bannerChildren}>
          <img
            className="mx-auto mb-[72px]"
            src={bannerImage}
            alt="Banner image"
          />
        </motion.div>
      </motion.header>
    </>
  );
};

export default Banner;
