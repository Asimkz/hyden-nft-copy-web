import gallery from "../lib/json/gallery/gallery.json";
import BuyButton from "../lib/ui/components/howtobuy/BuyButton";

const Gallery = () => {
    return (
        <div className="w-fit mx-auto mt-1 flex flex-col items-center">
            <h1 className="h1-heading">{gallery.heading}</h1>
            <div className="border-bottom my-5"></div>
            <p className="text-[19px] md:w-[55%] sm:w-[65%] w-[75%] text-center font-robotoSlab font-medium  mt-3">
                {gallery.description}
            </p>

            <div className="my-12">
                <div className="gallery-card lg:w-[70%] md:w-[80%] sm:w-[90%] w-[100%] mx-auto">
                    <div
                        className="gallery-card-img"
                    >
                        <img src={gallery.firststep.image} />
                    </div>
                    <div
                        className="gallery-card-img"
                    >
                      <img src={gallery.secondstep.image} />
                    </div>
                    <div
                        className="gallery-card-img"
                    >
                      <img src={gallery.thirdstep.image} />

                    </div>
                    <div
                        className="gallery-card-img"
                    >
                        <img src={gallery.fourthstep.image} />
                    </div>
                    <div
                        className="gallery-card-img"
                    >
                        <img src={gallery.fivethstep.image} />
                    </div>
                    <div
                        className="gallery-card-img"
                    >
                        <img src={gallery.sixthstep.image} />
                    </div>
                </div>


               
            </div>

        </div>
    );
};

export default Gallery;
