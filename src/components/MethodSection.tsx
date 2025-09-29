import { Eye, Target, CheckCircle } from 'lucide-react';

export default function MethodSection() {
  const pillars = [
    {
      name: "Awareness",
      description: "Clarity Creates Confidence. I diagnose the current state of your business and leadership with precision to chart an intentional path forward.",
      icon: Eye
    },
    {
      name: "Action",
      description: "Strategy Meets Execution. I turn insight into impact by building a personalized, prioritized plan where every action is tied to a goal.",
      icon: Target
    },
    {
      name: "Accountability",
      description: "Execute, Adapt, Win. I provide the structure and support to ensure follow-through, tracking progress and course-correcting in real time.",
      icon: CheckCircle
    }
  ];

  return (
    <section id="method" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          My Coaching Method™
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-12">
          A Results-Driven Coaching Framework Built on Three Pillars.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div key={index} className="group bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-gradient-start/20 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-white" size={28} />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  {pillar.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}