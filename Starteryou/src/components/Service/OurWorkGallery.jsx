export default function OurWorkGallery() {
  const images = [
    "/ServicePage/webDev.jpg",
    "ServicePage/webhosting.jpg",
    "/ServicePage/WebDesignEx1.jpg",
    "ServicePage/webDev1.jpg",
    "ServicePage/webLive.jpeg",
    "ServicePage/WebhostingServer.jpeg",
    "ServicePage/webDev2.jpg",
    "/ServicePage/webDesignEx3.png",
    "ServicePage/webhosting1.jpg",
    "ServicePage/webDev.jpg",
    "ServicePage/WebhostingServer.jpeg",
    "ServicePage/webhosting.jpg",
    "/ServicePage/webDesignEx3.png",
    "ServicePage/webDev2.jpg",
    "ServicePage/webLive.jpeg",
    "ServicePage/webDev1.jpg",
  ];

  // Split images into two rows
  const firstRowImages = images.slice(0, Math.ceil(images.length / 2));
  const secondRowImages = images.slice(Math.ceil(images.length / 2));

  return (
    <div className="bg-white py-8 sm:py-10 px-4 overflow-hidden">
      <div className="max-w-[1440px] mx-auto h-auto">
        {/* First row - scrolls left to right */}
        <div className="mb-4 sm:mb-6 overflow-hidden">
          <div className="animate-scrollLeft flex gap-4 sm:gap-6">
            {[...firstRowImages, ...firstRowImages].map((img, index) => (
              <div
                key={`first-${index}`}
                className="overflow-hidden flex items-center justify-center shadow hover:shadow-lg transition flex-shrink-0"
                style={{
                  width: "clamp(200px, 25vw, 350px)",
                  height: "clamp(150px, 20vw, 300px)",
                }}
              >
                <img
                  src={img}
                  alt={`Project ${index + 1}`}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second row - scrolls right to left */}
        <div className="overflow-hidden">
          <div className="animate-scrollRight flex gap-4 sm:gap-6">
            {[...secondRowImages, ...secondRowImages].map((img, index) => (
              <div
                key={`second-${index}`}
                className="overflow-hidden flex items-center justify-center shadow hover:shadow-lg transition flex-shrink-0"
                style={{
                  width: "clamp(200px, 25vw, 350px)",
                  height: "clamp(150px, 20vw, 300px)",
                }}
              >
                <img
                  src={img}
                  alt={`Project ${index + 1 + firstRowImages.length}`}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scrollLeft {
          animation: scrollLeft 30s linear infinite;
          width: max-content;
        }
        .animate-scrollRight {
          animation: scrollRight 30s linear infinite;
          width: max-content;
        }
        .animate-scrollLeft:hover,
        .animate-scrollRight:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
