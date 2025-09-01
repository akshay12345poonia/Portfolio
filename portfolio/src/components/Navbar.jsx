"use client"

import { useState } from "react"
import { Menu, X, FileText } from "lucide-react"

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  // Function to handle resume button click
  const handleResumeClick = () => {
    // Path to your resume file in the public folder
    const resumePath = '/Akshay_Resume.pdf'
    
    // Open the PDF file in a new tab
    window.open(resumePath, '_blank')
    
    // Close mobile menu if open
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Akshay Poonia
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-primary-400 bg-gray-800"
                      : "text-gray-300 hover:text-primary-400 hover:bg-gray-800"
                  }`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleResumeClick}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-medium rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25"
              >
                <FileText className="w-4 h-4 mr-2" />
                Resume
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-primary-400 bg-gray-700"
                    : "text-gray-300 hover:text-primary-400 hover:bg-gray-700"
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleResumeClick}
              className="w-full mt-4 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-medium rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300"
            >
              <FileText className="w-4 h-4 mr-2" />
              Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

// import { useState } from "react"
// import { Menu, X, FileText } from "lucide-react"

// const Navbar = ({ activeSection, onResumeClick }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const navItems = [
//     { id: "home", label: "Home" },
//     { id: "about", label: "About" },
//     { id: "education", label: "Education" },
//     { id: "projects", label: "Projects" },
//     { id: "skills", label: "Skills" },
//     { id: "contact", label: "Contact" },
//   ]

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId)
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" })
//     }
//     setIsMenuOpen(false)
//   }

//   return (
//     <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
//               Akshay Poonia
//             </span>
//           </div>

//           Desktop Menu
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
//                     activeSection === item.id
//                       ? "text-primary-400 bg-gray-800"
//                       : "text-gray-300 hover:text-primary-400 hover:bg-gray-800"
//                   }`}
//                   onClick={() => scrollToSection(item.id)}
//                 >
//                   {item.label}
//                 </button>
//               ))}
//               <button
//                 onClick={onResumeClick}
//                 className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-medium rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25"
//               >
//                 <FileText className="w-4 h-4 mr-2" />
//                 Resume
//               </button>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-300"
//             >
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-gray-800 border-t border-gray-700">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
//                   activeSection === item.id
//                     ? "text-primary-400 bg-gray-700"
//                     : "text-gray-300 hover:text-primary-400 hover:bg-gray-700"
//                 }`}
//                 onClick={() => scrollToSection(item.id)}
//               >
//                 {item.label}
//               </button>
//             ))}
//             <button
//               onClick={() => {
//                 onResumeClick()
//                 setIsMenuOpen(false)
//               }}
//               className="w-full mt-4 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-medium rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300"
//             >
//               <FileText className="w-4 h-4 mr-2" />
//               Resume
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }

// export default Navbar
