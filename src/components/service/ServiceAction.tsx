import Button from "../shared/ui/Button";

const ServiceAction = () => {
  return (
    <article className="p-7 h-full">
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
    </article>
  );
};

export default ServiceAction;
