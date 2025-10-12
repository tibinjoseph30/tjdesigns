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
      <div className="grid grid-cols-4 gap-x-5 gap-y-10">
        {projectData?.map((project: ProjectTypes) => (
          <ProjectCard key={project.id} {...project} className="h-[250px]" />
        ))}
      </div>
    </PageLayout>
  );
};

export default Portfolio;
