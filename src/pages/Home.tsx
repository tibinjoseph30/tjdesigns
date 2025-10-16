import Header from "../components/layout/header/Header";
import Hero from "../components/hero/Hero";
import Service from "../components/service/Service";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Footer from "../components/layout/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
