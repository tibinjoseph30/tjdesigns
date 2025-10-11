import { Link } from "react-router-dom";

type socialIconProps = {
  img: string;
  alt: string;
  link: string;
};

const SocialIcon = ({ img, alt, link }: socialIconProps) => {
  return (
    <li key={alt}>
      <Link
        to={link}
        className="relative inline-block rounded-full transition-all duration-300 shadow-[0_10px_20px_black]/15 hover:-translate-y-[7px]"
      >
        <img src={img} alt={alt} />
      </Link>
    </li>
  );
};

export default SocialIcon;
