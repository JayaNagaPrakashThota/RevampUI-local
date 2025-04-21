import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { useRef } from "react";

export default function WebsiteDesignExamples() {
  const carouselRef = useRef(null);
  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="w-full max-w-[1440px] mx-auto text-white relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      {/* OUR WORK Heading */}

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8">
        <div className="mb-4 sm:mb-0">
          <h2 className="text-[#8C82FC] text-xs sm:text-sm mb-1 sm:mb-2">
            OUR WORK
          </h2>
          <h3
            className="text-2xl sm:text-3xl md:text-[40px] leading-[100%] font-bold text-gray-900 tracking-[0px] max-w-[527px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            WEBSITE DESIGN EXAMPLES
          </h3>
        </div>
        <div className="flex gap-2 sm:gap-3 self-end sm:self-auto">
          <button
            onClick={() => scroll("left", "testimonials")}
            className="w-8 h-8 sm:w-[36px] sm:h-[36px] border border-black rounded-full flex items-center justify-center text-black bg-white"
          >
            <FaArrowCircleLeft className="text-sm sm:text-lg" />
          </button>
          <button
            onClick={() => scroll("right", "testimonials")}
            className="w-8 h-8 sm:w-[36px] sm:h-[36px] border border-black rounded-full flex items-center justify-center text-black bg-white"
          >
            <FaArrowCircleRight className="text-sm sm:text-lg" />
          </button>
        </div>
      </div>

      {/* Image carousel */}
      <div className="mt-6 sm:mt-8 md:mt-[60px] px-2 sm:px-4 md:px-[60px]">
        <div
          ref={carouselRef}
          className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <div
              key={index}
              className="rounded-xl min-w-[200px] sm:min-w-[250px] md:min-w-[300px] h-[160px] sm:h-[220px] md:h-[280px] bg-gray-300 flex-shrink-0 flex items-center justify-center"
            >
              <img
                src="ServicePage/emptyImg.png"
                alt={`Work ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
