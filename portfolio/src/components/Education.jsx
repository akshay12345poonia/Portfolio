import { GraduationCap, Calendar, MapPin } from "lucide-react"

const Education = () => {
  const educationData = [
    {
      institution: "Masai School",
      degree: "Full Stack Web Development Program",
      location: "Bangalore, Karnataka",
      period: "present",
      description:
        "Comprehensive program covering MERN stack development, data structures, algorithms, and modern web technologies with hands-on projects and industry-relevant curriculum.",
      highlights: ["MERN Stack Development", "Data Structures & Algorithms", "System Design", "Project-based Learning"],
    },
    {
      institution: "Chaudhary Charan Singh University",
      degree: "Master of Science in Computer Science",
      location: "Meerut, Uttar Pradesh",
      period: "2022–2024",
      description:
        "Achieved 76.5% in postgraduate coursework with focus on advanced computer science concepts, software engineering principles, and research methodologies.",
      highlights: ["Software Engineering", "Database Management", "Computer Networks", "Research Methodology"],
    },
  ]

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-primary-400">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey in computer science and web development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-primary-600 hidden md:block"></div>

            {educationData.map((edu, index) => (
              <div key={index} className="relative mb-12 md:ml-16">
                {/* Timeline dot */}
                <div className="absolute -left-20 top-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-gray-900 hidden md:block"></div>

                <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-primary-500 transition-all duration-300 transform hover:scale-105">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary-400 mb-2 flex items-center">
                        <GraduationCap className="w-6 h-6 mr-2" />
                        {edu.degree}
                      </h3>
                      <h4 className="text-xl font-semibold text-white mb-3">{edu.institution}</h4>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-gray-400">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-primary-400" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-primary-400" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">{edu.description}</p>

                  <div>
                    <h5 className="font-semibold text-primary-300 mb-3">Key Highlights:</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {edu.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
