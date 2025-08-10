import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import feature1Img from "../assets/illustration-features-tab-1.svg";
import feature2Img from "../assets/illustration-features-tab-2.svg";
import feature3Img from "../assets/illustration-features-tab-3.svg";

const features = [
	{
		id: 1,
		title: "Simple Bookmarking",
		heading: "Bookmark in one click",
		desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
		img: feature1Img,
	},
	{
		id: 2,
		title: "Speedy Searching",
		heading: "Intelligent search",
		desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
		img: feature2Img,
	},
	{
		id: 3,
		title: "Easy Sharing",
		heading: "Share your bookmarks",
		desc: "Easily share your bookmarks and collection with others. Create a shareable link that can send at the click of a button.",
		img: feature3Img,
	},
];

export default function Features() {
	// State to track the active feature tab
	const [active, setActive] = useState(1);
	// Ref to access the image DOM element
	const imgRef = useRef(null);
	// State to manage the shape size for the background element
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
		<section id="features" className="py-20 text-center overflow-hidden relative">
			{/* Section Header */}
			<div className="max-w-xl mx-auto mb-12 px-6">
				<h2 className="text-3xl md:text-4xl font-medium text-blue-950 mb-4">
					Features
				</h2>
				<p className="text-gray-500">
					Our aim is to make it quick and easy for you to access your favorite
					websites. Your bookmarks sync between your devices so you can access them
					on the go.
				</p>
			</div>

			{/* Tabs */}
			<div className="max-w-2xl mx-auto">
				<div className="flex flex-col md:flex-row justify-center">
					{features.map((f) => (
						<button
							key={f.id}
							onClick={() => setActive(f.id)}
							className={`py-4 border-b border-gray-300 text-blue-950 transition relative
                ${
                  active === f.id
                    ? "before:absolute before:bottom-[-1px] before:left-1/2 before:transform before:-translate-x-1/2 before:w-44 before:h-1 before:bg-red-500"
                    : "text-gray-500 hover:text-red-500"
                }
                ${f.id === 1 ? "border-t md:border-t-0" : ""}
                md:flex-1
              `}
						>
							{f.title}
						</button>
					))}
				</div>
			</div>

			{/* Tab Content */}
			<div className="relative py-3 mt-12 w-full justify-evenly flex flex-col md:flex-row items-center">
				{/* Image and Blue Shape */}
				<div className="flex justify-center relative w-[380px] md:min-w-[500px]">
					<AnimatePresence mode="wait">
						<motion.div
							key={features[active - 1].id}
							initial={{ opacity: 0, x: -40 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 40 }}
							transition={{ duration: 0.5 }}
							className="flex justify-center md:justify-end  relative z-10"
						>
               {/* Blue Shape */}
                <div
                    className="absolute bg-blue-600 rounded-r-full -z-10"
                    style={{
                        width: `${shapeSize.width}px`,
                        height: `${shapeSize.height * 1.4}px`, // make taller so it shows below
                        right: 100,
                        bottom: 0, // anchor to bottom instead of top
                        transform: "translateY(19%)", // push slightly down for balance
                    }}
                >
                </div>
							<img
								ref={imgRef}
								src={features[active - 1].img}
								alt={features[active - 1].title}
								className="w-full max-w-[350px] md:max-w-[400px] lg:max-w-[400px] relative z-10"
								style={{
									height: "auto",
								}}
							/>
						</motion.div>
					</AnimatePresence>
				</div>

				{/* Text Content */}
				<div className="text-center md:text-left px-2 py-10  flex flex-col justify-center">
					<h3 className="text-2xl md:text-3xl font-medium text-blue-950 my-5">
						{features[active - 1].heading}
					</h3>
					<p className="text-gray-500 mb-6 text-sm md:text-base max-w-md mx-auto md:mx-0">
						{features[active - 1].desc}
					</p>
					<button className="bg-blue-600 text-white px-6 md:px-2 md:w-[10rem] py-3 rounded-md shadow hover:opacity-90 transition">
						More Info
					</button>
				</div>
			</div>
		</section>
	);
}
