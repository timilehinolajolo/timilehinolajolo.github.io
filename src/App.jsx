import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profilePic from './assets/my-image.jpg';

const MyPortfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse for the subtle background mesh effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animation variants
  const meltIn = {
    hidden: { opacity: 0, filter: 'blur(12px)', y: 30 },
    visible: { 
      opacity: 1, 
      filter: 'blur(0px)', 
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  // Social Links Data
  const socialLinks = [
    { name: 'Github /', url: 'https://github.com/timilehinolajolo' },
    { name: 'LinkedIn /', url: 'https://linkedin.com/in/timilehinolajolo' },
    { name: 'X  /', url: 'https://x.com/_timilehintaiwo' },
    { name: 'Medium', url: 'https://medium.com/@timilehinolajolo' }
  ];

  // Blog Posts Data
  const blogPosts = [
    { 
      title: "From Static to Interactive: your first step in js", 
      tag: "Talk - Microsoft Student Ambassador, FUNAAB", 
      date: "June 2026", 
      linkText: "view here",
      url: "https://drive.google.com/file/d/1L6o-fBkElueJ6S2wUNUMVhVu3Rkx87zH/view?usp=drivesdk",
      desc: "An introductory session and live coding act demonstrating how to transform static HTML frameworks into dynamic, functional applications using JavaScript."
    },
    { 
      title: "Engineering Beyond the classroom: Building skills for the future", 
      tag: "Talk - Nigerian Institution of Agricultural Engineering Student Body, FUNAAB", 
      date: "Nov 2026", 
      linkText: "view here",
      url: "https://drive.google.com/file/d/1AzbqdTLdK60VbBIfm7ymhUkh9WPbdKpl/view",
      desc: "A focused discussion on bridging the gap between theoretical academic coursework and the practical, technical competencies required in the modern engineering industry."
    },
    { 
      title: "The Spark in the dark", 
      tag: "Blog", 
      date: "Dec 2025", 
      linkText: "read here",
      url: "https://medium.com/@Timilehinolajolo/the-spark-in-the-dark-5a03ff50d0af",
      desc: "A reflective piece exploring the challenges of early technical pursuits and how to maintain momentum when debugging complex development issues."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#F9F9F7] text-[#1A1A1A] font-sans selection:bg-[#1A1A1A] selection:text-[#F9F9F7] overflow-hidden flex flex-col">
      
      {/* Subtle interactive mesh gradient background */}
      <motion.div 
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,1), transparent 40%)`
        }}
      />

      {/* TOP NAVIGATION */}
      <nav className="relative z-20 w-full px-6 py-8 flex flex-col sm:flex-row justify-between items-center border-b border-black/5 max-w-5xl mx-auto gap-4">
        <span className="font-serif text-xl tracking-tight font-medium">Taiwo Timilehin Olajolo</span>
        <div className="flex gap-6 text-sm font-mono uppercase tracking-widest text-gray-500">
          <a href="#about" className="hover:text-black transition-colors">About</a>
          <a href="#experience" className="hover:text-black transition-colors">Experience</a>
          <a href="#projects" className="hover:text-black transition-colors">Projects</a>
          <a href="#blog" className="hover:text-black transition-colors">Blog</a>
        </div>
      </nav>

      <main className="flex-grow max-w-4xl mx-auto px-6 py-5 relative z-10 w-full">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8">
          
          {/* CENTRALIZED HERO / INTRO SECTION */}
          <motion.section variants={meltIn} className="flex flex-col items-center text-center space-y-1">
            <motion.h1 
              className="text-5xl md:text-7xl font-serif tracking-tight text-[#111]"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >

            </motion.h1>

            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-40 h-40 rounded-full border-2 border-black/10 bg-[#EBEBE8] flex items-center justify-center overflow-hidden shadow-sm"
            >
              <img 
                src={profilePic} 
                alt="Taiwo Timilehin Olajolo" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="space-y-3 font-mono text-sm uppercase tracking-wider text-gray-600">
              <a href="mailto:timilehin.olajolo@gmail.com" className="block hover:text-black transition-colors duration-300">
                timilehin.olajolo@gmail.com
              </a>
              <div className="flex justify-center gap-6">
                {socialLinks.map((platform) => (
                  <motion.a 
                    key={platform.name} 
                    href={platform.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, color: "#000" }}
                    className="transition-colors duration-300"
                  >
                    {platform.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.section>

          {/* ABOUT ME & RESUME BUTTON */}
          <motion.section id="about" variants={meltIn} className="space-y-8 w-full text-left">
            <div className="space-y-6 text-lg font-light leading-relaxed text-gray-700">
              <p>
                Hello! I am a final-year student in Agriculture and Bioresources Engineering at the Federal University of Agriculture, Abeokuta. 
              </p>
              <p>
                My interest lies in soil and water conservation engineering using Machine Learning and Natural Language Processing (ML/NLP).
              </p>
              <p>
                I am also a software developer focused on building clean web apps.{" "}
                <a 
                  href="https://timilehinolajolo.netlify.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-black border-b border-black/30 hover:border-black transition-colors italic"
                >
                  View my software portfolio here.
                </a>
              </p>
            </div>
            
            <div className="pt-4">
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: "#111", color: "#fff" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 border border-black text-black font-mono text-sm uppercase tracking-widest transition-colors duration-300 rounded-sm"
              >
                View Resume / CV
              </motion.button>
            </div>
          </motion.section>

          {/* EXPERIENCE SECTION */}
          <motion.section id="experience" variants={meltIn} className="space-y-12">
            <h2 className="text-sm font-mono uppercase tracking-widest text-gray-400 border-b border-black/10 pb-4"> / Experience /</h2>
            
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-1 font-mono text-xs text-gray-400 mt-2">Mar 2026 — Aug 2026</div>
                <div className="md:col-span-3 space-y-2">
                  <h3 className="text-2xl font-serif text-[#111]">Seven-Up Bottling Company, Ikeja</h3>
                  <p className="font-medium text-gray-600">Engineering Intern</p>
                  <p className="font-light text-gray-600 leading-relaxed text-sm">
                    Working as a maintenance planner to log and execute daily engineering plant operations, ensuring high operational uptime through rigorous tracking and technical reporting. Gained hands-on mechanical experience in utility operations, specifically managing and maintaining water treatment facilities and Effluent Treatment Plant (ETP) systems.
                  </p>
                  <p className="font-mono text-xs text-gray-500 mt-2">Core skills: SAP S/4HANA, VBA, Excel, SAP GUI Scripting API</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-1 font-mono text-xs text-gray-400 mt-2">Jul 2025 — Sep 2025</div>
                <div className="md:col-span-3 space-y-2">
                  <h3 className="text-2xl font-serif text-[#111]">Emobella Engineering</h3>
                  <p className="font-medium text-gray-600">Engineering Intern</p>
                  <p className="font-light text-gray-600 leading-relaxed text-sm">
                    Assisted with core engineering design, structural planning, and technical drafting for ongoing facility projects.
                  </p>
                  <p className="font-mono text-xs text-gray-500 mt-2">Core skills: Matlab, AutoCAD</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-1 font-mono text-xs text-gray-400 mt-2">Apr 2020 — Present</div>
                <div className="md:col-span-3 space-y-2">
                  <h3 className="text-2xl font-serif text-[#111]">Microsoft</h3>
                  <p className="font-medium text-gray-600">Associate, Microsoft Student Ambassador, FUNAAB</p>
                  <p className="font-light text-gray-600 leading-relaxed text-sm">
                    Fostering technology communities across the university landscape, mentoring peers, and actively advocating for modern student developer resources on campus
                  </p>
                  <p className="font-mono text-xs text-gray-500 mt-2">Core skills: Software Development</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-1 font-mono text-xs text-gray-400 mt-2">Apr 2023 — Present</div>
                <div className="md:col-span-3 space-y-2">
                  <h3 className="text-2xl font-serif text-[#111]">Federal University of Agriculture, Abeokuta</h3>
                  <p className="font-medium text-gray-600">Head of Class, Agricultural Bioresources Engineering, Class 2022/2023</p>
                  <p className="font-light text-gray-600 leading-relaxed text-sm">
                    Serving as the primary academic liaison between the university faculty, administration, and the engineering student body. Responsible for coordinating academic schedules, disseminating critical curriculum updates, and advocating for student welfare and resources.
                  </p>
                  <p className="font-mono text-xs text-gray-500 mt-2">Core skills: Leadership, Communication, Project Coordination</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PROJECTS SECTION */}
          <motion.section id="projects" variants={meltIn} className="space-y-8">
            <h2 className="text-sm font-mono uppercase tracking-widest text-gray-400 border-b border-black/10 pb-4">/ Projects /</h2>
            <div className="relative w-full aspect-video bg-[#EBEBE8] rounded-sm flex items-center justify-center overflow-hidden group border border-black/5">
              <motion.div 
                className="absolute inset-0 bg-black/5"
                whileHover={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
              <motion.p 
                className="font-serif text-3xl italic text-gray-400 group-hover:text-black transition-colors duration-500"
                animate={{ filter: ['blur(0px)', 'blur(2px)', 'blur(0px)'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                Coming Soon.
              </motion.p>
            </div>
          </motion.section>

          {/* BLOG SECTION */}
          <motion.section id="blog" variants={meltIn} className="space-y-12">
            <h2 className="text-sm font-mono uppercase tracking-widest text-gray-400 border-b border-black/10 pb-4">/ Blogs /</h2>
            
            <div className="space-y-8">
              <h3 className="font-serif text-2xl text-[#111] italic">Talks & Engagement</h3>
              
              <div className="space-y-10">
                {blogPosts.map((post, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex flex-col md:flex-row gap-6 p-4 -ml-4 border border-transparent hover:border-black/5 hover:bg-black/[0.02] rounded-lg transition-all duration-300"
                  >
                    <div className="w-full md:w-1/4 font-mono text-xs text-gray-400 mt-1 flex flex-col gap-2">
                      <span>{post.date}</span>
                      <span className="w-fit px-2 py-1 bg-black/5 text-gray-600 rounded-sm">{post.tag}</span>
                    </div>
                    <div className="w-full md:w-3/4 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h4 className="text-xl font-serif text-[#111]">{post.title}</h4>
                        <a 
                          href={post.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-mono text-xs uppercase tracking-wider hover:text-black transition-colors whitespace-nowrap"
                        >
                          [{post.linkText}]
                        </a>
                      </div>
                      <p className="text-sm font-light text-gray-600 leading-relaxed">
                        {post.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

        </motion.div>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 w-full border-t border-black/10 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm font-mono text-gray-500">
          <span>@ Copyright 2026 Timilehin Olajolo. Last Updated: July 11, 2026.</span>
          <a href="#" className="hover:text-black transition-colors">Back to top ↑</a>
        </div>
      </footer>

    </div>
  );
};

export default MyPortfolio;