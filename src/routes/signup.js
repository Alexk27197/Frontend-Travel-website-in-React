import Hero from "../componenets/hero";
import Footer from "../componenets/footer";
import signupImg from "../assets/pic5.jpg";
import Navbar from "../componenets/navbar";

function Signup() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={signupImg}
        title="Signup"
        url="/signup"
        btnClass="hide"
      />
      <Footer />
    </div>
  );
}

export default Signup;
