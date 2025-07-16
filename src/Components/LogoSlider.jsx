import { useState } from "react";

const logos = [
  { name: "Shallow", src: "path/to/shallow-logo.svg" },
  { name: "Diggo", src: "path/to/diggo-logo.svg" },
  { name: "Next", src: "path/to/next-logo.svg" },
  { name: "Dopkin", src: "path/to/dopkin-logo.svg" },
  { name: "Verticle", src: "path/to/verticle-logo.svg" },
];

export default function LogoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === logos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? logos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex items-center justify-center space-x-4 py-8">
      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="text-gray-400 hover:text-gray-600 transition"
      >
        &lt;
      </button>

      {/* Logo Display */}
      <div className="flex overflow-x-auto space-x-6">
        {logos.map((logo, index) => (
          <div
            key={logo.name}
            className={`flex flex-col items-center transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-50"
            }`}
          >
            <img src={logo.src} alt={logo.name} className="h-12 mb-2" />
            <p className="text-gray-400">{logo.name}</p>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="text-gray-400 hover:text-gray-600 transition"
      >
        &gt;
      </button>
    </div>
  );
}
