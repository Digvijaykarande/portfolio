import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/digvijaykarande', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/digvijay-karande-297b25279', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:karandedigvijay2@gmail.com', label: 'Email' },
];

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-display font-bold text-gradient">
              Portfolio
            </a>
            <p className="text-sm text-muted-foreground mt-2 flex items-center gap-1 justify-center md:justify-start">
              Made with <Heart size={14} className="text-neon-pink" /> by Digvijay karande
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-foreground transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-neon-cyan hover:bg-muted transition-all"
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 pt-8 border-t border-border text-center"
        >
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()}Digvijay karande. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;