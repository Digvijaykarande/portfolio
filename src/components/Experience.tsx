import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
    {
    type: 'Education',
    title: 'MCA',
    company: 'Bhartiya Vidyapeeth University, IMED Pune',
    period: '2025 - 2027',
    description:
      'Master of Computer Applications with specialization in Software Engineering and Project Management. Improving skills in full-stack development and agile methodologies.',
  },
  {
    type: 'education',
    title: 'BCA',
    company: 'Shivaji University',
    period: '2022 - 2025',
    description:'Bachelor of Computer Applications with a focus on software development, algorithms, and data structures.',
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />

      <div className="container mx-auto px-6 relative">
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
              My Journey
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-display font-bold"
            >
              Experience & <span className="text-gradient">Education</span>
            </motion.h2>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-neon-cyan glow-cyan z-10" />

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`glass-card p-6 rounded-xl ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto'
                  }`}
                >
                  {/* Icon & Period */}
                  <div
                    className={`flex items-center gap-2 mb-3 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center">
                      {exp.type === 'work' ? (
                        <Briefcase size={16} className="text-neon-cyan" />
                      ) : (
                        <GraduationCap size={16} className="text-neon-purple" />
                      )}
                    </div>
                    <span className="text-sm text-neon-cyan font-mono">{exp.period}</span>
                  </div>

                  <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
                  <p className="text-neon-purple text-sm mb-3">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;