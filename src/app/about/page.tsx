// src/app/about.tsx
import React from "react";

const teamMembers = [
  {
    name: "Ishan Singh",
    role: "Lead Developer",
    description: "NSUT '26",
    img: "ishan.jpeg",
  },
  {
    name: "Vishnu Aggarwal",
    role: "AI Engineer",
    description: "NSUT '26",
    img: "vishnu.jpg",
  },
  {
    name: "Arush Singh",
    role: "UI/UX Designer",
    description: "NSUT '26",
    img: "arush.jpg",
  },
  {
    name: "Pranav Gaur",
    role: "Backend Developer",
    description: "NSUT '26",
    img: "pranav.jpg",
  },
];

const About = () => {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-5xl font-bold mb-8">About Us</h1>
      <p className="mb-6 max-w-2xl mx-auto text-muted-foreground ">
        We are a passionate team dedicated to transforming the way social media
        analytics is perceived. Our collaborative approach ensures innovative
        solutions, empowering users to gain deeper insights and elevate their
        social media strategies.
      </p>
      <h2 className="text-2xl  mb-4 text-center">Team Members</h2>
      <div className="flex flex-wrap gap-6 items-center justify-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="p-4 border border-neutral-700 rounded-xl shadow-md w-full sm:w-64"
          >
            <img
              src={member.img}
              alt=""
              className="h-48 object-cover mb-2 w-full rounded-xl"
            />
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-sm text-gray-400">{member.role}</p>
            <p className="mt-2 text-neutral-300 font-thin">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
