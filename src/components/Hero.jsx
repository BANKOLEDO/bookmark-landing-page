import heroImg from "../assets/illustration-hero.svg";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";


export default function Hero() {
  const imgRef = useRef(null);
  const [shapeSize, setShapeSize] = useState({ width: 0, height: 0 });

  // Dynamically size shape based on image size
  useEffect(() => {
    function updateSize() {
      if (imgRef.current) {
        const { width, height } = imgRef.current.getBoundingClientRect();
        setShapeSize({
          width: width * 1.1, // slightly wider than image
          height: height * 0.65, // proportional height
        });
      }
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section className="relative overflow-hidden pt-20 pb-15 flex flex-col-reverse md:flex-row items-center gap-10">
      {/* Content container */}
      <div className="container-custom relative z-10 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center md:text-left md:w-1/2 md:mx-10"
        >
          <h1 className="text-[1.6rem] md:text-5xl font-medium mb-6 text-blue-950">
            A Simple Bookmark Manager
          </h1>
          <p className="text-gray-500 mb-6 leading-relaxed">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for free.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-row md:flex-row justify-center md:justify-start gap-4"
          >
            <button className="bg-blue-600 text-white px-3 py-2 rounded-md shadow hover:opacity-90 transition">
              Get it on Chrome
            </button>
            <button className="bg-gray-50 text-blue-950 px-3 py-3 rounded-md shadow hover:opacity-80 transition">
              Get it on Firefox
            </button>
          </motion.div>
        </motion.div>

        {/* Right Image + Shape */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center md:justify-end relative md:w-1/2"
        >
          {/* Blue Shape */}
<div
  className="absolute bg-blue-600 rounded-l-full -z-10"
  style={{
    width: `${shapeSize.width}px`,
    height: `${shapeSize.height * 1.2}px`, // make taller so it shows below
    right: -130,
    bottom: 0, // anchor to bottom instead of top
    transform: "translateY(5%)", // push slightly down for balance
  }}
></div>


          {/* Hero Image */}
          <img
            ref={imgRef}
            src={heroImg}
            alt="Hero Illustration"
            className="w-full max-w-[350px] md:max-w-[600px] lg:max-w-[500px] relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
}
