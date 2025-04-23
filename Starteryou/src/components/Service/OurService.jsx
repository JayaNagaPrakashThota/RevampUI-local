export default function OurService() {
  const services = [
    {
      title: "NEW WEBSITE DESIGN",
      description:
        "Don't have an existing website? We can help create a website from scratch, including everything from nailing down your branding to bringing your vision to life. Let our experienced website designers craft a beautiful, user-friendly website that makes your company stand out and increase sales.",
    },
    {
      title: "WEBSITE HOSTING",
      description:
        "Do you have an existing website but don't love how it looks, functions, or performs? If so, a website redesign might be right for you. Our experienced website designers can help create a website that showcases your business in its best light while allowing it to perform and function better than ever.",
    },
    {
      title: "WEBSITE DEVELOPMENT",
      description:
        "If you already have a suitable website but need professional help regarding occasional updates and maintenance, we're eager to help! Forge Apollo offers hosting on a secure server, assistance with regular maintenance to ensure a smooth-running website at all times, and website and plugin updates when you need them.",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="text-left mb-8 sm:mb-12">
        <h3 className="text-indigo-600 text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
          OUR SERVICES
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 max-w-xl">
          Tailored solutions, expert execution, unmatched quality.
        </h2>
      </div>
      <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 sm:p-6 rounded-xl shadow hover:shadow-lg transition text-left"
          >
            <div className="mb-3 sm:mb-4">
              <img
                src="/ServicePage/ServiceIcons/starIcon.png"
                alt="Service Icon"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
