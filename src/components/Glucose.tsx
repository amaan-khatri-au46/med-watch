import Button from "./Button";
import useIsLargeScreen from "@/utils/hooks/useWindowSize";

const Glucose = () => {
  const isLargeScreen = useIsLargeScreen();
  return (
    <div className="relative -top-20">
      <div
        className="relative h-[550px] w-full lg:h-[700px] xl:h-[900px]"
        data-aos="zoom-in"
      >
        <video
          className="h-full w-full rounded-none rounded-b-[50px] object-cover"
          autoPlay
          loop
          muted
        >
          <source
            src="/video/0_Abstract_Background_3840x2160.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto">
            <div
              className={`flex max-w-3xl flex-col justify-start rounded-[56px] bg-none p-6 lg:m-3 lg:justify-center`}
            >
              <div>
                <span className="custom-text m-0 text-3xl font-semibold text-white lg:text-[54px]">
                  Revolutionizing Glucose
                </span>
                <h1
                  className={`custom-text mt-0 pb-0 text-3xl font-semibold text-white lg:mt-5 lg:pb-2 lg:text-[54px]`}
                >
                  Monitoring
                </h1>
              </div>
              <div className="mt-3">
                <span className="text-md mt-1 text-white lg:text-xl">
                  Accurate. Non-Invasive. Powered by AI.
                </span>
              </div>
              <div className="mt-4 lg:mt-6">
                <Button
                  className={`${
                    !isLargeScreen ? "!bg-white !text-[#083D6A]" : "custom-bg"
                  } text-sm md:text-lg`}
                >
                  Request Early Access
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glucose;
