import PageLayout from "../components/layout/PageLayout";
import PageHeader from "../components/shared/PageHeader";
import { useGetBlogsQuery } from "../store/dataApi";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { data: blogData, isLoading } = useGetBlogsQuery();
  const { id } = useParams();

  const blog = blogData?.find((b) => String(b.id) === id);

  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto">
        <header>
          <PageHeader title={blog?.title} />
          <div className="flex items-center gap-5">
            <span className="inline-block bg-[var(--accent-color)]/15 text-[var(--accent-color)] px-4 py-1 rounded-full text-sm font-medium">
              {blog?.category}
            </span>
            <p>{blog?.date}</p>
          </div>
        </header>
        <figure className="my-12">
          <img
            src={blog?.image}
            alt={blog?.image}
            className="w-full rounded-xl"
          />
          <figcaption className="mt-8">{blog?.description}</figcaption>
        </figure>
      </article>
    </PageLayout>
  );
};

export default BlogDetails;
