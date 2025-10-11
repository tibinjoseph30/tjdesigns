import Hero from "../components/hero/Hero";
import Intro from "../components/intro/Intro";
import Service from "../components/service/Service";
import Header from "../components/layout/header/Header";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Footer from "../components/layout/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
