import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import WhyUs from "./WhyUs";

const footerMenu = [
    {title: "Services", to: ""},
    {title: "Portfolio", to: ""},
    {title: "Blogs", to: ""},
    {title: "Privacy Policy", to: ""},
    {title: "Terms & Conditions", to: ""},
]

const Footer = () => {
  return (
    <footer className="bg-[var(--accent-color)] text-white">
      <div className="container">
        <div className="grid grid-cols-12 gap-5 py-[calc(var(--section-gap)*2)]">
          <AboutUs />
          <WhyUs />
          <ContactUs />
        </div>
        <div className="flex items-center justify-between gap-5 py-5 border-t border-white/30">
            <p>© 2025 tjdesigns</p>
            <nav>
                <ul className="flex gap-5">
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
