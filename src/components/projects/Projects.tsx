import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import type { ProjectTypes } from "../../constants/types/projects.dt";
import SectionHeader from "../shared/SectionHeader";
import SectionLayout from "../layout/Section";





import Button from "../shared/ui/Button";
import { FaCircleChevronRight } from "react-icons/fa6";

const Projects = () => {
  const [projectData, setProjectData] = useState<ProjectTypes[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProjectData(data);
      } catch (error: any) {
        console.log("Fetch error: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);
  return (
    <SectionLayout id="portfolio" className="projects">
      <div className="container">
        {loading && <p>Loading projects...</p>}
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
              <span className="absolute bottom-0 right-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <FaCircleChevronRight />
              </span>
            }
            className="group relative transition-all duration-300 hover:px-[25px]"
          >
            See Sll Works
          </Button>
        </div>
        {!loading && (
          <div className="grid grid-cols-3 gap-x-5 gap-y-10">
            {projectData.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        )}
      </div>
    </SectionLayout>
  );
};

export default Projects;
