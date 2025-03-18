import { Revealonscroll } from "../Revealonscroll";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import ThunderBackground from "../ThunderBackground";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-400/10 rounded-full filter blur-3xl"></div>
                <div className="absolute -top-20 right-1/4 w-60 h-60 bg-purple-500/10 rounded-full filter blur-3xl"></div>
            </div>
            
            {/* Animated code particles (optional decorative element) */}
            <div className="absolute inset-0 opacity-20 -z-5">
                {Array.from({ length: 20 }).map((_, index) => (
                    <div 
                        key={index}
                        className="absolute text-xs text-blue-400"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.8 + 0.2,
                            transform: `rotate(${Math.random() * 360}deg)`,
                            animation: `float ${Math.random() * 10 + 15}s linear infinite`
                        }}
                    >
                        {'{'}
                    </div>
                ))}
                {Array.from({ length: 20 }).map((_, index) => (
                    <div 
                        key={index}
                        className="absolute text-xs text-cyan-400"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.8 + 0.2,
                            transform: `rotate(${Math.random() * 360}deg)`,
                            animation: `float ${Math.random() * 10 + 15}s linear infinite`
                        }}
                    >
                        {'}'}
                    </div>
                ))}
            </div>
                
            <Revealonscroll>
                <div className="text-center z-10 px-4 max-w-4xl mx-auto">
                    <div className="inline-block mb-4 rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400 backdrop-blur-sm border border-blue-500/20">
                        Welcome to my portfolio
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                        Hi, I am Maneel.
                    </h1>

                    <div className="text-xl md:text-2xl font-medium mb-6 text-gray-300 h-12">
                        <TypeAnimation
                            sequence={[
                                'Full-Stack Developer', 
                                2000,
                                'Engineering Student', 
                                2000,
                                'Problem Solver', 
                                2000,
                                'Tech Enthusiast',
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>

                    <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                        I build modern web applications with a focus on clean code and intuitive user experiences.
                        Passionate about turning complex problems into elegant solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
                        <a 
                            href="#projects"
                            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-8 rounded-full font-medium transition-all duration-300 relative overflow-hidden group w-64 sm:w-auto flex items-center justify-center hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25"
                        >
                            <span className="relative z-10">View Projects</span>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </a>
                        <a 
                            href="#contact"
                            className="border border-blue-500/30 text-blue-400 py-3 px-8 rounded-full font-medium transition-all duration-300 w-64 sm:w-auto flex items-center justify-center hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 hover:bg-blue-500/10 hover:border-blue-500/50"
                        >
                            Contact Me
                        </a>
                    </div>
                    
                    {/* Social Icons */}
                    {/* <div className="flex justify-center space-x-6">
                        <a 
                            href="https://github.com/maneelm" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                        >
                            <FaGithub size={24} />
                        </a>
                        
                    </div> */}
                </div>
            </Revealonscroll>

            {/* Add keyframes for the floating animation */}
            <style jsx>{`
                @keyframes float {
                    0% {
                        transform: translateY(0) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-40px) rotate(180deg);
                    }
                    100% {
                        transform: translateY(0) rotate(360deg);
                    }
                }
            `}</style>
        </section>
    );
};