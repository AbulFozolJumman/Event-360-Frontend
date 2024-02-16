/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { motion } from "framer-motion";
import useScrollGrowHook from "../../Hooks/useScrollGrowHook";

const Item4 = ({ item4 }) => {
  const { style, divRef } = useScrollGrowHook();
  return (
    <motion.div
      style={style}
      ref={divRef}
      className="p-6 md:col-span-4 bg-[#E2F8FC] rounded-md"
    >
      <img className="w-full" src={item4.imgURL} alt="" />
      <h3 className="text-[24px] font-medium mt-3">{item4.name}</h3>
    </motion.div>
  );
};

export default Item4;
