type sectionHeaderProps = {
    title: React.ReactNode
}

const SectionHeader = ({title}: sectionHeaderProps) => {
  return (
    <header>
      <h2 className="text-3xl lg:text-4xl xl:text-5xl leading-tight font-bold mb-5 lg:mb-[var(--section-head-gap)]">
        {title}
      </h2>
    </header>
  );
};

export default SectionHeader;
