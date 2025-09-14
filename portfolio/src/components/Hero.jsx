"use client"

import { Github, FileText } from "lucide-react"

const Hero = ({ onResumeClick }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in order-2 lg:order-1">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Akshay Poonia
              </span>
            </h1>
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-primary-400 mb-4 md:mb-6 font-semibold">Full Stack Developer</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Aspiring Software Developer with strong proficiency in MERN stack, passionate about crafting seamless
              UI/UX experiences and exploring Generative AI to enhance application functionality.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
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
                href="/Akshay-poonia-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm md:text-base font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                <FileText className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                View Resume
              </a>
              <a
                href="/Akshay-poonia-Resume.pdf"
                download="Akshay-Poonia-Resume.pdf"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm md:text-base font-semibold rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                <FileText className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Download Resume
              </a>
              <a
                href="https://github.com/akshay12345poonia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-primary-500 text-primary-400 text-sm md:text-base font-semibold rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <Github className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up order-1 lg:order-2">
            <div className="relative">
              <div className="w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-primary-500 shadow-2xl shadow-primary-500/20">
                <img
                  src="/akshay poonia.jpg"
                  alt="Akshay Poonia"
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 xs:-top-4 xs:-right-4 w-12 h-12 xs:w-16 xs:h-16 md:w-20 md:h-20 bg-primary-500/20 rounded-full animate-bounce-slow"></div>
              <div
                className="absolute -bottom-2 -left-2 xs:-bottom-4 xs:-left-4 w-10 h-10 xs:w-12 xs:h-12 md:w-16 md:h-16 bg-primary-400/20 rounded-full animate-bounce-slow"
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
