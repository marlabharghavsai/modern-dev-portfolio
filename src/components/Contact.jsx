import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative text-center">
      <div className="container mx-auto px-6 md:px-12 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-500 font-display font-medium tracking-widest mb-4 uppercase text-sm">
            04. What's Next?
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <a 
            href="mailto:hello@example.com"
            className="inline-block px-8 py-4 bg-transparent border-2 border-primary-500 text-primary-400 hover:bg-primary-500/10 rounded-full font-medium transition-colors"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
}
