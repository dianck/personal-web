import {
  PaintBrushIcon,
  DocumentTextIcon,
  ArrowTrendingUpIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

const services = [
  {
    title: "Web Design & Develop",
    icon: ComputerDesktopIcon,
    description:
      "I create modern, responsive website designs that align with your brand identity and deliver great user experiences.",
  },
  {
    title: "UI/UX Design",
    icon: PaintBrushIcon,
    description:
      "I design intuitive user interfaces and seamless user experiences that keep users engaged and make digital products easy to use.",
  },
  {
    title: "Business Analysis",
    icon: ArrowTrendingUpIcon,
    description:
      "I analyze business needs, identify opportunities, and provide data-driven insights to help make strategic decisions and improve processes.",
  },
  {
    title: "App Design & Develop",
    icon: DevicePhoneMobileIcon,
    description:
      "I craft intuitive, high-performance mobile and web applications that blend stunning design with powerful functionality. From wireframes to deployment, I deliver solutions that meet user needs and drive business growth.",
  },
  {
    title: "SEO Marketing",
    icon: MagnifyingGlassIcon,
    description:
      "I help boost your online visibility through strategic SEO practices. From keyword research to on-page optimization, I ensure your website ranks higher, attracts the right audience, and drives sustainable traffic growth.",
  },
  {
    title: "Copywriting",
    icon: DocumentTextIcon,
    description:
      "I craft targeted content strategies that align with your brand goals and SEO objectives. From blog planning to engaging copy, I ensure your content not only ranks — but resonates with your audience and drives action.",
  },
];

export default function WhatIDo() {
  return (
    <section className="w-[120%] mx-[calc(-10%)] md:mx-auto md:w-full md:max-w-7xl flex flex-col md:flex-row items-center justify-center p-6 gap-[10px]">
      <div className="w-full bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col items-center">
        <div className="w-full text-center">
          <div className="text-4xl md:text-6xl font-bold mb-2 text-black relative inline-block">
            What I Do?
            <div className="h-[5px] w-[50px] bg-indigo-600 mt-2 mx-auto mb-8" />
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row flex-wrap items-start justify-center gap-5">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="w-full md:w-[48%] flex flex-row items-start justify-center gap-4 mt-5"
            >
              <div className="bg-white shadow-md rounded-xl p-4">
                <service.icon className="h-10 w-10 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-bold text-black mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
