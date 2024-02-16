/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { motion } from "framer-motion";
import useScrollGrowHook from "../../Hooks/useScrollGrowHook";

const Item1 = ({ item1 }) => {
  const { style, divRef } = useScrollGrowHook();
  return (
    <motion.div
      style={style}
      ref={divRef}
      className="p-6 md:col-span-6 bg-[#C4E0E4]  rounded-md"
    >
      <img className="w-full" src={item1.imgURL} alt="" />
      <h3 className="text-[24px] font-medium mt-3">{item1.name}</h3>
    </motion.div>
  );
};

export default Item1;
