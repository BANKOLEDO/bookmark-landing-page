import { useState } from "react";
import errorIcon from "../assets/icon-error.svg"

export default function Contact() {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <section className="bg-blue-600 text-white py-12 px-4">
      <div className="max-w-xl mx-auto text-center">
        <p className="tracking-widest text-xs mb-4">35,000+ ALREADY JOINED</p>
        <h2 className="text-2xl md:text-3xl font-medium mb-4 text-white">
          Stay up-to-date with what we’re doing
        </h2>
        <form
          className="flex flex-col md:flex-row gap-4 justify-center items-center mt-6"
          onSubmit={(e) => {
            e.preventDefault();
            setTouched(true);
          }}
        >
          <div className="w-full md:w-auto relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched(true)}
              placeholder="Enter your email address"
              className={`px-4 py-3 rounded-md text-blue-950 w-full md:w-[20rem] focus:outline-none transition-all
                ${
                  touched && !isValid
                    ? "border-2 border-red-500"
                    : "border-2 border-transparent md:mt-5"
                }
              `}
              required
            />
            {touched && !isValid && (
              <img src={errorIcon} className="absolute right-4 top-4"></img>
            )}
            {touched && !isValid && (
              <span className="absolute left-0 top-full text-xs text-white text-left bg-red-500 w-full px-2 py-[0.15rem] rounded-b-md shadow">
                Whoops, make sure it’s an email
              </span>
            )}
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white w-full md:w-[10rem] mt-4 px-6 py-3 rounded-md font-medium shadow hover:bg-red-600 transition"
          >
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
}