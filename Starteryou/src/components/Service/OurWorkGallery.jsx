export default function OurWorkGallery() {
  const images = [
    "/ServicePage/emptyImg.png",
    "/ServicePage/emptyImg1.png",
    "/ServicePage/emptyImg1.png",
    "/ServicePage/emptyImg1.png",
    "/ServicePage/emptyImg3.png",
    "/ServicePage/emptyImg3.png",
    "/ServicePage/emptyImg1.png",
    "/ServicePage/emptyImg1.png",
    "/ServicePage/emptyImg1.png",
    "/ServicePage/emptyImg1.png",
    "/ServicePage/emptyImg1.png",
  ];
  return (
    <div className="bg-white py-8 sm:py-10 px-4">
      <div className="max-w-[1440px] mx-auto h-auto">
        <div className="flex gap-4 sm:gap-8 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex flex-col gap-4 sm:gap-6 w-max px-2">
            {/* Calculate the split and render two rows with images */}
            <div className="flex gap-4 sm:gap-6">
              {images
                .slice(0, Math.ceil(images.length / 2))
                .map((img, index) => (
                  <div
                    key={index}
                    className="overflow-hidden flex items-center justify-center shadow hover:shadow-lg transition shrink-0 bg-gray-100 max-w-[350px]"
                  >
                    <img
                      src={img}
                      alt={`Project ${index + 1}`}
                      className="object-contain w-auto h-auto max-w-full max-h-[300px]"
                    />
                  </div>
                ))}
            </div>
            <div className="flex gap-4 sm:gap-6">
              {images.slice(Math.ceil(images.length / 2)).map((img, index) => (
                <div
                  key={index + Math.ceil(images.length / 2)}
                  className="overflow-hidden flex items-center justify-center shadow hover:shadow-lg transition shrink-0 bg-gray-100 max-w-[350px]"
                >
                  <img
                    src={img}
                    alt={`Project ${index + 1 + Math.ceil(images.length / 2)}`}
                    className="object-contain w-auto h-auto max-w-full max-h-[300px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
