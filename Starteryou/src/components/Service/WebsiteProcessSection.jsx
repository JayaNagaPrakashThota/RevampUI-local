export default function WebsiteProcessSection() {
  const steps = [
    {
      id: "01",
      title: "DISCOVERY CALL",
      desc: "This allows us to understand your brand and ideas for the website.",
    },
    {
      id: "02",
      title: "BRANDING",
      desc: "We can help you choose a color palette and logo that suits your brand or use existing branding.",
    },
    {
      id: "03",
      title: "WIREFRAME",
      desc: "We will finetune what information and features to expect on your websit.",
    },
    {
      id: "04",
      title: "MOCKUP",
      desc: "We will show you a mockup of your website's new design.",
    },
    {
      id: "05",
      title: "BUILD",
      desc: "Our team will begin building out your website. This phase can include everything from development and content writing to SEO, depending on your needs.",
    },
    {
      id: "06",
      title: "GO LIVE",
      desc: "Once we finalize any last changes, we will push your website live for the whole world to see!",
    },
  ];
  return (
    <div className="bg-white py-12 sm:py-20 px-4">
      {/* Website Process */}
      <div className="text-center mb-3 sm:mb-4">
        <h2 className="text-indigo-500 font-bold text-xs sm:text-sm uppercase">
          How It Works
        </h2>
      </div>
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6 sm:mb-10">
        WEBSITE PROCESS
      </h3>
      <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-2 sm:px-4">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center text-center">
            <div className="bg-indigo-500 text-white w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full text-sm sm:text-base md:text-lg font-bold mb-3 sm:mb-4">
              {step.id}
            </div>
            <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
              {step.title}
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xs">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
