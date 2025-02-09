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
            className="min-h-screen flex items-center justify-center py-20 font-roboto bg-gradient-to-t from-slate-50 via-slate-200 to-slate-300">
            <RevealOnScroll>
                <div className="flex flex-col items-left justify-left px-4 w-full max-w-2xl">
                    <h2 className="text-6xl font-semibold mb-8 text-left text-[#363636]">
                        contact me.
                    </h2>
                    <form className="space-y-6 w-full" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required="required"
                                value={formData.name}
                                className="text-sm w-full bg-transparent border-2 border-gray-600 rounded px-6 py-4 text-[#363636] placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6C7A89]"
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
                                className="text-sm w-full bg-transparent border-2 border-gray-600 rounded px-6 py-4 text-[#363636] placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6C7A89]"
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
                            className="text-sm w-full bg-transparent border-2 border-gray-600 border-gray-600 rounded px-6 py-4 text-[#363636] placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6C7A89]"
                            placeholder="Leave feedback about the site, career opportunities, or just to say hello, etc."
                            onChange={(e) => setFormData({
                                ...formData,
                                message: e.target.value
                            })
}/>
                        <button
                            type="submit"
                            className="w-full bg-[#363636] text-white py-4 px-8 rounded font-semibold transition-all hover:bg-[#363636]/80 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#ECDFCC]">
                            Send Message
                        </button>
                    </form>
                    <p className="mt-4 text-sm text-[#363636] text-center">
                        By submitting this form, I agree to the{" "}
                        <a href="#" className="underline">
                            privacy policy
                        </a>
                        .
                    </p>

                    <div className="flex justify-center gap-5 mt-10">
                        <a
                            href="https://github.com/mGo08"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#363636] hover:text-[#363636]/80 transition">
                            <FaGithub size={20}/>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mardelito-t-go-890181350/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#363636] hover:text-[#363636]/80 transition">
                            <FaLinkedin size={20}/>
                        </a>
                        <a
                            href="mailto:mgo.dev08@gmail.com"
                            className="text-[#363636] hover:text-[#363636]/80 transition">
                            <FaEnvelope size={20}/>
                        </a>
                    </div>
                    <div className="mt-6 text-[#363636] text-sm text-center">
                        &copy; Mardelito T. Go 2025
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};