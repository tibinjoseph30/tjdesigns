import type { ServiceTypes } from "../../constants/types/services.dt";

const ServiceCard = ({ id, title, description, keywords }: ServiceTypes) => {
  return (
    <article
      className={`${
        id === 1 ? "bg-red-100/75" : id === 2 ? "bg-blue-100/75" : "bg-green-100/75"
      } rounded-[var(--global-card-radius)] p-7 flex flex-col justify-center gap-8`}
    >
      <span className="inline-flex items-center justify-center rounded-full w-[60px] h-[60px] font-semibold border-2 border-dashed border-[var(--accent-color)]/30">
        <span className="inline-flex items-center justify-center bg-[var(--accent-color)]/15 font-semibold rounded-full w-[50px] h-[50px]">{id}</span>
      </span>
      <header>
        <h5 className="fs-h5 font-semibold mb-3">{title}</h5>
        <p className="fs-h5">{description}</p>
      </header>
      <ul className="flex flex-wrap gap-2">
        {Object.values(keywords).map((item, index) => (
          <li
            key={index}
            className="inline-block text-sm border border-[var(--border-color)] px-4 py-1 rounded-full"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ServiceCard;
