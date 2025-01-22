import howtobuy from "../lib/json/howtobuy/howtobuy.json";
import icons from "../lib/global/Icons";
import BuyButton from "../lib/ui/components/howtobuy/BuyButton";

const HowToBuy = () => {
  const Arrow = icons.downArrow;

  return (
    <div className="w-fit mx-auto mt-1 flex flex-col items-center">
      <h1 className="h1-heading">{howtobuy.heading}</h1>
      <div className="border-bottom"></div>
      <p
        className="howBuy-description"
        dangerouslySetInnerHTML={{ __html: howtobuy.description }}
      ></p>
      <h3 className="steps-title mt-8">{howtobuy.firstStep.title}</h3>
      <p className="steps-description mt-3">{howtobuy.firstStep.description}</p>
      <div className="arrow-Down">
        <Arrow color="var(--primary)" size={48} />
      </div>
      <h3 className="steps-title mt-0">{howtobuy.secondStep.title}</h3>
      <p
        className="steps-description mt-3"
        dangerouslySetInnerHTML={{ __html: howtobuy.secondStep.description }}
      ></p>
      <div className="arrow-Down">
        <Arrow color="var(--primary)" size={48} />
      </div>
      <h3 className="steps-title mt-0">{howtobuy.thirdStep.title}</h3>
      <p
        className="steps-description mt-3"
        dangerouslySetInnerHTML={{ __html: howtobuy.thirdStep.description }}
      ></p>
      <div className="arrow-Down">
        <Arrow color="var(--primary)" size={48} />
      </div>
      <h3 className="steps-title mt-0">{howtobuy.fourthStep.title}</h3>
      <p
        className="steps-description mt-3 flex flex-col"
        dangerouslySetInnerHTML={{ __html: howtobuy.fourthStep.description }}
      ></p>
      <div className="arrow-Down">
        <Arrow color="var(--primary)" size={48} />
      </div>
      <p className="start-title mt-2">{howtobuy.startTitle}</p>
      <div className="mt-9 flex gap-5">
        <BuyButton title="BUY NFT" />
        <BuyButton title="BUY SOL" />
      </div>
    </div>
  );
};

export default HowToBuy;
