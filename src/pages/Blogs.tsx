import PageLayout from "../components/layout/PageLayout";
import PageHeader from "../components/shared/PageHeader";
import BlogCard from "../components/story/BlogCard";
import { useGetBlogsQuery } from "../store/dataApi";

const Blogs = () => {
  const { data: blogData, isLoading } = useGetBlogsQuery();

  return (
    <PageLayout>
      <PageHeader title="Stories" />
      <div className="grid grid-cols-4 gap-5">
        {blogData?.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Blogs;
