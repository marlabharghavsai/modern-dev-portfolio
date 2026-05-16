import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management, secure Stripe payments, and an intuitive admin dashboard.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative Kanban board application that allows teams to organize tasks, set deadlines, and track progress with real-time updates.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "An AI-powered application that generates high-quality marketing copy and blog posts using OpenAI's API, featuring a rich text editor.",
    tech: ["Vue.js", "Python", "FastAPI", "OpenAI", "Docker"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-16 flex items-center gap-4">
            <span className="text-primary-500">03.</span> Some Things I've Built
            <span className="h-[1px] bg-slate-700 flex-1 ml-4 hidden md:block"></span>
          </h2>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Project Image */}
              <div className="w-full md:w-3/5 relative group cursor-pointer">
                <div className="absolute inset-0 bg-primary-600/20 group-hover:bg-transparent transition-colors duration-500 rounded-xl z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto aspect-video object-cover rounded-xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Project Info */}
              <div className={`w-full md:w-2/5 flex flex-col ${index % 2 !== 0 ? 'md:items-start text-left' : 'md:items-end md:text-right'}`}>
                <p className="text-primary-400 font-medium mb-2 font-display tracking-wide">Featured Project</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 hover:text-primary-400 transition-colors">
                  <a href={project.demo}>{project.title}</a>
                </h3>
                
                <div className="glass-panel p-6 rounded-xl mb-6 relative z-20 text-slate-300">
                  <p>{project.description}</p>
                </div>

                <ul className={`flex flex-wrap gap-4 text-sm font-display text-slate-400 mb-6 ${index % 2 !== 0 ? 'justify-start' : 'md:justify-end'}`}>
                  {project.tech.map(tech => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                <div className="flex gap-4 text-slate-300">
                  <a href={project.github} aria-label="GitHub Link" className="hover:text-primary-400 transition-colors">
                    <FaGithub size={24} />
                  </a>
                  <a href={project.demo} aria-label="External Link" className="hover:text-primary-400 transition-colors">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
