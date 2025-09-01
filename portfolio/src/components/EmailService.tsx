// EmailJS integration for contact form
export const sendEmail = async (formData: { name: string; email: string; message: string }) => {
  // For now, we'll use mailto as a fallback
  // You can integrate EmailJS later by installing: npm install @emailjs/browser

  const subject = `Portfolio Contact: Message from ${formData.name}`
  const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
  const mailtoLink = `mailto:akshay12345poonia@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`

  // Open default email client
  window.location.href = mailtoLink

  return { success: true, message: "Email client opened successfully!" }
}

// Alternative: If you want to use EmailJS, uncomment below and install @emailjs/browser
/*
import emailjs from '@emailjs/browser'

export const sendEmail = async (formData: { name: string; email: string; message: string }) => {
  try {
    const result = await emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'akshay12345poonia@gmail.com',
      },
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    )
    
    return { success: true, message: "Message sent successfully!" }
  } catch (error) {
    console.error('EmailJS error:', error)
    return { success: false, message: "Failed to send message. Please try again." }
  }
}
*/
