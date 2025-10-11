import { Link } from "react-router-dom";
import FooterSection from "./FooterSection";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

const socialLinks = [
  { icon: <FaFacebookF />, url: "" },
  { icon: <FaWhatsapp />, url: "" },
  { icon: <FaInstagram />, url: "" },
  { icon: <FaLinkedinIn />, url: "" },
];

const ContactUs = () => {
  return (
    <div className="col-span-3 grid gap-9">
      <FooterSection title="Contact">
        <address className="not-italic">
          Email: tjdesigns@gmail.com
          <br />
          Mob: 817****56
        </address>
      </FooterSection>
      <FooterSection title="Follow">
        <ul className="flex gap-4">
          {socialLinks.map((item, index) => (
            <li key={index}>
              <Link
                to={item.url}
                className="inline-flex items-center justify-center w-[40px] h-[40px] rounded-full bg-white text-[var(--accent-color)] text-xl transition-all duration-300 hover:bg-[var(--primary-color)]"
              >
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </FooterSection>
    </div>
  );
};

export default ContactUs;
