import { Code, Database, Globe, Wrench } from "lucide-react"

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: Code,
      skills: ["JavaScript", "HTML5", "CSS3", "C", "C++", "Java"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Frameworks & Libraries",
      icon: Globe,
      skills: ["React.js", "Node.js", "Express.js", "Firebase", "ChakraUI", "TailwindCSS"],
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "Database & Tools",
      icon: Database,
      skills: ["MongoDB", "Firebase", "Git", "RESTful APIs", "Postman", "Expo", "MySQL"],
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Soft Skills",
      icon: Wrench,
      skills: ["Problem Solving", "Teamwork", "Communication", "Time Management", "Adaptability", "Leadership"],
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="skills" className="py-12 md:py-16 lg:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-primary-400">Skills</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and soft skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div
                key={index}
                className="bg-gray-800 p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-primary-500 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4 md:mb-6">
                  <div className={`p-2 md:p-3 rounded-lg bg-gradient-to-r ${category.color} mr-3 md:mr-4`}>
                    <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-primary-400">{category.category}</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-900 px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-600 text-center hover:border-primary-500 hover:bg-gray-700 transition-all duration-300 group"
                    >
                      <span className="text-gray-300 text-xs md:text-sm font-medium group-hover:text-primary-400 transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
