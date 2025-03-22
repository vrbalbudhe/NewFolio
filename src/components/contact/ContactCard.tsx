"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { MdOutlineEmail, MdPerson, MdMessage } from "react-icons/md";

function ContactCard() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleContactUs = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);
    try {
      const res = await emailjs.send(
        "service_1di2wee",
        "template_kdux946",
        {
          from_name: formData.fullname,
          from_email: formData.email,
          message: formData.message,
        },
        "CEd7pbgl9cSY0Z1KA"
      );
      if (res.status === 200) {
        setSuccess(true);
        setFormData({ fullname: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError("Failed to send message. Please try again later.");
      }
    } catch {
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-[500px] w-full bg-[#00111c] rounded-md text-white overflow-hidden">
      <div className="hidden md:block absolute inset-0 pointer-events-none opacity-30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="absolute top-0 left-0"
        >
          <pattern
            id="grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="container w-[90%] mx-auto px-4 py-16 md:w-[90%] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-normal tracking-tight"
            >
              Contact Form <br />
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg max-w-lg"
            >
              Have a question or want to collaborate? Feel free to reach out.
              I'll get back to you as soon as possible.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-[#0a0e1a]/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 md:p-8 shadow-xl">
              <form onSubmit={handleContactUs} className="space-y-6">
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-3 text-gray-500 flex items-center">
                        <MdOutlineEmail size={20} />
                      </span>
                      <input
                        type="text"
                        name="fullname"
                        required
                        value={formData.fullname}
                        onChange={handleChange}
                        className="block w-full pl-10 px-4 py-3 border border-gray-700 rounded-lg bg-gray-900/50 text-white"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-3 text-gray-500 flex items-center">
                        <MdOutlineEmail size={20} />
                      </span>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full pl-10 px-4 py-3 border border-gray-700 rounded-lg bg-gray-900/50 text-white"
                        placeholder="Your email address"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-3 text-gray-500 flex items-center">
                        <MdOutlineEmail size={20} />
                      </span>
                      <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="block w-full pl-10 px-4 py-3 border border-gray-700 rounded-lg bg-gray-900/50 text-white resize-none"
                        placeholder="Your message..."
                      />
                    </div>
                  </div>
                </div>
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
                {success && (
                  <div className="p-4 bg-green-900/30 text-green-400 rounded-lg text-center">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {error && (
                  <div className="p-4 bg-red-900/30 text-red-400 rounded-lg text-center">
                    {error}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
