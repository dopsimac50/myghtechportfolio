import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "amazone .com",
    description: "An amazone products page clone.",
    image: "/projects/amazon1.png",
    tags: ["HTML", "CSS","javascript","Local Storage"],
    demoUrl: "https://dopsimac50.github.io/amazon-project--/",
    githubUrl: "https://github.com/dopsimac50/amazon-project--",
  },
  {
    id: 2,
    title: "Movies Search API",
    description:
      "A simple Interactive search dashboard with data visualization and filtering capabilities.",
    image: "/projects/movieApp.png",
    tags: ["javascript", "HTML", "CSS"],
    demoUrl: "strahlen-movies-app.netlify.app",
    githubUrl: "https://github.com/dopsimac50/movie-app",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "An amazone Cart and Checkout page clone.",
    image: "/projects/checkout1.png",
    tags: ["HTML", "CSS","javascript","Local Storage"],
    demoUrl: "https://dopsimac50.github.io/amazon-project--/checkout1.html",
    githubUrl: "https://github.com/dopsimac50/movie-app",
  },
  {
    id: 4,
    title: "Pokemon series",
    description:
      "A pookemonn game series.",
    image: "/projects/pokemon.png",
    tags: ["React", "javascript", "CSS"],
    demoUrl: "strahlen-tech-pokemon.netlify.app",
    githubUrl: "https://github.com/dopsimac50/pokemon",
  },
  {
    id: 5,
    title: "My Todo App",
    description:
      "Full-featured todo app with full CRUD actions.",
    image: "/projects/todoApp.png",
    tags: ["React", "javascript", "CSS"],
    demoUrl: "strahlen-todo-app.netlify.app",
    githubUrl: "https://github.com/dopsimac50/todo-app",
  },
  {
    id: 6,
    title: "Coffee tracker app",
    description:
      "Full-featured tracker app that tracks daily coffee consumption.",
    image: "/projects/tracker.png",
    tags: ["React", "javascript.js", "CSS", "appwrite"],
    demoUrl: "https://dopsimac50.github.io/coffee-tracker/",
    githubUrl: "https://github.com/dopsimac50/coffee-tracker",
  },
  {
    id: 7,
    title: "SaaS Landing Page",
    description:
      "A beautiful landing page app using React and Tailwind..",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "Orbit Analytics Dashboard",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/project2.png",
    tags: ["React", "Node.js", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 9,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 10,
    title: "coffee shop app",
    description:
      "A full CRUD menu and booking app for coffee shop.",
    image: "/projects/coffeeShop.png",
    tags: ["React native", "javascript", "Async storage"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 11,
    title: "Notes app ",
    description:
      "Full-featured notes app with full CRUD actions and user authentication.",
    image: "/projects/todoApp3.png",
    tags: ["React native", "javascript", "appwrite"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 12,
    title: "Todo app Platform",
    description:
      "Full-featured todo platform with user authentication.",
    image: "/projects/todoApp2.png",
    tags: ["React native", "javascript", "appwrite"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 13,
    title: "Login page",
    description:
      "login page for a full CRUD todo app.",
    image: "/projects/todoApp4.png",
    tags: ["React native", "javascript", "appwrite"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 14,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 15,
    title: "Todo Platform",
    description:
      "Full-featured CRUD todo platform.",
    image: "/projects/todoApp1.png",
    tags: ["React native", "javascript", "appwrite"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
