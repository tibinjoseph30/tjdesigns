import { Link } from "react-router-dom";
import type { BlogTypes } from "../../constants/types/blogs.dt";

type StoryCardProps = BlogTypes & {
  className?: string;
  titleClassName?: string;
};

const StoryCard = ({
  id,
  category,
  thumbnail,
  title,
  date,
  className,
  titleClassName,
}: StoryCardProps) => {
  return (
    <figure
      className={`${className} group relative rounded-[var(--global-card-radius)] overflow-hidden`}
    >
      <img
        src={thumbnail}
        alt={thumbnail}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        width="547"
        height="460"
      />
      <div className="absolute bottom-0 left-0 right-0 p-7 text-white bg-gradient-to-b from-transparent to-black/70">
        <figcaption className="px-4 py-1 rounded-full bg-blue-600 inline-block mb-2">
          {category}
        </figcaption>
        <Link to={`/blogs/${id}`}>
          <h5 className={`${titleClassName} font-semibold`}>{title}</h5>
        </Link>
        <p className="mt-2">{date}</p>
      </div>
    </figure>
  );
};

export default StoryCard;
