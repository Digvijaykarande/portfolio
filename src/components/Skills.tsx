import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'Java', level: 80, category: 'Backend' },
  { name: 'React', level: 80, category: 'Frontend' },
  { name: 'JavaScript', level: 85, category: 'Frontend' },
  { name: 'HTML/CSS', level: 95, category: 'Frontend' },
  { name: 'SpringBoot', level: 75, category: 'Backend' },
  { name: 'Node.js', level: 70, category: 'Backend' },
  { name: 'Python', level: 75, category: 'Backend' },
  { name: 'SQL', level: 85, category: 'Database' },
  { name: 'MongoDB', level: 80, category: 'Database' },
  { name: 'Git', level: 70, category: 'Tools' },
  { name: 'Docker', level: 60, category: 'DevOps' },
];

const categories = ['Frontend', 'Backend', 'Database', 'DevOps', 'Tools'];

const categoryColors: Record<string, string> = {
  Frontend: 'from-neon-cyan to-neon-blue',
  Backend: 'from-neon-purple to-neon-pink',
  Database: 'from-neon-pink to-neon-cyan',
  DevOps: 'from-neon-blue to-neon-purple',
  Tools: 'from-neon-cyan to-neon-purple',
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative">
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
              My Technical Skills
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-display font-bold"
            >
              Skills & <span className="text-gradient">Expertise</span>
            </motion.h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-6 rounded-xl group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-foreground">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground px-2 py-1 bg-muted rounded-md">
                    {skill.category}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.8, ease: 'easeOut' }}
                    className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${categoryColors[skill.category]}`}
                  />
                </div>

                <div className="mt-2 flex justify-between text-sm">
                  <span className="text-muted-foreground">Proficiency</span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="text-neon-cyan font-medium"
                  >
                    {skill.level}%
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Category Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            {categories.map((category) => (
              <div key={category} className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${categoryColors[category]}`}
                />
                <span className="text-sm text-muted-foreground">{category}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;