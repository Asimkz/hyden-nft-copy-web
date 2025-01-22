import Images from "../lib/global/images";
import "../lib/styles/landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="background">
        <img src={Images.HomeBackgroundImage} alt="" />
      </div>
      <div className="branch">
        <img src={Images.Branch} alt="" />
      </div>
      <div className="character">
        <img src={Images.Character} alt="" />
      </div>
      <div className="snow">
        <img src={Images.Snow} alt="" />
      </div>
      <div className="lights">
        <img src={Images.Lights} alt="" />
      </div>
      <div className="star-1">
        <img src={Images.Star} alt="" />
      </div>
      <div className="star-2">
        <img src={Images.Star} alt="" />
      </div>
      <div className="star-3">
        <img src={Images.Star} alt="" />
      </div>
      <div className="star-4">
        <img src={Images.Star} alt="" />
      </div>
    </div>
  );
};

export default Landing;
