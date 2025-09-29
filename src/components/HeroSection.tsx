export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="w-full max-w-7xl mx-auto py-20">
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          {/* Profile Image */}
          <div className="relative mb-8">
            <div className="inline-block">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Bruce Cramer, Business Coach"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              I Turn Chaos into Clarity, Pressure into Purpose, and Dreams into
              Lasting Success.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              I'm a seasoned executive and certified business coach helping
              leaders scale their businesses profitably while achieving
              work-life balance.
            </p>
            <div className="relative z-20 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="relative z-30 inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 shadow-lg text-sm sm:text-base cursor-pointer"
              >
                Schedule a No-Pressure Call
              </a>
              <a
                href="#about"
                className="relative z-30 inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-gradient-start text-gradient-start font-semibold rounded-lg hover:bg-gradient-start hover:text-white transition-all duration-200 text-sm sm:text-base cursor-pointer"
              >
                Learn About My Method
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
