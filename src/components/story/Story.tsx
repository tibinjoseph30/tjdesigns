import SectionLayout from "../layout/SectionLayout";
import { useGetBlogsQuery } from "../../store/dataApi";
import Button from "../shared/ui/Button";
import { FaCircleChevronRight } from "react-icons/fa6";
import StoryCard from "./StoryCard";

const Story = () => {
  const { data: blogData } = useGetBlogsQuery();

  return (
    <SectionLayout className="intro -mt-[calc(var(--section-gap)+80px)] relative">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-12 gap-5">
          {blogData?.map((blog, index) => (
            <StoryCard
              key={blog.id}
              {...blog}
              className={
                index === 0
                  ? "xl:col-span-6 row-span-2 lg:row-span-1"
                  : index === 1
                  ? "xl:col-span-3 sm:min-h-[200px] sm:block hidden"
                  : "xl:col-span-3 md:min-h-[350px] sm:block hidden"
              }
              titleClassName={
                index === 0 ? "text-2xl xl:text-4xl leading-tight" : "text-2xl"
              }
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
