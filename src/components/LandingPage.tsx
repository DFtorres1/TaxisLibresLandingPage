import LandHeader from "./LandingHeader";
import LandInscription from "./LandingInscription";
import LandKnowMore from "./LandingKnowMore";
import LandNavBar from "./LandingNavBar";

function Landing() {
  return (
    <div>
        <LandNavBar/>
        <LandHeader/>
        <LandKnowMore/>
        <LandInscription/>
    </div>
  );
}

export default Landing;
