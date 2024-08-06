"use client"
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter';

const Typewriter = () => {
    
  const [text] = useTypewriter({
    words: [
      "Welcome to DreamerBlog",
      "Am a Fullstack developer",
      "I write about programming",
      "And any Techstuff",
      "Am a Tutor at Gradenet ICT"
    ],
    loop: true,
    typeSpeed: 30,
    delaySpeed: 2000,
    deleteSpeed: 10,
  });
  return (
    <h1 className="font-bold px-2 text-4xl md:text-6xl mt-10 bg-gradient-to-r w-fit from-orange-300 via-red-300 to-purple-500 bg-clip-text text-transparent">
      {text}
    </h1>
  );
}

export default Typewriter