import { useState } from "react";
import { Revealonscroll } from "../Revealonscroll";
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        
        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_PUBLIC_KEY
        )
        .then(() => {
            setSubmitStatus('success');
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setSubmitStatus(null), 5000);
        })
        .catch(() => {
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 5000);
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20 relative"
        >
            {/* Enhanced background elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
                <div className="absolute top-20 right-10 w-80 h-80 bg-cyan-400/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
            </div>
            
            <Revealonscroll>
                <div className="px-4 w-full max-w-md mx-auto">
                    <div className="mb-6 text-center">
                        <div className="inline-block mb-4 rounded-full bg-blue-500/10 px-5 py-1.5 text-sm text-blue-400 backdrop-blur-sm border border-blue-500/20 transform transition-all hover:scale-105">
                            Contact Me
                        </div>
                    </div>
                    
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Get in touch
                    </h2>
                    
                    <p className="text-gray-300 text-center mb-8 max-w-sm mx-auto">
                        Have a question or want to work together? Feel free to send me a message.
                    </p>
                    
                    {submitStatus === 'success' && (
                        <div className="mb-6 py-3 px-4 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 text-center backdrop-blur-sm animate-fadeIn flex items-center justify-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Message sent successfully!
                        </div>
                    )}
                    
                    {submitStatus === 'error' && (
                        <div className="mb-6 py-3 px-4 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 text-center backdrop-blur-sm animate-fadeIn flex items-center justify-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                            Error occurred. Please try again.
                        </div>
                    )}
                    
                    <form className="space-y-5 backdrop-blur-sm bg-gray-900/20 p-6 rounded-lg border border-gray-800/50" onSubmit={handleSubmit}>
                        <div className="relative group">
                            <label htmlFor="name" className="text-sm text-gray-400 mb-1 block ml-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-500"
                                placeholder="Your name"
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div className="relative group">
                            <label htmlFor="email" className="text-sm text-gray-400 mb-1 block ml-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-500"
                                placeholder="Your email"
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div className="relative group">
                            <label htmlFor="message" className="text-sm text-gray-400 mb-1 block ml-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-500 resize-none"
                                placeholder="Your message"
                                onChange={handleChange}
                            />
                        </div>
                        
                        <button 
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                            disabled={isSubmitting}
                        >
                            <span className="relative z-10 flex items-center justify-center">
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : "Send Message"}
                            </span>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </button>
                    </form>
                    
                    {/* <div className="mt-8 text-center text-sm text-gray-500">
                        <p>You can also reach me via:</p>
                        <div className="flex justify-center mt-4 space-x-4">
                            <a href="mailto:hello@example.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                            </a>
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                                </svg>
                            </a>
                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                                </svg>
                            </a>
                        </div>
                    </div> */}
                </div>
            </Revealonscroll>
        </section>
    );
};