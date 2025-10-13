type sectionLayoutProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const SectionLayout = ({ children, className, id }: sectionLayoutProps) => {
  return (
    <section id={id} className={`${className} py-5 lg:py-[var(--section-gap)]`}>
      {children}
    </section>
  );
};

export default SectionLayout;
