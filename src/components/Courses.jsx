import React from "react";
import scienceCourse from "../assets/science-course.png";
import chefCourse from "../assets/chef-course.png";
import musicCourse from "../assets/music-course.png";
import swimmingCourse from "../assets/swimming-course.png";
import aerobicCourse from "../assets/aerobic-course.png";
import languagesCourse from "../assets/languages-course.png";
import artCourse from "../assets/art-course.png";
import gogreenCourse from "../assets/gogreen-course.png";

const Courses = () => {
  const courses = [
    { title: "Kids Science Course", img: scienceCourse },
    { title: "Kids Chef Course", img: chefCourse },
    { title: "Kids Music Course", img: musicCourse },
    { title: "Kids Swimming Course", img: swimmingCourse },
    { title: "Kids Aerobic Course", img: aerobicCourse },
    { title: "Kids Languages Course", img: languagesCourse },
    { title: "Kids Craft & Art Course", img: artCourse },
    { title: "Kids Go Green Course", img: gogreenCourse },
  ];

  return (
    <div className=" text-center bg-gray-100  pt-6">
      <h2 className="p-16 text-4xl font-bold text-blue-600 mb-8">
        Our Featured Course <br/>at Smart Academy
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className=" overflow-hidden transition-transform transform hover:scale-105">
            <img
              src={course.img}
              alt={course.title}
              className="w-[282.52px] h-[272.5px]  "/>
            <div className=" pt-3 text-left font-medium text-[24px ]">
              <h4 className="text-lg font-semibold text-blue-600 pb-6">
                {course.title}
              </h4>
            </div>
          </div>
        ))}
      </div> 
    </div>
  );
};

export default Courses;
