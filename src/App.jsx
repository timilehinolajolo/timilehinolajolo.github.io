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

  // Social Links Data (Now with Inline SVGs)
  const socialLinks = [
    { 
      name: 'Github', 
      url: 'https://github.com/timilehinolajolo',
      color: '#181717',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/timilehinolajolo',
      color: '#0A66C2',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    { 
      name: 'X', 
      url: 'https://x.com/_timilehintaiwo',
      color: '#000000',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    { 
      name: 'Medium', 
      url: 'https://medium.com/@timilehinolajolo',
      color: '#000000',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
           <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h7.358l5.378 11.798 4.718-11.798h6.924v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.936-1.882c.19-.19.19-.246.19-.537V7.794l-5.389 13.608h-.728L1.583 7.794v10.113c-.027.32.086.637.303.864l2.553 3.089v.403H.016v-.403l2.584-3.09c.21-.22.32-.527.295-.837V6.887h-.049z"/>
        </svg>
      )
    }
  ];

  // Blog Posts Data
  const blogPosts = [
    { 
      title: "Building Connected Systems: Embedded Systems, IoT & AI", 
      tag: "Panel Moderator - ASAP-E Node Hub", 
      date: "July 2026", 
      linkText: "view event",
      url: "https://calendar.google.com/calendar/u/0/share?slt=1AczbfHNm6RKZj2twNf7f7WwgAEUA2uW8Km1mvDdsW3FMJXSr5Zgb3LeunhI4fDq9q3nvJX6dTrM93w",
      desc: "Moderated a 2-hour virtual panel discussion bridging the gap between hardware architecture, IoT solutions, and artificial intelligence for a diverse engineering community."
    },
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
    <div className="relative min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-teal-700 selection:text-white overflow-hidden flex flex-col">
      
      {/* Subtle interactive mesh gradient background */}
      <motion.div 
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(15, 118, 110, 1), transparent 40%)`
        }}
      />

      {/* TOP NAVIGATION */}
      <nav className="relative z-20 w-full px-6 py-8 flex flex-col sm:flex-row justify-between items-center border-b border-slate-200 max-w-5xl mx-auto gap-4">
        <span className="font-serif text-xl tracking-tight font-medium text-slate-900">Taiwo Timilehin Olajolo</span>
        <div className="flex gap-6 text-sm font-mono uppercase tracking-widest text-slate-500">
          <a href="#about" className="hover:text-teal-700 transition-colors">About</a>
          <a href="#experience" className="hover:text-teal-700 transition-colors">Experience</a>
          <a href="#blog" className="hover:text-teal-700 transition-colors">Blog</a>
        </div>
      </nav>

      <main className="flex-grow max-w-4xl mx-auto px-6 py-5 relative z-10 w-full">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8">
          
          {/* CENTRALIZED HERO / INTRO SECTION */}
          <motion.section variants={meltIn} className="flex flex-col items-center text-center space-y-1">
            <motion.h1 
              className="text-5xl md:text-7xl font-serif tracking-tight text-slate-900"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
            </motion.h1>

            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-40 h-40 rounded-full border-2 border-slate-200 bg-slate-100 flex items-center justify-center overflow-hidden shadow-sm mt-8"
            >
              <img 
                src={profilePic} 
                alt="Taiwo Timilehin Olajolo" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="space-y-4 font-mono text-sm uppercase tracking-wider text-slate-600 pt-6">
              <a href="mailto:timilehin.olajolo@gmail.com" className="block hover:text-teal-700 transition-colors duration-300">
                timilehin.olajolo@gmail.com
              </a>
              <div className="flex justify-center gap-6 pt-2">
{socialLinks.map((platform) => (
  <motion.a 
    key={platform.name} 
    href={platform.url} 
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3, color: platform.color }} // Uses real brand color on hover
    className="text-slate-500 transition-colors duration-300"
  >
    {platform.icon}
  </motion.a>
))}
              </div>
            </div>
          </motion.section>

          {/* ABOUT ME & RESUME BUTTON */}
          <motion.section id="about" variants={meltIn} className="space-y-8 w-full text-left pt-16">
            <div className="space-y-6 text-lg font-light leading-relaxed text-slate-700">
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
                  className="text-teal-700 border-b border-teal-700/30 hover:border-teal-700 transition-colors italic font-medium"
                >
                  View my software portfolio here.
                </a>
              </p>
            </div>
            
            <div className="pt-4">
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: "#0f766e", borderColor: "#0f766e", color: "#fff" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 border border-slate-800 text-slate-800 font-mono text-sm uppercase tracking-widest transition-colors duration-300 rounded-sm"
              >
                <a href="https://timilehinolajolo.netlify.app"                   target="_blank" 
                  rel="noopener noreferrer"  >SEE MY PROJECTS HERE</a>
              </motion.button>
            </div>
          </motion.section>

          {/* EXPERIENCE SECTION */}
          <motion.section id="experience" variants={meltIn} className="space-y-12 pt-16">
            <h2 className="text-sm font-mono uppercase tracking-widest text-teal-700/80 border-b border-slate-200 pb-4"> / Experience /</h2>
            
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-1 font-mono text-xs text-slate-500 mt-2">Mar 2026 — Aug 2026</div>
                <div className="md:col-span-3 space-y-2">
                  <h3 className="text-2xl font-serif text-slate-900">Seven-Up Bottling Company, Ikeja</h3>
                  <p className="font-medium text-slate-700">Engineering Intern</p>
                  <p className="font-light text-slate-600 leading-relaxed text-sm">
                    Working as a maintenance planner to log and execute daily engineering plant operations, ensuring high operational uptime through rigorous tracking and technical reporting. Gained hands-on mechanical experience in utility operations, specifically managing and maintaining water treatment facilities and Effluent Treatment Plant (ETP) systems.
                  </p>
                  <p className="font-mono text-xs text-slate-500 mt-2">Core skills: SAP S/4HANA, VBA, Excel, SAP GUI Scripting API</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-1 font-mono text-xs text-slate-500 mt-2">Jul 2025 — Sep 2025</div>
                <div className="md:col-span-3 space-y-2">
                  <h3 className="text-2xl font-serif text-slate-900">Emobella Engineering</h3>
                  <p className="font-medium text-slate-700">Engineering Intern</p>
                  <p className="font-light text-slate-600 leading-relaxed text-sm">
                    Assisted with core engineering design, structural planning, and technical drafting for ongoing facility projects.
                  </p>
                  <p className="font-mono text-xs text-slate-500 mt-2">Core skills: Matlab, AutoCAD</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-1 font-mono text-xs text-slate-500 mt-2">Apr 2020 — Present</div>
                <div className="md:col-span-3 space-y-2">
                  <h3 className="text-2xl font-serif text-slate-900">Microsoft</h3>
                  <p className="font-medium text-slate-700">Associate, Microsoft Student Ambassador, FUNAAB</p>
                  <p className="font-light text-slate-600 leading-relaxed text-sm">
                    Fostering technology communities across the university landscape, mentoring peers, and actively advocating for modern student developer resources on campus
                  </p>
                  <p className="font-mono text-xs text-slate-500 mt-2">Core skills: Software Development</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-1 font-mono text-xs text-slate-500 mt-2">Apr 2023 — Present</div>
                <div className="md:col-span-3 space-y-2">
                  <h3 className="text-2xl font-serif text-slate-900">Federal University of Agriculture, Abeokuta</h3>
                  <p className="font-medium text-slate-700">Head of Class, Agricultural Bioresources Engineering, Class 2022/2023</p>
                  <p className="font-light text-slate-600 leading-relaxed text-sm">
                    Serving as the primary academic liaison between the university faculty, administration, and the engineering student body. Responsible for coordinating academic schedules, disseminating critical curriculum updates, and advocating for student welfare and resources.
                  </p>
                  <p className="font-mono text-xs text-slate-500 mt-2">Core skills: Leadership, Communication, Project Coordination</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PROJECTS SECTION
          <motion.section id="projects" variants={meltIn} className="space-y-8 pt-16">
            <h2 className="text-sm font-mono uppercase tracking-widest text-teal-700/80 border-b border-slate-200 pb-4">/ Projects /</h2>
            <div className="relative w-full aspect-video bg-slate-100 rounded-sm flex items-center justify-center overflow-hidden group border border-slate-200">
              <motion.div 
                className="absolute inset-0 bg-slate-200/50"
                whileHover={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
              <motion.p 
                className="font-serif text-3xl italic text-slate-400 group-hover:text-teal-700 transition-colors duration-500"
                animate={{ filter: ['blur(0px)', 'blur(2px)', 'blur(0px)'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                Coming Soon.
              </motion.p>
            </div>
          </motion.section> */}

          {/* BLOG SECTION */}
          <motion.section id="blog" variants={meltIn} className="space-y-12 pt-16">
            <h2 className="text-sm font-mono uppercase tracking-widest text-teal-700/80 border-b border-slate-200 pb-4">/ Blogs /</h2>
            
            <div className="space-y-8">
              <h3 className="font-serif text-2xl text-slate-900 italic">Talks & Engagement</h3>
              
              <div className="space-y-10">
                {blogPosts.map((post, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex flex-col md:flex-row gap-6 p-4 -ml-4 border border-transparent hover:border-slate-200 hover:bg-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <div className="w-full md:w-1/4 font-mono text-xs text-slate-500 mt-1 flex flex-col gap-2">
                      <span>{post.date}</span>
                      <span className="w-fit px-2 py-1 bg-teal-50 text-teal-700 rounded-sm font-medium">{post.tag}</span>
                    </div>
                    <div className="w-full md:w-3/4 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h4 className="text-xl font-serif text-slate-900">{post.title}</h4>
                        <a 
                          href={post.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-mono text-xs uppercase tracking-wider text-teal-700 hover:text-slate-900 transition-colors whitespace-nowrap"
                        >
                          [{post.linkText}]
                        </a>
                      </div>
                      <p className="text-sm font-light text-slate-600 leading-relaxed">
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
      <footer className="relative z-10 w-full border-t border-slate-200 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm font-mono text-slate-500">
          <span>@ Copyright 2026 Timilehin Olajolo. Last Updated: July 11, 2026.</span>
          <a href="#" className="hover:text-teal-700 transition-colors">Back to top ↑</a>
        </div>
      </footer>

    </div>
  );
};

export default MyPortfolio;
