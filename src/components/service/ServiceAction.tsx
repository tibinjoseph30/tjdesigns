import { useRef } from "react";
import Button from "../shared/ui/Button";
import {motion, useInView} from "framer-motion";

const ServiceAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="p-7 h-full"
    >
      <p className="text-lg text-gray-500">
        Offer wide range of design solutions that cover every aspect of branding
        and digital presence.
      </p>
      <Button
        variant="default"
        to="/services"
        className="rounded-full px-4 py-3 mt-6 w-full"
      >
        See All Services
      </Button>
    </motion.article>
  );
};

export default ServiceAction;
