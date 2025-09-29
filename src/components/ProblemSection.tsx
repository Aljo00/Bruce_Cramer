import { AlertCircle } from 'lucide-react';

export default function ProblemSection() {
  const painPoints = [
    {
      title: "Overwhelmed & Scattered",
      description: "Feeling pulled in too many directions with no clear priorities.",
      icon: "🌪️"
    },
    {
      title: "Fire Fighting Mode",
      description: "Constantly putting out fires instead of fixing what's broken.",
      icon: "🔥"
    },
    {
      title: "Trapped in Operations",
      description: "Stuck working in the business, not on it.",
      icon: "⚙️"
    },
    {
      title: "Scaling Struggles",
      description: "Unsure how to scale without burning out or breaking what works.",
      icon: "📈"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          I Know The Pressure You're Facing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            As a business leader, you're dealing with challenges that keep you up at night
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {painPoints.map((point, index) => (
            <div key={index} className="group relative p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-gradient-start/20 transition-all duration-300">
              <div className="text-center">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 sm:p-8 rounded-xl border border-gradient-start/20 shadow-sm">
            <p className="text-lg sm:text-xl gradient-text font-semibold">
            You're not alone, and you don't have to figure it all out the hard way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}