import {
  FaArrowCircleRight,
  FaArrowCircleLeft,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import { useRef } from "react";
export default function Testimonials() {
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

  const testimonials = [
    {
      text: "The team at StarterYou went above and beyond to develop a stunning website for our business. Great work!",
      name: "John Doe",
      company: "Company",
      rating: 5,
      image: "/ServicePage/emptyImg.png",
    },
    {
      text: "StarterYou created a sleek, user-friendly, and visually appealing website for us on time. Highly recommend!",
      name: "Jane Smith",
      company: "BrandCo",
      rating: 4,
      image: "/ServicePage/emptyImg.png",
    },
    {
      text: "StarterYou nailed our vision with a beautiful, responsive, and highly functional website design. Love it!",
      name: "Alex Johnson",
      company: "TechHive",
      rating: 5,
      image: "/ServicePage/emptyImg.png",
    },
    {
      text: "Excellent service and communication. Will definitely work with them again!",
      name: "Sara Lee",
      company: "DesignX",
      rating: 3,
      image: "/ServicePage/emptyImg.png",
    },
    {
      text: "Great attention to detail and really collaborative.",
      name: "Mike Brown",
      company: "SoftVision",
      rating: 2,
      image: "/ServicePage/emptyImg.png",
    },
  ];

  return (
    <div className="py-8 sm:py-12 bg-white relative px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8">
          <div className="mb-4 sm:mb-0">
            <p className="text-xs sm:text-sm font-semibold text-purple-600 uppercase">
              Testimonials
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1 leading-tight">
              Read trusted reviews <br /> from our customers
            </h2>
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
        <div
          ref={carouselRef}
          className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="w-[220px] sm:w-[240px] md:w-[260px] h-[200px] sm:h-[210px] md:h-[220px] bg-[#F3F7FB] border border-[#D4D4D8] rounded-[12px] sm:rounded-[16px] p-3 flex-shrink-0 flex flex-col justify-between"
            >
              <div className="flex items-center mb-1">
                {[...Array(5)].map((_, idx) => (
                  <span key={idx} className="text-xs sm:text-sm">
                    {idx < t.rating ? (
                      <FaStar className="text-black" />
                    ) : (
                      <FaRegStar className="text-gray-300" />
                    )}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 text-xs leading-snug mb-2 line-clamp-4">
                {t.text}
              </p>
              <div className="flex items-center gap-2 sm:gap-3">
                <img
                  src={t.image}
                  alt="avatar"
                  className="w-10 h-10 sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] rounded-full object-cover"
                />
                <div className="text-xs">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-gray-500">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
