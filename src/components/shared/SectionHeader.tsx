type sectionHeaderProps = {
    title: React.ReactNode
}

const SectionHeader = ({title}: sectionHeaderProps) => {
  return (
    <header>
      <h2 className="fs-h2 font-bold mb-[var(--section-head-gap)]">
        {title}
      </h2>
    </header>
  );
};

export default SectionHeader;
