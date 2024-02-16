/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { motion } from "framer-motion";
import useScrollGrowHook from "../../Hooks/useScrollGrowHook";

const Item2 = ({ item2 }) => {
  const { style, divRef } = useScrollGrowHook();
  return (
    <motion.div
      style={style}
      ref={divRef}
      className="p-6 md:col-span-6 bg-[#FEE2F3] rounded-md"
    >
      <img className="w-full" src={item2.imgURL} alt="" />
      <h3 className="text-[24px] font-medium mt-3">{item2.name}</h3>
    </motion.div>
  );
};

export default Item2;
