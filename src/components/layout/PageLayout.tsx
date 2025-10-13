import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

type pageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: pageLayoutProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <section className="py-[calc(var(--section-gap)*2)] relative">
      <div className="fixed flex items-center justify-end px-[15px] right-0 top-0 left-0 z-10 bg-white/80 backdrop-blur min-h-[70px]">
        <button
          onClick={handleClick}
          className="w-[40px] h-[40px] border border-slate-500 text-slate-500 rounded-full flex items-center justify-center text-2xl transition-all duration-300 cursor-pointer md:opacity-50 hover:opacity-100"
        >
          <FiX />
        </button>
      </div>
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default PageLayout;
