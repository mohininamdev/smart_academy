const Subscribe = () => {
    return (
      <section className="bg-pink-500 py-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto">
          Ignite Your Child's Potential Take the Leap with an Online Course
        </h2>
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Your email address..."
            className="px-6 py-3 rounded-full w-80 text-gray-700 focus:outline-none"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg transition">
            Subscribe
          </button>
        </div>
      </section>
    );
  };
  
  export default Subscribe;
  