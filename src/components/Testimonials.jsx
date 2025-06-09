import React from "react";
import Ellipse1 from "../assets/ellipse1.png"
import Ellipse2 from "../assets/ellipse2.png"
import Ellipse3 from "../assets/ellipse3.png";
import Ellipse4 from "../assets/ellipse4.png";
import Ellipse5 from "../assets/ellipse5.png";
import Ellipse6 from "../assets/ellipse6.png";
import { motion } from "framer-motion";
const testimonials = [
    {
      name: "Park Jee",
      image: Ellipse1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lacus laoreet tristique."
    },
    {
      name: "Jasmine Vandervort",
      image: Ellipse2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lacus laoreet tristique."
    },
    {
      name: "Jasmine",
      image: Ellipse3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lacus laoreet tristique."
    },
    {
      name: "Husna Mawadus",
      image: Ellipse4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lacus laoreet tristique."
    },
    {
      name: "Jacob Kozey",
      image: Ellipse5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lacus laoreet tristique."
    },
    {
      name: "Jacob Kozey",
      image: Ellipse6,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lacus laoreet tristique."
    }
  ];
  
  const Testimonials = () => {
    return (
      <section className=" text-center py-[140px] bg-gray-100 text-black ">
        <h2 className="text-4xl font-bold text-blue-600">Our Testimonial <br/> at Smart Academy</h2>
        
        
        <div className="pt-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 flex items-center gap-4 text-left"
              initial={{ opacity: 2, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 4, delay: index * 0.2 }}
            >
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h4 className="text-lg font-semibold text-blue-600">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  