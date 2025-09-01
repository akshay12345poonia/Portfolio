"use client"

import { Github, FileText } from "lucide-react"

const Hero = ({ onResumeClick }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm{" Akshay Poonia "}
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Akshay Poonia
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-primary-400 mb-6 font-semibold">Full Stack Developer</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Aspiring Software Developer with strong proficiency in MERN stack, passionate about crafting seamless
              UI/UX experiences and exploring Generative AI to enhance application functionality.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* <button
                onClick={onResumeClick}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25"
              >
                <FileText className="w-5 h-5 mr-2" />
                View Resume
              </button> */}
              {/* <a
    href="/Akshay_Resume.pdf" // file is in public folder
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25"
  ></a> */}
  <a
    href="/Akshay_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
  >
    <FileText className="w-5 h-5 mr-2" />
    View Resume
  </a>
  <a
    href="/Akshay_Resume.pdf"
    download="Akshay_Resume.pdf"
    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
  >
    <FileText className="w-5 h-5 mr-2" />
    Download Resume
  </a>
              <a
                href="https://github.com/akshay12345poonia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-primary-500 text-primary-400 font-semibold rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-primary-500 shadow-2xl shadow-primary-500/20">
                <img
                  src="/profilem.jpg"
                  alt="Akshay Poonia"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500/20 rounded-full animate-bounce-slow"></div>
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-400/20 rounded-full animate-bounce-slow"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
