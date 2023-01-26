import Destination from "../componenets/destination";
import Hero from "../componenets/hero";
import Navbar from "../componenets/navbar";
import Trip from "../componenets/trip";
import Footer from "../componenets/footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destenation."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </div>
  );
}

export default Home;
