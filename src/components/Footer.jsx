import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-slate-950 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="flex gap-6 mb-6">
          <a href="https://github.com" className="text-slate-400 hover:text-primary-400 transition-colors">
            <FaGithub size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com" className="text-slate-400 hover:text-primary-400 transition-colors">
            <FaLinkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://twitter.com" className="text-slate-400 hover:text-primary-400 transition-colors">
            <FaTwitter size={20} />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="mailto:hello@example.com" className="text-slate-400 hover:text-primary-400 transition-colors">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>
        
        <p className="text-slate-500 text-sm font-display">
          Designed & Built by Bharghav Sai &copy; {currentYear}
        </p>
      </div>
    </footer>
  );
}
