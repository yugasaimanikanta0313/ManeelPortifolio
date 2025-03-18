import { Revealonscroll } from "../Revealonscroll";

export const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Online Bookstore",
            description: "A comprehensive online bookstore platform featuring advanced search, filtering, and recommendation algorithms. Users can browse, purchase, and review books with a seamless checkout experience.",
            technologies: ["React", "Node", "MongoDB", "Express"],
            // image: "/images/bookstore.jpg",
            link: "https://bookstore-project.com"
        },
        {
            id: 2,
            title: "Weather Dashboard",
            description: "Real-time weather monitoring application with interactive maps, forecast predictions, and severe weather alerts. Integrates with multiple weather APIs for accurate data visualization.",
            technologies: ["React", "Chart.js", "Mapbox API", "OpenWeather API"],
            // image: "/images/weather.jpg",
            link: "https://weather-dashboard.com"
        },
        {
            id: 3,
            title: "Task Management System",
            description: "Collaborative project management tool with kanban boards, task assignment, progress tracking, and team communication features. Includes calendar integration and notification system.",
            technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
            // image: "/images/taskmanager.jpg",
            link: "https://task-management-app.com"
        },
        
    ];

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20 " aria-labelledby="featured-projects">
            <Revealonscroll>
            <div className="max-w-6xl mx-auto px-4">
                <h2 id="featured-projects" className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div 
                            key={project.id}
                            className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/50 group"
                        >
                            {/* <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 z-10"></div>
                                <div className="absolute inset-0 bg-blue-500/20 group-hover:opacity-0 transition-opacity z-0"></div>
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div> */}
                            
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                
                                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-xs hover:bg-blue-500/20 hover:shadow-sm hover:shadow-blue-500/20 transition-all cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                <a 
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    View Project
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 text-center">
                    <a 
                        href="https://github.com/maneelm" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 py-3 px-6 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                        View Projects on GitHub
                    </a>
                </div>
            </div>
            </Revealonscroll>
        </section>
    );
};
