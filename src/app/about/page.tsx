// src/app/about.tsx
import React from "react";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Project Manager",
    description:
      "Alice is responsible for overseeing the project and ensuring timely delivery.",
  },
  {
    name: "Bob Smith",
    role: "Lead Developer",
    description:
      "Bob leads the development team and is responsible for the core architecture.",
  },
  {
    name: "Charlie Brown",
    role: "AI Specialist",
    description:
      "Charlie works on integrating AI models to enhance social media analytics.",
  },
  {
    name: "Diana Prince",
    role: "UI/UX Designer",
    description:
      "Diana designs the user interface and ensures a great user experience.",
  },
];

const About = () => {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-6">
        This is a hackathon project centered around social media analytics
        powered by AI. Our team is dedicated to providing insightful analytics
        to help users understand and improve their social media presence.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-center">Team Members</h2>
      <div className="flex flex-wrap gap-6 items-center justify-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-md w-full sm:w-64"
          >
            <img
              src="wallpaper.jpg"
              alt=""
              className="h-48 object-cover mb-2"
            />
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>
            <p className="mt-2">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
