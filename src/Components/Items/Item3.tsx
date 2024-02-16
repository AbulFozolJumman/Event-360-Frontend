/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { motion } from "framer-motion";
import useScrollGrowHook from "../../Hooks/useScrollGrowHook";

const Item3 = ({ item3 }) => {
  const { style, divRef } = useScrollGrowHook();
  return (
    <motion.div
      style={style}
      ref={divRef}
      className="p-6 md:col-span-4 bg-[#FEEFE2] rounded-md"
    >
      <img className="w-full" src={item3.imgURL} alt="" />
      <h3 className="text-[24px] font-medium mt-3">{item3.name}</h3>
    </motion.div>
  );
};

export default Item3;
