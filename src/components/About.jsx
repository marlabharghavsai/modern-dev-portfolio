import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row gap-12 md:gap-20 items-center"
        >
          {/* Avatar/Photo */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <div className="absolute inset-0 bg-primary-500 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-purple-600 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-40"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" 
                alt="Bharghav Sai" 
                className="relative z-10 w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Bio text */}
          <div className="w-full md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 flex items-center gap-4">
              <span className="text-primary-500">01.</span> About Me
              <span className="h-[1px] bg-slate-700 flex-1 ml-4 hidden md:block"></span>
            </h2>
            
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                Hello! My name is Bharghav, and I enjoy creating things that live on the internet. My interest in web development started back in 2018 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about responsive design!
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, and a huge corporation. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
              </p>
              <p>
                I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React. When I'm not at the computer, I'm usually hanging out with my friends, reading, or playing guitar.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
