const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center px-4 md:px-8 lg:px-16 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 pt-12">
        {/* Text Content */}
        <div className="md:flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Hi, I'm
            <br />
            Oyindamola Bakare
          </h1>
          <p className="text-2xl md:text-3xl text-gray-400 mb-8">
            Frontend Developer
          </p>

          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              type="button"
              className="px-8 py-3.5 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Download CV
            </button>
            <button
              type="button"
              className="px-8 py-3.5 border-2 border-gray-600 text-white rounded-lg font-medium hover:border-emerald-500 hover:text-emerald-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className="flex justify-center md:flex-1">
          <div className=" w-full max-w-xl group">
            <img
              src="/Images/Group.png"
              alt="Oyindamola Bakare"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
