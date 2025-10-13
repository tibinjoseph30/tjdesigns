type navLinkProps = {
  title: string;
  to: string;
};

import { Link } from "react-router-dom"

const MobileNavLink = ({title, to}: navLinkProps) => {
    return(
        <Link to={to} className="inline-block font-semibold py-4">{title}</Link>
    )
}

export default MobileNavLink;