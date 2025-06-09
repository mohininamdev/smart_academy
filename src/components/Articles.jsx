import React from "react";
import Student1 from "../assets/student1.png";
import Student2 from "../assets/student2.png";
import Student3 from "../assets/student3.png";

const articlesCard = [
  {
    title: "The Benefits of Enrolling Kids in Online Learning",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: Student1,
  },
  {
    title: "Unlock Your Child's Potential with Online Education",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: Student2,
  },
  {
    title: "Engage and Inspire: The Power of Online Learning for Kids",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: Student3,
  },
];

const Articles = () => {
  return (
    <section className=" py-12 pb-[80px] bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-8">Articles And Insight</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {articlesCard.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-56 object-cover rounded-t-lg" />
            <div className="p-6">
              <h3 className="text-lg text-blue-600 font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
              <button className="bg-pink-500 text-white px-6 py-2 rounded-full mt-4 hover:bg-pink-600 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
