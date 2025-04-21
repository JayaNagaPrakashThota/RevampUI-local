import { FaArrowRight } from "react-icons/fa";

export default function ServiceHero() {
  const features = [
    "Deployment and Support",
    "Discover and Analysis",
    "Flexibility and Adaptability",
    "Competitive Advantage",
  ];
  return (
    <div className="bg-indigo-600 text-white px-4 sm:px-6 pt-40 pb-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10">
        <div className="flex-1 max-w-xl">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold bg-indigo-600 border-2 border-white rounded-full px-3 py-1 sm:px-4 sm:py-2 mb-4 sm:mb-5">
            <img
              src="/ServicePage/ServiceIcons/PluseIcon.png"
              alt="Pulse Icon"
              className="w-4 h-4 sm:w-6 sm:h-6"
            />
            Unmatched Quality, Exceptional Service
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-snug mb-4 sm:mb-6">
            Delivering excellence, <br /> every step of the way forward.
          </h1>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
            {features.map((item, i) => (
              <li key={i} className="flex items-center text-sm sm:text-base">
                <img
                  src="/ServicePage/ServiceIcons/doneIcon.png"
                  alt="Check"
                  className="mr-2 w-3 h-3 sm:w-4 sm:h-4"
                />
                {item}
              </li>
            ))}
          </ul>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-5 py-2 sm:px-7 sm:py-3 rounded-full transition flex items-center text-sm sm:text-base">
            Get Started
            <FaArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
        <div className="flex-1 flex justify-center mt-6 md:mt-0">
          <img
            src="/ServicePage/ServiceImg.png"
            alt="Hero Visual"
            className="w-64 sm:w-80"
          />
        </div>
      </div>
    </div>
  );
}
