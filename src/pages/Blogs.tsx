import PageLayout from "../components/layout/PageLayout";
import PageHeader from "../components/shared/PageHeader";
import BlogCard from "../components/story/BlogCard";
import { useGetBlogsQuery } from "../store/dataApi";

const Blogs = () => {
  const { data: blogData } = useGetBlogsQuery();

  return (
    <PageLayout>
      <PageHeader title="Stories" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10">
        {blogData?.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Blogs;
