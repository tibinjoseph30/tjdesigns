import { Link } from "react-router-dom";
import type { BlogTypes } from "../../constants/types/blogs.dt";

const BlogCard = ({ id, thumbnail, category, title, date }: BlogTypes) => {
  return (
    <article>
      <header className="group h-[250px] overflow-hidden rounded-[var(--global-card-radius)] mb-7">
        <img
          src={thumbnail}
          alt={thumbnail}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </header>
      <section>
        <span className="inline-block bg-[var(--accent-color)]/15 text-[var(--accent-color)] px-4 py-1 rounded-full text-sm font-medium">
          {category}
        </span>
        <Link to={`/blogs/${id}`}>
          <h5 className="text-2xl font-semibold my-4 line-clamp-2">{title}</h5>
        </Link>
      </section>
      <footer className="flex justify-between items-center gap-4">
        <p>{date}</p>
      </footer>
    </article>
  );
};

export default BlogCard;
