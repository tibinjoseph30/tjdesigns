import SectionLayout from "../layout/SectionLayout";
import StoryCard from "./storyCard";
import { useGetBlogsQuery } from "../../store/dataApi";
import Button from "../shared/ui/Button";
import { FaCircleChevronRight } from "react-icons/fa6";

const Story = () => {
  const { data: blogData, isLoading } = useGetBlogsQuery();

  return (
    <SectionLayout className="intro -mt-[calc(var(--section-gap)+80px)] relative">
      <div className="container">
        <div className="grid grid-cols-12 gap-5">
          {blogData?.map((blog, index) => (
            <StoryCard
              key={blog.id}
              {...blog}
              className={index === 0 ? "col-span-6" : "col-span-3"}
              titleClassName={index === 0 ? "fs-h2" : "fs-h5"}
            />
          ))}
        </div>
        <div className="flex justify-end mt-5">
          <Button
            variant="link"
            to="/blogs"
            icon={
              <span className="absolute right-0 top-0 translate-y-[30%] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <FaCircleChevronRight />
              </span>
            }
            className="group relative transition-all duration-300 hover:px-[25px]"
          >
            See All Stories
          </Button>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Story;
