import ProjectCard from "./ProjectCard";
import type { ProjectTypes } from "../../constants/types/projects.dt";
import SectionHeader from "../shared/SectionHeader";
import SectionLayout from "../layout/SectionLayout";
import Button from "../shared/ui/Button";
import { FaCircleChevronRight } from "react-icons/fa6";
import { useGetProjectsQuery } from "../../store/dataApi";

const Projects = () => {
  const { data: projectData = [], isLoading } = useGetProjectsQuery();

  const latestProjects = [...projectData].slice(0, 6);

  return (
    <SectionLayout id="portfolio" className="projects">
      <div className="container">
        {isLoading && <p>Loading projects...</p>}
        <div className="flex justify-between items-baseline gap-4">
          <SectionHeader
            title={
              <span className="highlight-arrow">
                Beyond Interfaces, Into Experiences
              </span>
            }
          />
          <Button
            variant="link"
            to="/portfolio"
            icon={
              <span className="absolute right-0 top-0 translate-y-[30%] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <FaCircleChevronRight />
              </span>
            }
            className="group relative transition-all duration-300 hover:px-[25px]"
          >
            See All Works
          </Button>
        </div>
        {!isLoading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-6 lg:gap-y-10">
            {latestProjects?.map((project: ProjectTypes) => (
              <ProjectCard
                key={project.id}
                {...project}
                className="h-[300px] sm:h-[250px] md:h-[300px] xl:h-[350px]"
              />
            ))}
          </div>
        )}
        <Button to="/services" variant="accent" className="sm:hidden block px-4 py-3 min-h-[50px] w-full rounded-full mt-6">See All Works</Button>
      </div>
    </SectionLayout>
  );
};

export default Projects;
