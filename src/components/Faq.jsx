import { useState } from "react";

const faqs = [
  {
    question: "What is Bookmark?",
    answer: "Bookmark is a simple bookmark manager that helps you organize and access your favorite websites quickly and efficiently.",
  },
  {
    question: "How can I request a new browser?",
    answer: "You can reach out through our contact form and suggest your preferred browser. We're constantly adding more based on user feedback.",
  },
  {
    question: "Is there a mobile app?",
    answer: "Currently, we’re focused on browser extensions, but a mobile app is in the works!",
  },
  {
    question: "What about other Chromium browsers?",
    answer: "Most Chromium-based browsers will work with our Chrome extension, but we recommend using one of the officially supported browsers for the best experience.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 text-center px-6">
      {/* Header */}
      <div className="max-w-xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-medium text-blue-950 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500">
          Here are some of our FAQs. If you have any other questions you’d like
          answered, please feel free to email us.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-2xl mx-auto text-left border-t border-gray-200">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-5 text-blue-950 font-medium hover:text-red-500 transition"
            >
              <span className="text-sm flex text-left">{faq.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180 text-red-500" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {activeIndex === index && (
              <div className="pb-5 text-gray-500">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button className="mt-10 bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:opacity-90 transition">
        More Info
      </button>
    </section>
  );
}
