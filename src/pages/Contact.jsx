import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Mail, Linkedin, Github, MapPin, Send, MessageCircle, Phone } from 'lucide-react'
import usePageTitle from '../hooks/usePageTitle'

const Contact = () => {
  usePageTitle('Contact', 'Contact Arshia Shirzad for professional inquiries, collaborations, or questions about software development.')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    // Updated email address
    window.location.href = `mailto:arshiashirzad@khu.ac.ir?subject=${subject}&body=${body}`
  }
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "arshiashirzad@khu.ac.ir",
      link: "mailto:arshiashirzad@khu.ac.ir",
      description: "Send me an email for professional inquiries"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "0936-522-7760",
      link: "tel:+989365227760",
      description: "Call or text for direct communication"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      value: "linkedin.com/in/arshiashirzad",
      link: "https://www.linkedin.com/in/arshiashirzad",
      description: "Connect with me professionally"
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      value: "github.com/arshiashirzad",
      link: "https://github.com/arshiashirzad",
      description: "Check out my code and projects"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Tehran, Iran",
      link: null,
      description: "Available for remote opportunities worldwide"
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-purple-50 dark:from-purple-900 dark:via-gray-900 dark:to-purple-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <MessageCircle className="h-8 w-8 text-purple-500" />
            <h1 className="text-4xl font-bold text-foreground">Get In Touch</h1>
            <Send className="h-8 w-8 text-purple-400 animate-pulse" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or just want to connect? Feel free to reach out. I'm always open to discussing new opportunities and creative ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
             <h2 className="text-3xl font-bold text-foreground">Contact Channels</h2>
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                    <a
                        href={method.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group block ${!method.link && "pointer-events-none"}`}
                      >
                    <Card className="border border-purple-200 dark:border-purple-700 group-hover:shadow-lg group-hover:border-purple-300 dark:group-hover:border-purple-600 transition-all duration-300 hover-glow">
                        <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-purple-100 dark:bg-purple-800 rounded-lg text-purple-600 dark:text-purple-300 group-hover:scale-110 transition-transform duration-300">
                            {method.icon}
                            </div>
                            <div className="flex-1">
                            <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                            <p className="text-sm text-purple-600 dark:text-purple-400 transition-colors break-all">
                                {method.value}
                            </p>
                            </div>
                        </div>
                        </CardContent>
                    </Card>
                    </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="border border-purple-200 dark:border-purple-700 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-foreground">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="border-purple-200 dark:border-purple-700 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="border-purple-200 dark:border-purple-700 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="border-purple-200 dark:border-purple-700 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-foreground">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, opportunity, or question..."
                      rows={5}
                      required
                      className="border-purple-200 dark:border-purple-700 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center pt-2">
                    This will open your default email client to send the message.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact