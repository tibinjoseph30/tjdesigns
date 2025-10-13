import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import WhyUs from "./WhyUs";

const footerMenu = [
    {title: "Services", to: "/services"},
    {title: "Portfolio", to: "/portfolio"},
    {title: "Blogs", to: "/blogs"},
    {title: "Privacy Policy", to: ""},
    {title: "Terms & Conditions", to: ""},
]

const Footer = () => {
  return (
    <footer className="bg-[var(--accent-color)] text-white">
      <div className="container">
        <div className="grid sm:grid-cols-12 gap-x-5 gap-y-10 py-8 sm:py-[calc(var(--section-gap)*2)]">
          <AboutUs />
          <WhyUs />
          <ContactUs />
        </div>
        <div className="flex md:flex-row flex-col items-center justify-between gap-5 py-4 sm:py-5 border-t border-white/30">
            <p>© 2025 tjdesigns</p>
            <nav className="sm:block hidden">
                <ul className="flex flex-wrap gap-5">
                    {footerMenu.map((item, index) => (
                        <li key={index}>
                            <Link to={item.to} className="text-[var(--nav-menu-color)] hover:text-white">{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
