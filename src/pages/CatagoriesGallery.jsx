import catagoriesgallery from "../lib/json/catagoriesgallery/catagoriesgallery.json";
import BuyButton from "../lib/ui/components/howtobuy/BuyButton";

const CatagoriesGallery = () => {
    return (
        <div className="w-fit mx-auto mt-1 flex flex-col items-center">
            <h1 className="h1-heading">{catagoriesgallery.heading}</h1>
            <div className="border-bottom my-5"></div>
            <p className="text-[19px] md:w-[55%] sm:w-[65%] w-[75%] text-center font-robotoSlab font-medium  mt-3">
                {catagoriesgallery.description}
            </p>

            <div className="my-12">
                <div className="gallery-card">
                    <div className="gallery-card-text relative">
                        <img
                            width="100%"
                            height="100%"
                            className="absolute top-0 -z-10 w-full h-full opacity-20"
                            src={catagoriesgallery.firststep.image}
                            alt=""
                        />
                        <a href="">{catagoriesgallery.firststep.title}</a>
                    </div>
                    <div className="gallery-card-text relative">
                        <img
                            width="100%"
                            height="100%"
                            className="absolute top-0 -z-10 w-full h-full opacity-20"
                            src={catagoriesgallery.secondstep.image}
                            alt=""
                        />
                        <a href="">{catagoriesgallery.secondstep.title}</a>
                    </div>
                </div>

                <div className="gallery-card">
                    <div className="gallery-card-text relative">
                        <img
                            width="100%"
                            height="100%"
                            className="absolute top-0 -z-10 w-full h-full opacity-20"
                            src={catagoriesgallery.thirdstep.image}
                            alt=""
                        />
                        <a href="">{catagoriesgallery.thirdstep.title}</a>
                    </div>
                    <div className="gallery-card-text relative">
                        <img
                            width="100%"
                            height="100%"
                            className="absolute top-0 -z-10 w-full h-full opacity-20"
                            src={catagoriesgallery.fourthstep.image}
                            alt=""
                        />
                        <a href="">{catagoriesgallery.fourthstep.title}</a>
                    </div>
                </div>

                <div className="gallery-card">
                    <div className="gallery-card-text relative">
                        <img
                            width="100%"
                            height="100%"
                            className="absolute top-0 -z-10 w-full h-full opacity-20"
                            src={catagoriesgallery.fivethstep.image}
                            alt=""
                        />
                        <a href="">{catagoriesgallery.fivethstep.title}</a>
                    </div>
                </div>
            </div>

            <p className="start-title mt-2">{catagoriesgallery.startTitle}</p>
            <div className="mt-9 flex gap-5">
                <BuyButton title="BUY NFT" />
                <BuyButton title="BUY SOL" />
            </div>
        </div>
    );
};

export default CatagoriesGallery;
