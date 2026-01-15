import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Rocket, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code is my passion.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating intuitive interfaces with attention to every detail.',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimizing applications for the best user experience.',
  },
  {
    icon: Users,
    title: 'Backend Development',
    description: 'developing scalable backend API\'s.',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-neon-cyan font-mono mb-2"
            >
              Get To Know Me
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-display font-bold"
            >
              About <span className="text-gradient">Me</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-display font-semibold mb-4">
                  I am             </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Full-stack developer with a BCA background and pursuing MCA (1st Year), skilled in Java,Python, Spring
              Boot, React, MySQL, MongoDB, Node.js, and Firebase. Experienced in building scalable, secure, and
            responsive web applications with a focus on clean architecture and optimized performance.
                  </p>
                  <p>
                    Developed projects such as real-time chat applications, AI-powered analytics tools, and video streaming platforms.
                    Passionate about problem-solving, learning emerging technologies, and contributing to innovative
                    solutions in full-stack Java and MERN environments.
                  </p>
                  
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="glass-card px-4 py-2 rounded-lg">
                    <span className="text-neon-cyan font-bold text-2xl">Fresher</span>
                    <p className="text-sm text-muted-foreground">Ready To Work</p>
                  </div>
                  <div className="glass-card px-4 py-2 rounded-lg">
                    <span className="text-neon-purple font-bold text-2xl">Full Stack Java Course</span>
                    <p className="text-sm text-muted-foreground">By Symboisis and Capgemini</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card p-6 rounded-xl group cursor-default"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center mb-4 group-hover:glow-cyan transition-shadow duration-300">
                    <item.icon className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;