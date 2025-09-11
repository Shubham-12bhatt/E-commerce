import hand_icon from "../assets/hand_icon.png";
import arrow from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";
import { FaArrowRight } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-pink-300/20 to-white min-h-screen pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero Left */}
          <div className="flex-1 max-w-xl lg:pl-30">
            <h2 className="text-gray-500 font-semibold text-xl mb-4">
              NEW ARRIVALS ONLY
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <p className="text-5xl sm:text-6xl font-bold text-gray-800">
                  new
                </p>
                <img
                  src={hand_icon}
                  alt="Hand wave"
                  className="w-12 h-12 object-contain animate-bounce"
                />
              </div>

              <div className="space-y-2">
                <p className="text-5xl sm:text-6xl font-bold text-gray-800">
                  collections
                </p>
                <p className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                  for everyone
                </p>
              </div>
            </div>

            <div className="mt-12">
              <button className="group flex items-center cursor-pointer gap-4 bg-red-500 text-white px-8 py-4 rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-105">
                <span className="text-lg font-semibold">Latest Collection</span>
                <FaArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Hero Right */}
          <div className="flex-1 relative lg:mt-10">
            <div className="relative">
              <div className="absolute -inset-4  rounded-full blur-3xl "></div>
              <img
                src={hero_image}
                alt="Hero"
                className="relative w-full h-auto max-w-[450px] mx-auto transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
