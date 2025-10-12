import { Link } from "react-router-dom";
import type { ProjectTypes } from "../../constants/types/projects.dt";
import { getBackgroundStyles } from "../../constants/utils/bgUtils";

type projectCardProps = ProjectTypes & {
  className?: string;
}

const ProjectCard = ({ id, title, thumbnail, keywords, bgColors, className }: projectCardProps) => {
  const getKeywordColor = (keyword: string) => {
    switch (keyword.toUpperCase()) {
      case "UI/UX":
        return "bg-blue-600";
      case "WEB":
        return "bg-red-600";
      case "LOGO":
        return "bg-green-600";
      default:
        return "bg-gray-600";
    }
  };
  return (
    <article>
      <Link to={`/portfolio/${id}`}>
        <figure
          className={`${className} group flex items-center px-6 pt-6 overflow-hidden rounded-[var(--global-card-radius)] bg-slate-200 mb-4 relative`}
          style={getBackgroundStyles(bgColors)}
        >
          <img
            src={thumbnail}
            alt={thumbnail}
            className="w-full max-w-[calc(100%-50px)] mx-auto"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-center p-4 transition duration-300 transform opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent to-black/60 h-1/3">
            <figcaption className="text-2xl font-semibold text-white">
              {title}
            </figcaption>
          </div>
        </figure>
      </Link>
      <div className="flex justify-between">
        <header>
          <h6 className="font-semibold">{title}</h6>
        </header>
        {keywords && keywords.length > 0 && (
          <ul className="inline-flex items-center gap-2 text-sm text-white uppercase">
            {(Array.isArray(keywords) ? keywords : [keywords]).map(
              (keyword, index) => (
                <li
                  key={index}
                  className={`rounded-full px-2 ${getKeywordColor(keyword)}`}
                >
                  {keyword}
                </li>
              )
            )}
          </ul>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
