
import { useState } from "react";
import { Send, Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_6zao7o9',
        'template_rkjfuri',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Tusharkanta Behera',
        },
        'jmvv5dISNrnxNo-Cb'
      );
      
      setSubmitStatus('success');
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">Let's discuss your next project</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/5 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-6 sm:p-8 hover:border-blue-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <Send className="w-6 h-6 text-blue-400" />
                <span>Send a Message</span>
              </h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400">
                  Failed to send message. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:bg-gray-800/70 transition-all duration-300"
                    placeholder="Your Name"
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
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:bg-gray-800/70 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:bg-gray-800/70 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Connect With Me Section */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white/5 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Connect With Me</h3>
                
                <div className="space-y-4">
                  {/* Email */}
                  <div className="group bg-gray-800/30 border border-gray-700/50 rounded-xl p-4 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-red-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold mb-1">Email</p>
                        <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                          tusharkantabehera85@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* GitHub */}
                  <div className="group bg-gray-800/30 border border-gray-700/50 rounded-xl p-4 hover:border-gray-400/50 hover:bg-gray-600/10 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                    <a 
                      href="https://github.com/tusharkanta-behera" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4"
                    >
                      <div className="p-3 bg-gray-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Github className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold mb-1">GitHub</p>
                        <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                          github.com/tusharkanta-behera
                        </p>
                      </div>
                    </a>
                  </div>

                  {/* LinkedIn */}
                  <div className="group bg-gray-800/30 border border-gray-700/50 rounded-xl p-4 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                    <a 
                      href="https://linkedin.com/in/tusharkanta-behera-7a3011294" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4"
                    >
                      <div className="p-3 bg-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Linkedin className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold mb-1">LinkedIn</p>
                        <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                          linkedin.com/in/tusharkanta-behera-7a3011294
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-lg border border-gray-700/30 rounded-xl p-4 sm:p-6 text-center hover:border-blue-500/30 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-gray-300 text-sm sm:text-base">Projects Completed</div>
                </div>
                <div className="bg-white/5 backdrop-blur-lg border border-gray-700/30 rounded-xl p-4 sm:p-6 text-center hover:border-cyan-500/30 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm sm:text-base">Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
