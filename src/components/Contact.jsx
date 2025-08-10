export default function Contact() {
  return (
    <section id="contact" className="bg-blue-600 text-white py-12 px-4">
      <div className="max-w-xl mx-auto text-center">
        <p className="tracking-widest text-xs mb-4">35,000+ ALREADY JOINED</p>
        <h2 className="text-2xl md:text-3xl font-medium mb-4 text-white">
          Stay up-to-date with what we’re doing
        </h2>
        <form className="flex flex-col md:flex-row gap-4 justify-center items-center mt-6">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-3 rounded-md text-blue-950 w-full md:w-auto focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-3 w-full md:w-auto rounded-md font-medium shadow hover:bg-red-600 transition"
          >
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
}