import StuntJson from "../lib/json/stunt-collection/stunt-collection.json";
import Slider from "../lib/ui/components/stunt-collection/Slider";

const StuntCollection = () => {
  return (
    <div>
      <div className="w-fit mx-auto lg:mt-1 mt-3 flex flex-col items-center">
        <h1 className="h1-heading">{StuntJson.heading}</h1>
        <div className="border-bottom"></div>
        <p className="stunt-description">{StuntJson.description}</p>
      </div>
      <div className="w-[100%]">
        <Slider />
      </div>
      <div className="w-[700px] mx-auto flex mt-9 flex-col items-center">
        <h3 className="text-[40px] font-medium font-robotoSlab text-[var(--text-default)]">
          {StuntJson.createTitle}
        </h3>
        <p className="text-center text-[18px] font-robotoSlab w-[94%] text-[var(--text-primary)] font-light mt-6">
          {StuntJson.createDescOne}
        </p>
        <p className="text-center text-[18px] font-robotoSlab w-[92%] text-[var(--text-primary)] font-light mt-5">
          {StuntJson.createDescTwo}
        </p>
        <p className="text-[18px] font-medium font-robotoSlab text-[var(--text-dark)] mt-4">
          {StuntJson.suggestionTitle}
        </p>
        <div className="w-[86%] flex justify-between mt-9">
          <ol className="order-list">
            {StuntJson.suggestions.slice(0, 5).map((suggestion, index) => {
              return <li key={index}>{suggestion}</li>;
            })}
          </ol>
          <ol className="order-list">
            {StuntJson.suggestions.slice(5, 10).map((suggestion, index) => {
              return <li key={index}>{suggestion}</li>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default StuntCollection;
