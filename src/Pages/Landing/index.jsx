import Home from "../../components/Home/Home";
import Skills from "../../components/Skills/Skills";
import Services from "../../components/Services/Services";
import Work from "../../components/Works/Work";
import Qualification from "../../components/Qualification/Qualification";
import Contact from "../../components/Contact/Contact";
import About from "../../components/About/About";

function Landing() {
  return (
    <>
      <main className="main">
        <Home></Home>
        <About/>
        <Skills></Skills>
        <Services />
        <Work />
        <Qualification />
        <Contact />
      </main>
    </>
  );
}

export default Landing;