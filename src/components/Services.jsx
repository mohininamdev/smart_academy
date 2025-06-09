import TeacherIcon from "../assets/icon-teacher.png";
import ElearningIcon from "../assets/icon-elearning.png";
import CertificateIcon from "../assets/icon-certicate.png";
import ScoreIcon from "../assets/icon-score.png";

export default function Services() {
  const services = [
    {
      title: "Professional Teachers",
      color: "bg-blue-500",
      image: TeacherIcon,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Online Courses",
      color: "bg-pink-500",
      image: ElearningIcon,
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Certified Courses",
      color: "bg-blue-500",
      image: CertificateIcon,
      description: "Lorem ipsum dolor sit amet elit dolor.",
    },
    {
      title: "Better Value",
      color: "bg-pink-500",
      image: ScoreIcon,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem dolor elit.",
    },
  ];

  return (
    <div className="text-center py-12 bg-gray-100">
      <p className="mx-auto max-w-2xl px-4 text-3xl sm:text-4xl md:text-5xl font-bold text-[#5676FF]">
        Smart Academy offers services like
      </p>
      <div className="mt-12 grid gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white text-black p-6 rounded-2xl shadow-lg flex flex-col items-center"
          >
            <div
              className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-4`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-8 h-8"
              />
            </div>
            <h4 className="text-xl font-medium mb-2">{service.title}</h4>
            <p className="text-gray-600 text-base">{service.description}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
}
