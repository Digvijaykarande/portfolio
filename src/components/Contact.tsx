import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'karandedigvijay2@gmail.com', href: 'mailto:karandedigvijay2@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 8010503097', href: 'tel:+918010503097' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/digvijaykarande', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/digvijay-karande-297b25279', label: 'LinkedIn' },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Message sent!',
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 relative">
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
              Get In Touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-display font-bold"
            >
              Contact <span className="text-gradient">Me</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-display font-semibold mb-6">
                  Let's work together
                </h3>
                <p className="text-muted-foreground mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities
                  to be part of your vision. Feel free to reach out!
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center group-hover:glow-cyan transition-shadow">
                        <info.icon className="w-5 h-5 text-neon-cyan" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Find me on</p>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        whileHover={{ y: -3, scale: 1.1 }}
                        className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-neon-cyan hover:bg-muted/80 transition-colors"
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl">
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">
                        Your Name
                      </label>
                      <Input
                        type="text"
                        placeholder="John Doe"
                        required
                        className="bg-muted/50 border-border focus:border-neon-cyan"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">
                        Your Email
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="bg-muted/50 border-border focus:border-neon-cyan"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Subject</label>
                    <Input
                      type="text"
                      placeholder="Project Inquiry"
                      required
                      className="bg-muted/50 border-border focus:border-neon-cyan"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Message</label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                      className="bg-muted/50 border-border focus:border-neon-cyan resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="neon"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2" size={18} />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;