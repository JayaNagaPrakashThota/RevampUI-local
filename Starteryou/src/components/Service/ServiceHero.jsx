import { FaArrowRight } from "react-icons/fa";

export default function ServiceHero() {
  const features = [
    "Deployment and Support",
    "Discover and Analysis",
    "Flexibility and Adaptability",
    "Competitive Advantage",
  ];

  return (
    <div className="bg-indigo-600 text-white px-4 sm:px-6 min-h-screen flex items-center pt-28 pb-10 sm:pt-36 sm:pb-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="flex-1 max-w-xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold bg-indigo-600 border-2 border-white rounded-full px-4 py-2 mb-5 mx-auto md:mx-0">
            <img
              src="/ServicePage/ServiceIcons/PluseIcon.png"
              alt="Pulse Icon"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
            Unmatched Quality, Exceptional Service
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-6">
            Delivering excellence, <br className="hidden sm:block" />
            every step of the way forward.
          </h1>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {features.map((item, i) => (
              <li
                key={i}
                className="flex items-center justify-center md:justify-start text-sm sm:text-base md:text-lg"
              >
                <img
                  src="/ServicePage/ServiceIcons/doneIcon.png"
                  alt="Check"
                  className="mr-2 w-4 h-4 sm:w-5 sm:h-5"
                />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex justify-center md:justify-start">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full transition flex items-center text-sm sm:text-base md:text-lg">
              Get Started
              <FaArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/ServicePage/ServiceImg.png"
            alt="Hero Visual"
            className="w-64 sm:w-80 md:w-[26rem] lg:w-[30rem]"
          />
        </div>
      </div>
    </div>
  );
}
