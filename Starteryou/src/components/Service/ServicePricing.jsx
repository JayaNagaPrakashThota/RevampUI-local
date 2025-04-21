import { useState } from "react";
export default function ServicePricing() {
  const [selected, setSelected] = useState(null);
  const plans = [
    {
      title: "Starter",
      price: "$0",
      frequency: "/Month",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam",
      buttonText: "Try For Free",
      buttonStyle: "bg-white text-gray-400 border border-blue-400",
      features: [
        "Lorem ipsum dolor sit amet, consectetuer",
        "Lorem ipsum dolor sit amet,",
        "Lorem ipsum dolor sit amet,",
        "Lorem ipsum dolor sit amet,",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor sit amet,amet,",
        "Lorem ipsum dolor sit amet,",
      ],
    },
    {
      title: "Pro",
      price: "$10",
      frequency: "/Month",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam",
      buttonText: "Contact Us",
      buttonStyle: "bg-orange-600 text-white",
      features: [
        "Lorem ipsum dolor sit amet, consectetuer",
        "Lorem ipsum dolor sit amet,",
        "Lorem ipsum dolor sit amet,",
        "Lorem ipsum dolor sit amet,",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor sit amet,amet,",
        "Lorem ipsum dolor sit amet,",
      ],
    },
    {
      title: "Enterprise",
      price: "$120",
      frequency: "/Month",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam",
      buttonText: "Contact Us",
      buttonStyle: "bg-white text-gray-400 border border-blue-400",
      features: [
        "Lorem ipsum dolor sit amet, consectetuer",
        "Lorem ipsum dolor sit amet,",
        "Lorem ipsum dolor sit amet,",
        "Lorem ipsum dolor sit amet,",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor sit amet,amet,",
        "Lorem ipsum dolor sit amet,",
      ],
    },
  ];
  return (
    <div
      id="pricing"
      className="py-12 sm:py-16 px-4 sm:px-6 flex flex-col items-center bg-[#e5d7f34d]"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-8 sm:mb-12 md:mb-20 text-center">
        Our Awesome Pricing Plans
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-lg shadow-lg transition-transform duration-300 cursor-pointer ${
              selected === index
                ? "bg-white scale-[1.02] sm:scale-105 ring-2 sm:ring-4 ring-purple-500"
                : "bg-white bg-opacity-20"
            }`}
            onClick={() => setSelected(index)}
          >
            <h2 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
              {plan.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4">
              {plan.description}
            </p>
            <div className="text-xl sm:text-2xl md:text-3xl text-purple-500 font-light mb-3 sm:mb-4">
              {plan.price}
              <span className="text-xs sm:text-sm md:text-base">
                {plan.frequency}
              </span>
            </div>
            <button
              className={`w-full py-1 sm:py-2 rounded-md font-light italic mb-4 sm:mb-6 text-xs sm:text-sm ${
                selected === index
                  ? "bg-orange-600 text-white"
                  : "bg-white text-gray-400 border border-blue-400"
              }`}
            >
              {plan.buttonText}
            </button>
            <ul className="space-y-1 sm:space-y-2">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-xs sm:text-sm text-black"
                >
                  <span className="text-blue-500 mr-1 sm:mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
