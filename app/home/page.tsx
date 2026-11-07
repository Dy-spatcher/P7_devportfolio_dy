import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-10 bg-white rounded-xl shadow-md max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Hi, I'm Antonio M. Dy!
        </h1>

        <h2 className="text-xl font-semibold text-blue-600 mb-4">
          BSIT 2B
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          Welcome to my personal portfolio! I am an Information Technology
          student who enjoys exploring technology, learning new skills,
          and discovering how things work. This website showcases my
          activities, skills, and learning experiences.
        </p>
      </div>
    </div>
  );
}