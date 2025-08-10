import chromeLogo from "../assets/logo-chrome.svg";
import firefoxLogo from "../assets/logo-firefox.svg";
import operaLogo from "../assets/logo-opera.svg";
import BgDots from "../assets/bg-dots.svg";

const browsers = [
  {
    id: 1,
    logo: chromeLogo,
    name: "Add to Chrome",
    version: "Minimum version 62",
  },
  {
    id: 2,
    logo: firefoxLogo,
    name: "Add to Firefox",
    version: "Minimum version 55",
  },
  {
    id: 3,
    logo: operaLogo,
    name: "Add to Opera",
    version: "Minimum version 46",
  },
];

export default function Download() {
  return (
    <section id="pricing" className="py-20 text-center px-6">
      {/* Header */}
      <div className="max-w-xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-medium text-blue-950 mb-4">
          Download the extension
        </h2>
        <p className="text-gray-500">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>

      {/* Browser Cards */}
      <div className="flex flex-col md:flex-row md:items-start gap-8 max-w-6xl mx-auto">
        {browsers.map((browser, index) => (
          <div
            key={browser.id}
            className={`bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3 flex flex-col items-center text-center 
              ${index === 1 ? "md:mt-12" : ""} 
              ${index === 2 ? "md:mt-24" : ""}`}
          >
            <img
              src={browser.logo}
              alt={browser.name}
              className="w-20 h-20 mb-6"
              loading="lazy"
            />
            <h3 className="text-xl font-medium text-blue-950 mb-2">
              {browser.name}
            </h3>
            <p className="text-gray-500 text-sm mb-6">{browser.version}</p>

            {/* Background dots */}
            <img
              src={BgDots}
              alt="dots"
              className="w-full mb-6"
              loading="lazy"
            />

            <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:opacity-90 transition">
              Add & Install Extension
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
