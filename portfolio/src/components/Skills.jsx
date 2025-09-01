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
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-primary-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and soft skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-primary-500 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-400">{category.category}</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-900 px-4 py-3 rounded-lg border border-gray-600 text-center hover:border-primary-500 hover:bg-gray-700 transition-all duration-300 group"
                    >
                      <span className="text-gray-300 text-sm font-medium group-hover:text-primary-400 transition-colors duration-300">
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
