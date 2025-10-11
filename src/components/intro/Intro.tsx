import { useEffect, useState } from "react";
import SectionLayout from "../layout/Section";
import IntroCard from "./IntroCard";
import type { BlogTypes } from "../../constants/types/blogs.dt";

const Intro = () => {
  const [blogData, setBlogdata] = useState<BlogTypes[]>([]);

  useEffect(()=> {
    const fetchBlogs = async ()=> {
      try {
        const response = await fetch("/api/blogs.json");
        if(!response.ok) throw new Error("failed to load data");
        const data = await response.json();
        setBlogdata(data);
      } catch(error) {
        console.log("error", error)
      }
    }

    fetchBlogs();
  }, [])
  return (
    <SectionLayout className="intro -mt-[calc(var(--section-gap)+80px)] relative">
      <div className="container">
        <div className="grid grid-cols-12 gap-5">
          {blogData.map((blog, index) => (
            <IntroCard
              key={blog.id}
              {...blog}
              className={index === 0 ? "col-span-6" : "col-span-3"}
              titleClassName={index === 0 ? "fs-h2" : "fs-h5"}
            />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default Intro;
