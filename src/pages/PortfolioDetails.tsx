import { useParams } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import PageHeader from "../components/shared/PageHeader";
import { useGetProjectsQuery } from "../store/dataApi";
import { getBackgroundStyles } from "../constants/utils/bgUtils";
import Button from "../components/shared/ui/Button";

const PortfolioDetails = () => {
  const { data: projectData, isLoading } = useGetProjectsQuery();
  const { id } = useParams();

  const project = projectData?.find((p) => String(p.id) === id);
  return (
    <PageLayout>
      <article className="max-w-4xl mx-auto">
        <PageHeader title={project?.title} />
        <p className="mb-12">{project?.description}</p>
        {project?.url && (
          <Button
            variant="accent"
            to={project?.url}
            className="w-full sm:w-auto px-8 py-3 rounded-xl text-[18px] !mb-5 transition-all duration-300 hover:bg-[var(--primary-color)] hover:text-[var(--accent-color)]"
          >
            Live Preview
          </Button>
        )}
        {project?.image && (
          <div
            className="p-6 sm:p-12 rounded-xl"
            style={getBackgroundStyles(project?.bgColors)}
          >
            <img
              src={project?.image}
              alt={project?.image}
              width="500"
              height="600"
              className="w-full"
            />
          </div>
        )}
      </article>
    </PageLayout>
  );
};

export default PortfolioDetails;
