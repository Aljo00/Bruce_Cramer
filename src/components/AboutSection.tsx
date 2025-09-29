export default function AboutSection() {
  const bioPoints = [
    "With over 45 years of experience in leadership development and corporate growth, I'm a seasoned executive, transformational leader, and growth scaling strategist.",
    "As a former Director at W.W. Grainger, I led strategic initiatives that optimized operations and fueled profitable growth.",
    "I hold an Executive MBA from the prestigious Kellogg School of Management, Northwestern University, and am a Focal Point-certified coach.",
  ];

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Bruce Cramer speaking at an event"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="text-left mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-4">
                ABOUT ME
              </h1>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              My Journey
            </h2>
            <div className="space-y-6">
              {bioPoints.map((point, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
                >
                  {point}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
