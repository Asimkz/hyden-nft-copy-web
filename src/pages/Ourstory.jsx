import ourstory from "../lib/json/ourstory/ourstory.json"

const OurStory = () => {
    return (
        <div className="w-fit mx-auto mt-1 flex flex-col items-center" 
         style={{backgroundImage: "url(src/assets/img/backkground 2.png"}}
        >
            <h1 className="h1-heading">{ourstory.heading}</h1>
            <div className="border-bottom my-5"></div>
            <p className=" text-[19px] text-[#FF8B00] md:w-[100%] w-[80%] text-center font-robotoSlab font-medium  mt-3">
                {ourstory.description}
            </p>

            <div className="md:flex flex-wrap lg:w-[60%] md:w-[80%] w-[86%] mx-auto mt-12 items-center justify-between ">
                <div className="md:w-[50%] sm:w-[80%] ">
                <p className=" text-[19px] font-robotoSlab mt-3">
                {ourstory.firststep.description}
                     </p>
                     <p className=" text-[19px] font-robotoSlab mt-7">
                {ourstory.firststep.descriptionsec}
                     </p>
                </div>
                <div className="md:w-[45%] w-[80%] md:mx-0 mx-auto md:mt-0 mt-9 text-end">
                    <img src={ourstory.firststep.image} alt=""  />
                </div>
            </div>

            <div className="w-[100%]  py-36 bg-cover bg-no-repeat bg-center mt-6"
             style={{
                  backgroundImage: `url(${ourstory.firstbgimg})`
               }}
            >
            </div>

            
            <div className="md:flex flex-wrap lg:w-[60%] md:w-[80%] w-[86%] mx-auto mt-12 items-center justify-between ">
            <div className="md:w-[45%] w-[80%] md:mx-0 mx-auto md:mt-0 mt-9 text-start">
                    <img src={ourstory.secondstep.image} alt=""  />
                </div>
                <div className="md:w-[50%] sm:w-[80%] ">
                <p className=" text-[19px] font-robotoSlab mt-3">
                {ourstory.secondstep.description}
                     </p>
                     <p className=" text-[19px] font-robotoSlab mt-7">
                {ourstory.secondstep.descriptionsec}
                     </p>
                </div>
                
            </div>
            
            <div className="md:flex flex-wrap lg:w-[60%] md:w-[80%] w-[86%] mx-auto mt-12 items-center justify-between ">
                <div className="md:w-[50%] sm:w-[80%] ">
                <p className=" text-[19px] font-robotoSlab mt-3">
                {ourstory.thirdstep.description}
                     </p>
                     <p className=" text-[19px] font-robotoSlab mt-7">
                {ourstory.thirdstep.descriptionsec}
                     </p>
                     <p className=" text-[19px] font-robotoSlab mt-7">
                {ourstory.thirdstep.descriptionthird}
                     </p>
                </div>
                <div className="md:w-[45%] w-[80%] md:mx-0 mx-auto md:mt-0 mt-9 text-center">
                    <img src={ourstory.thirdstep.image} alt=""  />
                </div>
            </div>

            <div className="relative w-[100%] py-36 mt-6">

            <div
                className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-50"
                style={{
                backgroundImage: `url(${ourstory.secondbgimg})`,
                }}
            ></div>

            
            <div className="relative z-10 flex justify-center items-center">
                <h5 className="text-[26px] font-bold font-robotoSlab  text-center text-white">
                    {ourstory.lasttittle}
                </h5>

            </div>
            </div>


        </div>
    )
} 

export default  OurStory;