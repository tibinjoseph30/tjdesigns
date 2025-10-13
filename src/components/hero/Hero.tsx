import { FaArrowRightLong } from "react-icons/fa6";
import facebook from "../../assets/images/social/Facebook.svg";
import whatsapp from "../../assets/images/social/Whatsapp.svg";
import linkedin from "../../assets/images/social/Linkedin.svg";
import instagram from "../../assets/images/social/Instagram.svg";
import SocialIcon from "./SocialIcon";
import SectionLayout from "../layout/SectionLayout";
import Button from "../shared/ui/Button";

const Hero = () => {
  const social = [
    {
      img: facebook,
      alt: "Facebook",
      link: "https://www.facebook.com/tjdesigns.in/",
    },
    { img: whatsapp, alt: "Whatsapp", link: "https://wa.me/+911234567890" },
    {
      img: linkedin,
      alt: "Linkedin",
      link: "https://www.linkedin.com/in/tjdesigns/",
    },
    {
      img: instagram,
      alt: "Instagram",
      link: "https://www.instagram.com/tjdesigns.in/",
    },
  ];
  return (
    <SectionLayout id="home" className="hero bg-[var(--accent-color)] min-h-screen pt-[var(--header-height)] flex items-center">
      <div className="container">
        <div className="content relative max-w-[900px] text-center text-white py-8 mx-auto -mt-[var(--header-height)] lg:mt-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight font-bold relative">
            Design That Builds{" "}
            <span className="text-[var(--primary-color)]">Brands.</span> Website
            That Win <span className="highlight-underline">Customers.</span>
          </h1>
          <p className="lg:text-xl mt-6 max-w-[600px] mx-auto relative">
            Helps businesses stand out with user-friendly designs, modern
            websites, and branding that builds trust.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <Button
              variant="primary"
              to="/portfolio"
              icon={
                <span className="transition-all duration-400 group-hover:translate-x-[calc(100%+8px)] group-hover:text-white">
                  <FaArrowRightLong size={20} />
                </span>
              }
              className="group inline-flex items-center gap-3 min-h-[50px] sm:min-h-[60px] rounded-full px-12 sm:text-[18px] relative has-link overflow-hidden"
            >
              Let See the Works
            </Button>
            <div className="relative">
              <p className="script-font absolute left-0 right-0 top-full translate-y-[5px] text-white text-[clamp(16px,1.8vw,18px)]">
                stay connected
              </p>
              <ul className="social-icons flex -space-x-2">
                {social.map((s) => (
                  <SocialIcon key={s.alt} {...s} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Hero;
