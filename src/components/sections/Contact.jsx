import {useState} from "react";
import {RevealOnScroll} from "../RevealOnScroll";
import emailjs from "emailjs-com";
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";

export const Contact = () => {
    const [formData, setFormData] = useState({name: "", email: "", message: ""});

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then((result) => {
                alert("Message Sent!");
                setFormData({name: "", email: "", message: ""});
            })
            .catch(() => alert("Oops! Something went wrong. Please try again."));
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20 bg-[#3C3D37]/20">
            <RevealOnScroll>
                <div className="px-4 w-full max-w-2xl">
                    <h2 className="font-inter text-5xl font-semibold mb-8 text-white text-left">
                        contact me.
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required="required"
                                value={formData.name}
                                className="font-nokora text-sm w-full bg-transparent border border-gray-600 rounded px-6 py-4 text-white placeholder-[gray-400] focus:outline-none focus:ring-2 focus:ring-bg-[#ECDFCC]"
                                placeholder="Name"
                                onChange={(e) => setFormData({
                                    ...formData,
                                    name: e.target.value
                                })
}/>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                required="required"
                                value={formData.email}
                                className="font-nokora text-sm w-full bg-transparent border border-gray-600 rounded px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-bg-[#ECDFCC]"
                                placeholder="Email"
                                onChange={(e) => setFormData({
                                    ...formData,
                                    email: e.target.value
                                })
}/>
                        </div>

                        <textarea
                            id="message"
                            name="message"
                            required="required"
                            rows={5}
                            value={formData.message}
                            className="font-nokora text-sm w-full bg-transparent border border-gray-600 rounded px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-bg-[#ECDFCC]"
                            placeholder="Leave feedback about the site, career opportunities, or just to say hello, etc."
                            onChange={(e) => setFormData({
                                ...formData,
                                message: e.target.value
                            })
}/>

                        <button
                            type="submit"
                            className="font-nokora w-full bg-gray-300 text-black py-4 px-8 rounded font-medium transition-all hover:bg-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-bg-[#ECDFCC]">
                            Send Message
                        </button>
                    </form>
                    <p className="font-nokora mt-4 text-sm text-gray-400 text-center">
                        By submitting this form, I agree to the
                        <a href="#" className="underline">privacy policy</a>.
                    </p>

                    {/* Links with Icons */}
                    <div className="flex justify-center gap-5 mt-20">
                        <a
                            href="https://github.com/mGo08"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition">
                            <FaGithub size={20}/>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mardelito-t-go-890181350/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition">
                            <FaLinkedin size={20}/>
                        </a>
                        <a
                            href="mailto:mgo.dev08@gmail.com"
                            className="text-gray-400 hover:text-white transition">
                            <FaEnvelope size={20}/>
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
