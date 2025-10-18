import { useRef } from "react";
import type { ServiceTypes } from "../../constants/types/services.dt";
import { motion, useInView } from "framer-motion";

const ServiceCard = ({ id, title, description, keywords }: ServiceTypes) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={`${
        id === 1
          ? "bg-red-100/75"
          : id === 2
          ? "bg-blue-100/75"
          : "bg-green-100/75"
      } rounded-[var(--global-card-radius)] p-7 flex flex-col justify-center gap-8 h-full`}
    >
      <span className="inline-flex items-center justify-center rounded-full w-[60px] h-[60px] font-semibold border-2 border-dashed border-[var(--accent-color)]/30">
        <span className="inline-flex items-center justify-center bg-[var(--accent-color)]/15 font-semibold rounded-full w-[50px] h-[50px]">
          {id}
        </span>
      </span>
      <header>
        <h5 className="text-2xl font-semibold mb-3">{title}</h5>
        <p className="text-2xl">{description}</p>
      </header>
      <ul className="flex flex-wrap gap-2">
        {(Array.isArray(keywords)
          ? keywords
          : Object.values(keywords || {})
        ).map((item, index) => (
          <li
            key={index}
            className="inline-block text-sm border border-[var(--border-color)] px-4 py-1 rounded-full"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.article>
  );
};

export default ServiceCard;
