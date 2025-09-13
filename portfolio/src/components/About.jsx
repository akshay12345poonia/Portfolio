import { Code, Database, Globe, Zap } from "lucide-react"

const About = () => {
  const stats = [
    { number: "5+", label: "Projects Completed", icon: Code },
    { number: "10+", label: "Technologies", icon: Database },
    { number: "2+", label: "Years Learning", icon: Globe },
    { number: "100%", label: "Dedication", icon: Zap },
  ]

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-primary-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in the MERN stack (MongoDB, Express.js, React.js,
              Node.js). With strong proficiency in multiple programming languages including C, C++, Java, and
              JavaScript, I bring a comprehensive approach to software development.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in web development has equipped me with hands-on experience in building scalable applications,
              integrating modern technologies like Firebase, and applying core computer science concepts. I'm
              particularly interested in creating seamless user experiences and exploring how Generative AI can enhance
              application functionality.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              As a quick learner and problem-solver, I'm committed to continuous learning and innovation in the
              ever-evolving tech landscape. I believe in writing clean, maintainable code and following best practices
              in software development.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div
                  key={index}
                  className="bg-gray-900 p-6 rounded-xl border border-gray-700 text-center hover:border-primary-500 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary-500/20 rounded-lg">
                      <IconComponent className="w-8 h-8 text-primary-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-400 mb-2">{stat.number}</h3>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
