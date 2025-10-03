import { Phone, Mail, Linkedin, Globe } from "lucide-react";

export default function ContactSection() {
  const steps = [
    {
      step: 1,
      title: "Introductions (10-15 mins)",
      description:
        "A quick call to introduce ourselves and see if there's a good vibe and mutual fit.",
    },
    {
      step: 2,
      title: "Discovery Call (20-30 mins)",
      description:
        "We'll dive a little deeper into your business goals, challenges, and opportunities.",
    },
    {
      step: 3,
      title: "Strategic Business Review (60-90 mins)",
      description:
        "See me in action as I share initial insights and ideas tailored to your business.",
    },
  ];

  const contactDetails = [
    {
      type: "Phone",
      value: "+1-262-945-5057",
      href: "tel:+1-262-945-5057",
      icon: Phone,
    },
    {
      type: "Website contact",
      value: "brucecramer.com/contact",
      href: "https://www.brucecramer.com/contact",
      icon: Globe,
    },
    {
      type: "Email",
      value: "bcramer@focalpointcoaching.com",
      href: "mailto:bcramer@focalpointcoaching.com",
      icon: Mail,
    },
    {
      type: "LinkedIn",
      value: "linkedin.com/in/bruce-j-cramer",
      href: "http://www.linkedin.com/in/bruce-j-cramer",
      icon: Linkedin,
    },
  ];

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready for Real Growth?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Let's start a conversation. No pressure, no obligation... just a
            clear path forward.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Process */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8">
              A Simple, No-Pressure Process
            </h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8">
              Get In Touch
            </h3>
            <div className="space-y-6">
              {contactDetails.map((detail, index) => {
                const IconComponent = detail.icon;
                return (
                  <a
                    key={index}
                    href={detail.href}
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-gradient-start/20 transition-all duration-200 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center group-hover:opacity-80 transition-opacity">
                      <IconComponent className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-gray-500">
                        {detail.type}
                      </div>
                      <div className="text-sm sm:text-base md:text-lg text-gray-900 group-hover:text-gradient-start transition-colors">
                        {detail.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
