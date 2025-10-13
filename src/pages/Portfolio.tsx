import PageLayout from "../components/layout/PageLayout";
import ProjectCard from "../components/projects/ProjectCard";
import PageHeader from "../components/shared/PageHeader";
import type { ProjectTypes } from "../constants/types/projects.dt";
import { useGetProjectsQuery } from "../store/dataApi";

const Portfolio = () => {
  const { data: projectData, isLoading } = useGetProjectsQuery();

  return (
    <PageLayout>
      <PageHeader title="Portfolio" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10">
        {projectData?.map((project: ProjectTypes) => (
          <ProjectCard key={project.id} {...project} className="h-[300px] sm:h-[250px] md:h-[300px] xl:h-[250px]" imgClassName="!max-w-[calc(100%-10px)]" />
        ))}
      </div>
    </PageLayout>
  );
};

export default Portfolio;
