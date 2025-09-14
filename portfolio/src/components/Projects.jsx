import { ExternalLink, Github, Zap } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "Mind Board App",
      description:
        "Interactive whiteboard application with customizable drawing tools, real-time storage, and cross-platform compatibility.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Firebase"],
      liveDemo: "https://mind-board.netlify.app/",
      github: "https://github.com/akshay12345poonia/Mind_Board_App",
      image: "/Mind-Board-App.png",
      features: [
        "Real-time collaborative drawing",
        "Customizable drawing tools",
        "Firebase integration",
        "Cross-platform compatibility",
      ],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Crime Management System",
      description:
        "Frontend crime tracking platform with role-based access for users and admins, featuring responsive design and real-time updates.",
      technologies: ["ReactJS", "Vite", "TailwindCSS", "Firebase"],
      liveDemo: "https://crime-tracker-system.netlify.app/",
      github: "https://github.com/akshay12345poonia/Crime_Management_System",
      image: "/Crime-tracker-system.png",
      features: ["Role-based access control", "Real-time complaint tracking", "Admin dashboard", "Responsive design"],
      gradient: "from-red-500 to-pink-600",
    },
    {
      title: "MITHub",
      description:
        "Student-focused platform for uploading, searching, and accessing academic materials with efficient search functionality.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Firebase"],
      liveDemo: "https://mit-hub.netlify.app/",
      github: "https://github.com/akshay12345poonia/MIT_Hub",
      image: "/mit-hub.png",
      features: [
        "File upload system",
        "Advanced search functionality",
        "Mobile-friendly interface",
        "User authentication",
      ],
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "eBay Clone",
      description:
        "Full-featured e-commerce platform clone with user accounts, product listings, auction bidding system, and transaction feedback.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Firebase", "CSS Grid", "Firebase Auth"],
      liveDemo: "https://e-bay-clone-website.netlify.app/",
      github: "https://github.com/akshay12345poonia/ebay",
      image: "/e-bay.png",
      features: [
        "User account management",
        "Product buy/sell functionality", 
        "Auction bidding system",
        "Transaction feedback system",
      ],
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      title: "MindArena Game",
      description:
        "Interactive mini-game hub featuring Flappy Bird, Block Puzzle, and Word Search games designed to challenge reflexes, logic, and vocabulary.",
      technologies: ["ReactJS", "Canvas Game", "React Router DOM", "TailwindCSS"],
      liveDemo: "https://mind-arena.netlify.app/",
      github: "https://github.com/akshay12345poonia/MindArena",
      image: "/mind-arena.png",
      features: [
        "Multiple game modes",
        "Canvas-based graphics",
        "Responsive game design",
        "Score tracking system",
      ],
      gradient: "from-purple-500 to-indigo-600",
    },
  ]

  return (
    <section id="projects" className="py-12 md:py-16 lg:py-20 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            My <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden hover:border-blue-500 transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} demo`}
                  className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-4 md:p-6">
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                  </div>
                </div>

                <p className="text-slate-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">{project.description}</p>

                {/* Features */}
                <div className="mb-4 md:mb-6">
                  <h4 className="font-semibold text-blue-300 mb-2 md:mb-3 text-sm md:text-base">Key Features:</h4>
                  <ul className="space-y-1 md:space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-slate-300 text-xs md:text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 md:mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4 md:mb-6">
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 md:px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col xs:flex-row gap-2 md:gap-3">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-3 md:px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs md:text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                    <span className="hidden xs:inline">Live Demo</span>
                    <span className="xs:hidden">Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-3 md:px-4 py-2 border border-blue-500 text-blue-400 text-xs md:text-sm font-medium rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    <Github className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
// import { ExternalLink, Github, Zap } from "lucide-react"

// const Projects = () => {
//   const projects = [
//     {
//       title: "Mind Board App",
//       description:
//         "Interactive whiteboard application with customizable drawing tools, real-time storage, and cross-platform compatibility.",
//       technologies: ["HTML5", "CSS3", "JavaScript", "Firebase"],
//       liveDemo: "https://mind-board.netlify.app/",
//       github: "https://github.com/akshay12345poonia/Mind_Board_App",
//       features: [
//         "Real-time collaborative drawing",
//         "Customizable drawing tools",
//         "Firebase integration",
//         "Cross-platform compatibility",
//       ],
//       gradient: "from-blue-500 to-purple-600",
//     },
//     {
//       title: "Crime Management System",
//       description:
//         "Frontend crime tracking platform with role-based access for users and admins, featuring responsive design and real-time updates.",
//       technologies: ["ReactJS", "Vite", "TailwindCSS", "Firebase"],
//       liveDemo: "https://crime-tracker-system.netlify.app/",
//       github: "https://github.com/akshay12345poonia/Crime_Management_System",
//       features: ["Role-based access control", "Real-time complaint tracking", "Admin dashboard", "Responsive design"],
//       gradient: "from-red-500 to-pink-600",
//     },
//     {
//       title: "MITHub",
//       description:
//         "Student-focused platform for uploading, searching, and accessing academic materials with efficient search functionality.",
//       technologies: ["HTML5", "CSS3", "JavaScript", "Firebase"],
//       liveDemo: "https://mit-hub.netlify.app/",
//       github: "https://github.com/akshay12345poonia/MIT_Hub",
//       features: [
//         "File upload system",
//         "Advanced search functionality",
//         "Mobile-friendly interface",
//         "User authentication",
//       ],
//       gradient: "from-green-500 to-teal-600",
//     },
    
//   ]

//   return (
//     <section id="projects" className="py-20 bg-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4">
//             My <span className="text-primary-400">Projects</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-8"></div>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Here are some of my recent projects that showcase my skills and experience in web development
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-primary-500 transition-all duration-300 transform hover:scale-105 group"
//             >
//               {/* Project Header */}
//               <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

//               <div className="p-6">
//                 <div className="flex items-start justify-between mb-4">
//                   <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
//                     {project.title}
//                   </h3>
//                   <div className="flex items-center space-x-2">
//                     <Zap className="w-5 h-5 text-primary-400" />
//                   </div>
//                 </div>

//                 <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

//                 {/* Features */}
//                 <div className="mb-6">
//                   <h4 className="font-semibold text-primary-300 mb-3">Key Features:</h4>
//                   <ul className="space-y-2">
//                     {project.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-start text-gray-300 text-sm">
//                         <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Technologies */}
//                 <div className="mb-6">
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech, idx) => (
//                       <span
//                         key={idx}
//                         className="px-3 py-1 bg-primary-500/20 text-primary-300 text-xs font-medium rounded-full border border-primary-500/30"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex space-x-3">
//                   <a
//                     href={project.liveDemo}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-medium rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105"
//                   >
//                     <ExternalLink className="w-4 h-4 mr-2" />
//                     Live Demo
//                   </a>
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-primary-500 text-primary-400 text-sm font-medium rounded-lg hover:bg-primary-500 hover:text-white transition-all duration-300 transform hover:scale-105"
//                   >
//                     <Github className="w-4 h-4 mr-2" />
//                     GitHub
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Projects
