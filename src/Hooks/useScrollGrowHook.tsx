import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const useScrollGrowHook = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["0 1", "1 1"],
  });
  const scaleValues = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityValues = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  const style = {
    scale: scaleValues,
    opacity: opacityValues,
  };

  return {
    divRef,
    style,
  };
};

export default useScrollGrowHook;
