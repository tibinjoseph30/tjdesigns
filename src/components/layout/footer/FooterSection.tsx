type sectionLayoutProps = {
  children: React.ReactNode;
  title: string;
  classname?: string;
};

const FooterSection = ({children, title, classname}: sectionLayoutProps) => {
    return(
        <section className={classname}>
            <h5 className="text-xl mb-5 font-semibold">{title}</h5>
            {children}
        </section>
    )
}

export default FooterSection;