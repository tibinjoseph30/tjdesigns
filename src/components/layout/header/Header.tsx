import { Link } from "react-router-dom";
import logo from "../../../assets/images/tj-designs-logo.svg";
import NavLink from "./NavLink";
import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import MobileNavLink from "./MobilenavLink";

const Header = () => {
  const navMenu = [
    { title: "Home", to: "home" },
    { title: "Services", to: "services" },
    { title: "Portfolio", to: "portfolio" },
    { title: "Get in Touch", to: "contact" },
  ];

  const mobileNavMenu = [
    { title: "Services", to: "/services" },
    { title: "Portfolio", to: "/portfolio" },
    { title: "Blogs", to: "/blogs" },
    { title: "Privacy Policy", to: "" },
    { title: "Terms & Conditions", to: "" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsopen] = useState(false);

  const toggleMenu = () => setIsopen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`${
        scrolled
          ? "bg-[var(--accent-color)]/90 backdrop-blur-md h-[calc(var(--header-height)-20px)]"
          : "bg-transparent h-[var(--header-height)]"
      } header fixed left-0 top-0 w-full flex items-center z-20 transition-all duration-300`}
    >
      <div className="container flex justify-between items-center">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            width="61"
            height="62"
            className={`${
              scrolled ? "h-[55px]" : "h-[62px]"
            } transition-all duration-300`}
          />
        </Link>
        <nav>
          <ul className="md:flex gap-2 items-center hidden">
            {navMenu.map((menu) => (
              <li key={menu.title} className="flex">
                <NavLink
                  title={menu.title}
                  to={menu.to}
                  isActive={activeSection === menu.to}
                />
              </li>
            ))}
          </ul>
          <button
            onClick={toggleMenu}
            className="text-4xl text-white focus:outline-none md:hidden"
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
          <ul
            className={`${
              isOpen
                ? "translate-y-0 opacity-100 pointer-events-auto"
                : "-translate-y-[25px] opacity-0 pointer-events-none"
            } md:hidden bg-[var(--accent-color)] text-white fixed top-[80px] left-0 right-0 p-5 transition-all duration-300 ease-in-out`}
          >
            {mobileNavMenu.map((menu) => (
              <li
                key={menu.title}
                className="[&:not(:first-child)]:border-t border-slate-300/30"
              >
                <MobileNavLink title={menu.title} to={menu.to} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
