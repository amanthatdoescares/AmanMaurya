"use client";

import { Mail, FileText, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <footer className="relative py-32 bg-[#08090C] text-white overflow-hidden border-t border-white/10 z-10">
      
      <div className="container mx-auto px-4 text-center">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-8xl font-editorial font-bold mb-8">
            Two skill sets. <span className="text-white/50 italic">One person.</span>
          </h2>
          <p className="text-lg md:text-2xl font-mono text-white/40 mb-20 max-w-4xl mx-auto leading-loose">
            Need someone who can build it? <br className="md:hidden" />
            Need someone who can make it beautiful? <br />
            <span className="text-white">Need someone who can do both?</span>
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="relative inline-block group cursor-pointer"
        >
          <div className="absolute inset-0 bg-accent-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <a 
            href="mailto:amanmaurya9209@gmail.com" 
            className="relative flex items-center justify-center px-12 py-6 md:px-16 md:py-8 bg-white text-black font-bold text-3xl md:text-5xl tracking-tighter hover:bg-accent-cyan transition-colors rounded-none"
          >
            LET&apos;S WORK TOGETHER
          </a>
        </motion.div>

        <div className="mt-40 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-xs md:text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Aman. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="https://github.com/amanmaurya92" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
              <FaGithub className="w-4 h-4" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/amanmaurya92096/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
              <FaLinkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href="mailto:amanmaurya9209@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" /> Email
            </a>
            <button onClick={() => setIsResumeOpen(true)} className="hover:text-white transition-colors flex items-center gap-2">
              <FileText className="w-4 h-4" /> Resume
            </button>
          </div>
        </div>

      </div>

      <AnimatePresence>
        {isResumeOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsResumeOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl h-[85vh] bg-[#1a1a1a] border border-white/20 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-black/50">
                <h3 className="font-mono text-white text-sm uppercase tracking-widest">Aman_Maurya_Resume.pdf</h3>
                <button 
                  onClick={() => setIsResumeOpen(false)}
                  className="p-2 text-white/50 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 w-full bg-white">
                <iframe 
                  src="/Aman_Maurya_Resume.pdf" 
                  className="w-full h-full"
                  title="Aman Maurya Resume"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
