import "./tripStyles.css";
import TripData from "./tripData";
import CardImg1 from "../assets/pic1.jpg";
import CardImg2 from "../assets/pic2.jpg";
import CardImg3 from "../assets/pic3.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique detinations using Google Maps.</p>
      <div className="trip-card">
        <TripData
          imageCard={CardImg1}
          heading="Trip in Indonesia"
          text="Indonesia is a huge archipelago of diverse islands scattered over both sides of the Equator between the Indian Ocean and the Pacific Ocean. With an extensive, but quickly carved out amount of green forests on all of its islands and halfway between the poles, Indonesia is nicknamed The Emerald of the Equator."
        />
        <TripData
          imageCard={CardImg2}
          heading="Trip in Indonesia"
          text="Indonesia is a huge archipelago of diverse islands scattered over both sides of the Equator between the Indian Ocean and the Pacific Ocean. With an extensive, but quickly carved out amount of green forests on all of its islands and halfway between the poles, Indonesia is nicknamed The Emerald of the Equator."
        />
        <TripData
          imageCard={CardImg3}
          heading="Trip in Indonesia"
          text="Indonesia is a huge archipelago of diverse islands scattered over both sides of the Equator between the Indian Ocean and the Pacific Ocean. With an extensive, but quickly carved out amount of green forests on all of its islands and halfway between the poles, Indonesia is nicknamed The Emerald of the Equator."
        />
      </div>
    </div>
  );
}

export default Trip;
