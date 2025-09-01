

// import { useState } from "react"
// import { X, Download, Phone, Mail, Github, Linkedin, ExternalLink } from "lucide-react"
// import jsPDF from "jspdf"
// import html2canvas from "html2canvas"
// import toast from "react-hot-toast"

// const ResumeModal = ({ isOpen, onClose }) => {
//   const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)

//   if (!isOpen) return null

//   const handleDownloadPDF = async () => {
//     setIsGeneratingPDF(true)
//     toast.loading("Generating PDF...", { id: "pdf-generation" })

//     try {
//       const resumeElement = document.getElementById("resume-content")

//       // Create canvas from the resume content
//       const canvas = await html2canvas(resumeElement, {
//         scale: 2,
//         useCORS: true,
//         backgroundColor: "#1f2937",
//       })

//       // Create PDF
//       const pdf = new jsPDF("p", "mm", "a4")
//       const imgData = canvas.toDataURL("image/png")

//       const pdfWidth = pdf.internal.pageSize.getWidth()
//       const pdfHeight = (canvas.height * pdfWidth) / canvas.width

//       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)
//       pdf.save("Akshay_Poonia_Resume.pdf")

//       toast.success("PDF downloaded successfully!", { id: "pdf-generation" })
//     } catch (error) {
//       console.error("Error generating PDF:", error)
//       toast.error("Error generating PDF. Please try again.", { id: "pdf-generation" })
//     } finally {
//       setIsGeneratingPDF(false)
//     }
//   }

//   return (
//     <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//       <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-700 shadow-2xl">
//         {/* Header */}
//         <div className="flex justify-between items-center p-6 border-b border-gray-700 bg-gray-900">
//           <h2 className="text-2xl font-bold text-primary-400">Resume Preview</h2>
//           <div className="flex items-center space-x-4">
//             <button
//               onClick={handleDownloadPDF}
//               disabled={isGeneratingPDF}
//               className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               <Download className="w-4 h-4 mr-2" />
//               {isGeneratingPDF ? "Generating..." : "Download PDF"}
//             </button>
//             <button
//               onClick={onClose}
//               className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors duration-300"
//             >
//               <X className="w-6 h-6" />
//             </button>
//           </div>
//         </div>

//         {/* Resume Content */}
//         <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
//           <div id="resume-content" className="p-8 bg-gray-800 text-white">
//             {/* Header */}
//             <div className="text-center mb-8 pb-6 border-b-2 border-primary-500">
//               <h1 className="text-4xl font-bold mb-2">AKSHAY POONIA</h1>
//               <h2 className="text-xl text-primary-400 mb-4 font-semibold">Full Stack Developer</h2>

//               {/* Contact Info with Icons */}
//               <div className="flex flex-wrap justify-center gap-6 text-sm">
//                 <div className="flex items-center space-x-2">
//                   <Phone className="w-4 h-4 text-primary-400" />
//                   <span>+91 7253977518</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Mail className="w-4 h-4 text-primary-400" />
//                   <span>akshay12345poonia@gmail.com</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Github className="w-4 h-4 text-primary-400" />
//                   <span>github.com/akshay12345poonia</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Linkedin className="w-4 h-4 text-primary-400" />
//                   <span>linkedin.com/in/akshay-poonia</span>
//                 </div>
//               </div>
//             </div>

//             {/* Professional Summary */}
//             <div className="mb-8">
//               <h3 className="text-xl font-bold text-primary-400 mb-3 border-b border-primary-400/30 pb-1">
//                 PROFESSIONAL SUMMARY
//               </h3>
//               <p className="text-gray-300 leading-relaxed">
//                 Aspiring Software Developer with strong proficiency in C, C++, Java, and JavaScript, and hands-on
//                 experience in full-stack web development using the MERN stack (MongoDB, Express.js, React.js, Node.js).
//                 Skilled in front-end technologies like HTML, CSS, and React, with backend development expertise using
//                 Node.js and Express. Adept at building scalable web applications, integrating Firebase, and applying
//                 core computer science concepts such as data structures, algorithms, and computer networking. Passionate
//                 about crafting seamless UI/UX experiences and exploring the use of Generative AI to enhance application
//                 functionality. Quick learner and problem-solver with a strong commitment to continuous learning and
//                 innovation.
//               </p>
//             </div>

