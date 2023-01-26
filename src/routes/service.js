import Hero from "../componenets/hero";
import Navbar from "../componenets/navbar";
import aboutImg from "../assets/pic1.jpg";
import Footer from "../componenets/footer";
import Trip from "../componenets/trip";

function Service() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={aboutImg}
        title="Service"
        url="/service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </div>
  );
}

export default Service;
