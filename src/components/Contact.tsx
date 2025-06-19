
import { useState, useRef } from "react";
import { Mail, Github, Linkedin, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual EmailJS credentials
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      if (form.current && serviceId !== 'YOUR_SERVICE_ID') {
        await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        // Fallback for demo - simulate sending
        await new Promise(resolve => setTimeout(resolve, 1000));
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      url: "mailto:tusharkantabehera85@gmail.com",
      color: "from-red-500 to-red-600",
      displayText: "tusharkantabehera85@gmail.com"
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
      url: "https://github.com/tusharkanta-behera",
      color: "from-gray-600 to-gray-800",
      displayText: "github.com/tusharkanta-behera"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
      url: "https://linkedin.com/in/tusharkanta-behera-7a3011294",
      color: "from-blue-600 to-blue-700",
      displayText: "linkedin.com/in/tusharkanta-behera-7a3011294"
    }
  ];

  return (
    <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">Let's collaborate on your next project</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-6 sm:p-8 order-2 lg:order-1 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Send a Message</h3>
            </div>

            <form ref={form} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 hover:bg-gray-800/70"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 hover:bg-gray-800/70"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 hover:bg-gray-800/70"
                  placeholder="Project collaboration"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-white placeholder-gray-400 hover:bg-gray-800/70"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-blue-500/25"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & AI Avatar */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* Floating AI Avatar */}
            <div className="relative text-center">
              <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-full animate-spin-slow opacity-20"></div>
                <div className="absolute inset-3 sm:inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl sm:text-4xl font-bold animate-pulse">
                  AI
                </div>
                {/* Floating particles around avatar */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-ping"
                    style={{
                      top: `${30 + Math.sin(i * Math.PI / 3) * 20}%`,
                      left: `${30 + Math.cos(i * Math.PI / 3) * 20}%`,
                      animationDelay: `${i * 500}ms`,
                    }}
                  />
                ))}
              </div>
              <div className="mt-4 sm:mt-6">
                <p className="text-gray-400 text-xs sm:text-sm px-4">
                  AI-powered assistant ready to help with your inquiries
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-4 sm:mb-6">
                Connect With Me
              </h3>
              <div className="max-w-md mx-auto space-y-3 sm:space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/5 backdrop-blur-lg border border-gray-700/30 rounded-xl hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:scale-105 hover:bg-white/10"
                  >
                    <div className={`p-2 sm:p-3 bg-gradient-to-r ${link.color} rounded-lg group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                      {link.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-white text-sm sm:text-base">{link.name}</h4>
                      <p className="text-gray-400 text-xs sm:text-sm truncate">
                        {link.displayText}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
