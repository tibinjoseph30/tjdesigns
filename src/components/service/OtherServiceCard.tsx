import { useRef } from "react";
import type { ServiceTypes } from "../../constants/types/services.dt";
import { motion, useInView } from "framer-motion";

const OtherServiceCard = ({ id, title }: ServiceTypes) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="flex items-center gap-6 py-4 [&:not(:first-child)]:border-t [&:not(:first-child)]:border-slate-300"
    >
      <span className="font-semibold">{id}</span>
      <h5 className="text-2xl font-semibold">{title}</h5>
    </motion.article>
  );
};

export default OtherServiceCard;
