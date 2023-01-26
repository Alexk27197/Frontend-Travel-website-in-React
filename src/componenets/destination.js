import Mountain1 from "../assets/volcano1.jpg";
import Mountain2 from "../assets/volcano2.jpg";
import Mountain3 from "../assets/volcano3.jpg";
import Mountain4 from "../assets/volcano4.jpg";
import DestenationData from "./destinationData";
import "./destinationStyle.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      <DestenationData
        className="first-desc"
        heading="Taal volcano, Batangas"
        text="Taal, located in the Philippines, Cradled by the Ardnamurchan peninsula in Scotland, Eilean Shona inspired Peter Pan author JM Barrie to dream up Neverland – tidal Loch Moidart on which it sits is almost a magic mirror. Another Scottish island, Inchconnachan, has an almost unbelievable population of wallabies, a marsupial predominantly native to Australia and New Guinea. Adrift off Anglesey in Wales, meanwhile, is Llanddwyn Island – the so-named 'Island of Love', where the Welsh celebrate Saint Dwynwen, the country's patron saint of lovers."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestenationData
        className="first-desc-reverse"
        heading="Mt. Daguldul, Batangas"
        text="Daguldul, located in the Philippines, is part of a caldera system in
      southern Luzon Island. Recorded eruptions date back to 3,580 BCE.
      The caldera is 15 x 20 km and contains Lake Taal, which has a depth
      of 160 m, and an island that also contains a lake within the Main
      Crater. Eruptive activity during 1-9 July 2021 was characterized by
      phreatomagmatic explosions
      Rewind to 1565, and Sark was little more than a den for pirates smuggling contraband from its rugged coves and bays. Back then, Queen Elizabeth I gifted the island to settlers from the neighbouring island of Jersey in return for them ridding the island of buccaneers. Soon after, the settlement permitted the establishment of Sark's feudal system – a social system that largely died out in the previous century – and it still remains one of the world's most archaic islands
      "
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
