import { useState, useRef } from "react";
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
	

	return (
		<section id="features" className="py-20 text-center overflow-hidden relative">
			{/* Section Header */}
			<div className="max-w-xl mx-auto mb-12 px-6">
				<h2 className="text-2xl md:text-3xl font-medium text-blue-950 mb-4">
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
			<div className="relative md:px-8 py-3 md:py-8 mt-12 w-full justify-evenly gap-7 flex flex-col md:flex-row items-center md:pl-0">
				{/* Image and Blue Shape */}
				<div className="flex flex-row md:pr-10  w-full md:w-[70%]">
					<AnimatePresence mode="wait">
						<motion.div
							key={features[active - 1].id}
							initial={{ opacity: 0, x: -40 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 40 }}
							transition={{ duration: 0.5 }}
							className="flex flex-row relative z-10"
						>
               {/* Blue Shape */}
               <div
                    className={`bg-blue-600 relative w-[350px] lg:w-[600px] left-0 rounded-r-full -z-10
                       ${active === 1 ? "h-[250px] md:h-[300px]" : "h-[282px] md:h-[330px]"}
                    `}
                    style={{
                        transform: "translateY(15%)", // push slightly down for balance
                    }}
                ></div>
							<img
								ref={imgRef}
								src={features[active - 1].img}
								alt={features[active - 1].title}
								className="w-[350px] md:w-[400px] lg-w-[500px] absolute right-[-1rem] md:right-[-5rem] lg:right-[-7rem]  z-10"
							/>
						</motion.div>
					</AnimatePresence>
				</div>

				{/* Text Content */}
				<div className="text-center  relative md:left-10 md:text-left md:px-7 md:pr-2 py-8 md:py-3 md:mx-8 flex flex-col justify-center">
					<h3 className="text-2xl md:text-3xl font-medium text-blue-950 my-5">
						{features[active - 1].heading}
					</h3>
					<p className="text-gray-500 mb-6 text-sm md:text-base max-w-md mx-auto px-4 md:px-0 md:mx-0">
						{features[active - 1].desc}
					</p>
					<button className="bg-blue-600 text-white w-[18rem] md:w-[10rem] mx-auto md:mx-0 py-3 rounded-md shadow hover:opacity-90 transition">
                        More Info
                    </button>
				</div>
			</div>
		</section>
	);
}