import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Chat App',
    description: 'Developed a real-time chat application supporting group chats and private messaging with secure authentication and role-based authorization.Implemented end-to-end encryption for message privacy.With AI chat Bot integration for automated responses and smart replies.',
    tags: ['React','Firebase'],
    github: 'https://github.com/Digvijaykarande/openchat',
    demo: 'https://digvijaykarande.github.io/openchat/',
    gradient: 'from-neon-cyan to-neon-blue',
  },
  {
    title: 'Excel Analytics Dashboard',
    description:'A web application that allows users to upload Excel files and provides data visualization and analytics features such as charts, graphs, and summary statistics. With AI-powered insights and recommendations based on the uploaded data.',
    tags: ['React','Node.js','Express','MongoDB'],
    github: 'https://github.com/Digvijaykarande/excel-analytics',
    demo: 'https://excel-anlytics.netlify.app/dashboard',
    gradient: 'from-neon-purple to-neon-pink',
  },
  {
    title: 'Youtube Clone',
    description:'A  YouTube clone application that allows users to browse, search, and watch videos. Features include user authentication, video uploading, commenting, and liking. Integrated with the YouTube Data API for fetching video data.',
    tags: ['Next.js','youtube API'],
    github: 'https://github.com/Digvijaykarande/youtube-clone',
    demo: 'https://github.com/Digvijaykarande/excel-analytics',
    gradient: 'from-neon-pink to-neon-cyan',
  },
  {
    title: 'IMDB Clone',
    description:'A movie database web application that allows users to search for movies, view details, and watch trailers. Features include user authentication, ratings, and reviews. Integrated with the TMDB API for fetching movie data.',
    tags: ['React','TMDB API'],
    github: 'https://github.com/Digvijaykarande/movieshouse2',
    demo: 'https://digvijaykarande.github.io/movieshouse2/',
    gradient: 'from-neon-blue to-neon-purple',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-neon-cyan font-mono mb-2"
            >
              My Recent Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-display font-bold"
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col">
                  {/* Project Header with Gradient */}
                  <div
                    className={`h-2 bg-gradient-to-r ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}
                  />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Title */}
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-display font-semibold group-hover:text-neon-cyan transition-colors">
                        {project.title}
                      </h3>
                      <motion.div
                        whileHover={{ rotate: 45 }}
                        className="text-muted-foreground group-hover:text-neon-cyan transition-colors"
                      >
                        <ArrowUpRight size={20} />
                      </motion.div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-6 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <Button variant="ghost" size="sm" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      </Button>
                      <Button variant="neonOutline" size="sm" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button variant="glass" size="lg" asChild>
              <a
                href="https://github.com/Digvijaykarande?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={20} />
                View All on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;