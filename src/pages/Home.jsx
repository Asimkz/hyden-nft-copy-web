import { useState } from "react";
// import icons from "../lib/global/Icons";
import Images from "../lib/global/images";
import "../lib/styles/home.css";

const Home = () => {
  const [animateDoors, setAnimateDoors] = useState(false);
  // const TelegramIcon = icons.telegram;
  // const TwiiterIcon = icons.twitter;
  console.log('animateDoors', animateDoors);

  const handleEnterClick = () => {
    setAnimateDoors(true);
  };

  return (
    <div className="intro-page">
      <div className="flex relative">
        <div className={`logo ${animateDoors ? "slide-top" : ""}`}>
          <img src={Images.logo} alt="" width={100} height={100} />
        </div>
        <div className={`left-door ${animateDoors ? "slide-left" : ""}`}>
          <img src={Images.LeftDoor} alt="Left Door" width={100} height={100} />
        </div>
        <div className={`circle-div ${animateDoors ? "cirlce-animation" : ""}`}>
          <span className="circle"></span>
          <p onClick={handleEnterClick} style={{ cursor: "pointer" }}>Enter</p>
        </div>
        <div className={`right-door ${animateDoors ? "slide-right" : ""}`}>
          <img src={Images.RightDoor} alt="Right Door" width={100} height={100} />
        </div>
        <div className={`icons ${animateDoors ? "icons-left" : ""}`}>
          <button className="telegram">
            <img src={Images.telegram} />
          </button>
          <button className="twitter">
            <img src={Images.twitter} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
