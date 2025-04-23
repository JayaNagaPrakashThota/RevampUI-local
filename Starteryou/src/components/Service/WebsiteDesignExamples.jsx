import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { useRef } from "react";

export default function WebsiteDesignExamples() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      // Calculate scroll amount based on card width
      const cardWidth = 300; // matches your md:min-w-[300px]
      const scrollAmount = cardWidth + 32; // card width + gap (md:gap-8 = 32px)
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const carouselImages = [
    "/ServicePage/WebDesignEx1.jpg",
    "/ServicePage/webDesignEx.jpg",
    "/ServicePage/WebdesignEx2.jpg",
    "/ServicePage/webDesignEx3.png",
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto text-white relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 overflow-x-hidden">
      {/* Header section with title and buttons */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8">
        <div className="w-full sm:w-auto">
          <h2 className="text-[#8C82FC] text-xs sm:text-sm mb-1 sm:mb-2">
            OUR WORK
          </h2>
          <h3
            className="text-2xl sm:text-3xl md:text-[40px] leading-[100%] font-bold text-gray-900 tracking-[0px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            WEBSITE DESIGN EXAMPLES
          </h3>
        </div>
        <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-0 self-end sm:self-auto">
          <button
            onClick={() => scroll("left")}
            className="w-8 h-8 sm:w-[36px] sm:h-[36px] border border-black rounded-full flex items-center justify-center text-black bg-white hover:bg-gray-100 transition-colors"
            aria-label="Scroll left"
          >
            <FaArrowCircleLeft className="text-sm sm:text-lg" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-8 h-8 sm:w-[36px] sm:h-[36px] border border-black rounded-full flex items-center justify-center text-black bg-white hover:bg-gray-100 transition-colors"
            aria-label="Scroll right"
          >
            <FaArrowCircleRight className="text-sm sm:text-lg" />
          </button>
        </div>
      </div>

      {/* Image carousel */}
      <div className="mt-6 sm:mt-8 md:mt-[60px] relative">
        <div
          ref={carouselRef}
          className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className="relative rounded-xl min-w-[200px] sm:min-w-[250px] md:min-w-[300px] h-[160px] sm:h-[220px] md:h-[280px] bg-gray-200 flex-shrink-0 overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={image}
                alt={`Website design example ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/placeholder-image.jpg"; // Add a fallback image
                  e.target.className =
                    "absolute inset-0 w-full h-full object-contain bg-gray-100";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
