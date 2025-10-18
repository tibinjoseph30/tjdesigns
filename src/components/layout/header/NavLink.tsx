type navLinkProps = {
  title: string;
  to: string;
  isActive?: boolean;
};

const NavLink = ({ title, to, isActive = false }: navLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const targetId = to.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerHeight = 80;

      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <a
      href={`#${to}`}
      onClick={handleClick}
      className={`${
        isActive ? "active text-white" : ""
      } inline-block font-medium transition-all duration-400 overflow-hidden relative px-4 py-2 text-[var(--nav-menu-color)] hover:text-white`}
    >
      <span className="relative">{title}</span>
    </a>
  );
};

export default NavLink;
