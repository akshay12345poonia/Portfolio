"use client"

import { useState } from "react"
import { Phone, Mail, Github, Linkedin, Send } from "lucide-react"
import toast from "react-hot-toast"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const subject = `Portfolio Contact: Message from ${formData.name}`
      const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
      const mailtoLink = `mailto:akshay12345poonia@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`

      window.location.href = mailtoLink

      toast.success("Email client opened! Thank you for your message.")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      toast.error("There was an error. Please email me directly.")
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7253977518",
      href: "tel:+917253977518",
      color: "text-green-400",
    },
    {
      icon: Mail,
      label: "Email",
      value: "akshay12345poonia@gmail.com",
      href: "mailto:akshay12345poonia@gmail.com",
      color: "text-red-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/akshay-poonia",
      href: "https://www.linkedin.com/in/akshay-poonia",
      color: "text-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/akshay12345poonia",
      href: "https://github.com/akshay12345poonia",
      color: "text-purple-400",
    },
  ]

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="text-primary-400">Touch</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology and development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-primary-400 mb-4 md:mb-6">Let's Connect</h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                Feel free to reach out through any of the following channels. I'll get back to you as soon as possible!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group p-4 md:p-6 bg-gray-900 rounded-xl border border-gray-700 hover:border-primary-500 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div
                        className={`p-2 md:p-3 rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors duration-300`}
                      >
                        <IconComponent className={`w-5 h-5 md:w-6 md:h-6 ${info.color}`} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-white group-hover:text-primary-400 transition-colors duration-300 text-sm md:text-base">
                          {info.label}
                        </h4>
                        <p className="text-gray-400 text-xs md:text-sm break-all">{info.value}</p>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 p-6 md:p-8 rounded-2xl border border-gray-700">
            <h3 className="text-xl md:text-2xl font-semibold text-primary-400 mb-4 md:mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
