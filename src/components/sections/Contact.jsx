import { useState } from "react";
import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";

// Mock emailjs for demonstration
const emailjs = {
  sendForm: (serviceId, templateId, target, publicKey) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 1000);
    });
  }
};

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "your_service_id",
        "your_template_id",
        e.target,
        "your_public_key"
      );
      alert("Message Sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Oops! Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white font-roboto flex flex-col justify-between"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        {/* Header Section */}
        <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12 lg:space-y-16"
          >
            {/* Intro */}
            <div className="space-y-4">
              <span className="font-[popLight] tracking-[0.05em] text-sm font-medium text-white/50 uppercase">
                Get In Touch
              </span>

              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="font-[Margaret] text-4xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-[9rem] font-extralight
                 leading-tight mt-15"
              >
                CONCEPT TO CREATION
              </motion.h1>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column - Info */}
              <div className="lg:col-span-6 space-y-8">
                <p className="font-[popLight] text-md lg:text-md text-white/50 leading-relaxed tracking-normal text-justify">
                  I'm always interested in new opportunities, collaborations, and 
                  creative projects. Whether you have a project in mind or just want 
                  to connect, I'd love to hear from you.
                </p>

                {/* Quick Contact Info */}
                <div className="space-y-8">
                  {[
                    { label: "Email", value: "mgo.dev08@gmail.com", href: "mailto:mgo.dev08@gmail.com" },
                    { label: "GitHub", value: "@mGo08", href: "https://github.com/mGo08" },
                    { label: "LinkedIn", value: "Mardelito T. Go", href: "https://www.linkedin.com/in/mardelito-t-go-890181350/" }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                      <span className="font-[popLight] tracking-[0.05em] text-sm font-bold text-white/50 uppercase w-20">
                        {item.label}
                      </span>
                      <a 
                        href={item.href}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className=" font-[popLight] tracking-[0.05em]s text-white hover:text-gray-300 transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </RevealOnScroll>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-center items-center gap-6">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Mardelito T. Go. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};
