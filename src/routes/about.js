import Hero from "../componenets/hero";
import Navbar from "../componenets/navbar";
import aboutImg from "../assets/pic4.jpg";
import Footer from "../componenets/footer";
import AboutUs from "../componenets/aboutUs";
function About() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={aboutImg}
        title="About"
        url="/about"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default About;
