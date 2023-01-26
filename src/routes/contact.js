import Hero from "../componenets/hero";
import Navbar from "../componenets/navbar";
import aboutImg from "../assets/pic2.jpg";
import Footer from "../componenets/footer";
import ContactForm from "../componenets/contactForm";

function Contact() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={aboutImg}
        title="Contact"
        url="/contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;