//             {/* Education */}
//             <div className="mb-8">
//               <h3 className="text-xl font-bold text-primary-400 mb-3 border-b border-primary-400/30 pb-1">EDUCATION</h3>
//               <div className="space-y-4">
//                 <div>
//                   <h4 className="font-semibold text-lg">Masai School</h4>
//                   <p className="text-primary-300">Full Stack Web Development Program</p>
//                   <p className="text-gray-400 text-sm">Bangalore, Karnataka | Expected May 2025</p>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-lg">Chaudhary Charan Singh University</h4>
//                   <p className="text-primary-300">Master of Science in Computer Science</p>
//                   <p className="text-gray-400 text-sm">Meerut, Uttar Pradesh | 2022–2024 | 76.5%</p>
//                 </div>
//               </div>
//             </div>

//             {/* Technical Skills */}
//             <div className="mb-8">
//               <h3 className="text-xl font-bold text-primary-400 mb-3 border-b border-primary-400/30 pb-1">
//                 TECHNICAL SKILLS
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <p className="mb-2">
//                     <span className="font-semibold text-primary-300">Languages:</span>
//                     <span className="text-gray-300"> JavaScript, HTML, CSS, C, C++, Java</span>
//                   </p>
//                   <p className="mb-2">
//                     <span className="font-semibold text-primary-300">Frameworks:</span>
//                     <span className="text-gray-300"> React.js, Firebase, ChakraUI, TailwindCSS</span>
//                   </p>
//                 </div>
//                 <div>
//                   <p className="mb-2">
//                     <span className="font-semibold text-primary-300">Database:</span>
//                     <span className="text-gray-300"> Firebase, MongoDB</span>
//                   </p>
//                   <p className="mb-2">
//                     <span className="font-semibold text-primary-300">Tools:</span>
//                     <span className="text-gray-300"> Git, RESTful APIs, Postman, Expo</span>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Projects */}
//             <div className="mb-8">
//               <h3 className="text-xl font-bold text-primary-400 mb-3 border-b border-primary-400/30 pb-1">PROJECTS</h3>
//               <div className="space-y-6">
//                 <div>
//                   <div className="flex items-start justify-between mb-2">
//                     <h4 className="font-semibold text-lg">Mind Board App</h4>
//                     <div className="flex items-center space-x-2 text-xs">
//                       <ExternalLink className="w-3 h-3" />
//                       <span className="text-primary-300">mind-board.netlify.app</span>
//                     </div>
//                   </div>
//                   <p className="text-primary-300 text-sm mb-2">HTML, CSS3, JavaScript, Firebase</p>
//                   <ul className="text-gray-300 text-sm space-y-1 ml-4">
//                     <li>• Interactive whiteboard application with customizable drawing tools</li>
//                     <li>• Real-time storage, user authentication, and session persistence</li>
//                     <li>• Cross-platform compatibility and performance optimization</li>
//                   </ul>
//                 </div>

//                 <div>
//                   <div className="flex items-start justify-between mb-2">
//                     <h4 className="font-semibold text-lg">Crime Management System</h4>
//                     <div className="flex items-center space-x-2 text-xs">
//                       <ExternalLink className="w-3 h-3" />
//                       <span className="text-primary-300">crime-tracker-system.netlify.app</span>
//                     </div>
//                   </div>
//                   <p className="text-primary-300 text-sm mb-2">ReactJS, Vite, TailwindCSS, Firebase</p>
//                   <ul className="text-gray-300 text-sm space-y-1 ml-4">
//                     <li>• Crime tracking platform with role-based access control</li>
//                     <li>• Real-time complaint tracking and admin dashboards</li>
//                     <li>• Responsive and accessible design implementation</li>
//                   </ul>
//                 </div>

//                 <div>
//                   <div className="flex items-start justify-between mb-2">
//                     <h4 className="font-semibold text-lg">MITHub</h4>
//                     <div className="flex items-center space-x-2 text-xs">
//                       <ExternalLink className="w-3 h-3" />
//                       <span className="text-primary-300">mit-hub.netlify.app</span>
//                     </div>
//                   </div>
//                   <p className="text-primary-300 text-sm mb-2">HTML5, CSS3, JavaScript, Firebase</p>
//                   <ul className="text-gray-300 text-sm space-y-1 ml-4">
//                     <li>• Student platform for academic materials management</li>
//                     <li>• Advanced search and filter functionality</li>
//                     <li>• Mobile-friendly interface with user authentication</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             {/* Soft Skills */}
//             <div>
//               <h3 className="text-xl font-bold text-primary-400 mb-3 border-b border-primary-400/30 pb-1">
//                 SOFT SKILLS
//               </h3>
//               <p className="text-gray-300">
//                 Problem Solving, Teamwork, Effective Communication, Time Management, Adaptability, Leadership, Critical
//                 Thinking, Continuous Learning
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ResumeModal
