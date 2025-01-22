import roadmap from "../lib/json/roadmap/roadmap.json";
import Heading from "../lib/ui/components/roadmap/Heading";

const RoadMap = () => {
    return (
        <div className="w-fit mx-auto mt-1 flex flex-col items-center">
            <h1 className="h1-heading">{roadmap.heading}</h1>
            {roadmap.phases.map((phase, phaseIndex) => (
                <>
                <div className="border-bottom my-10"></div>
                    <div><Heading title={phase.title} /></div>
                <div key={phaseIndex} className="w-full my-8">
                    <div className="sm:flex flex-wrap lg:w-[60%] md:w-[80%] w-[90%] mx-auto gap-3">
                        {phase.steps.map((step, stepIndex) => (
                            <div
                                key={stepIndex}
                                className={`sm:w-[48%] w-full ps-2 pe-1 ${stepIndex % 2 === 0 ? "mt-0" : ""}`}
                            >
                                <p
                                    className="howBuy-description"
                                    dangerouslySetInnerHTML={{ __html: step.description }}
                                ></p>
                            </div>
                        ))}
                    </div>
                    {/* <div className="border-bottom my-5"></div> */}
                </div>
            </>

            ))}
        </div>
    );
};

export default RoadMap;
