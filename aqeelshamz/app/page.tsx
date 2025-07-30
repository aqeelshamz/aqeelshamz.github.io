"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeProjectTab, setActiveProjectTab] = useState("professional");
  const [modalImage, setModalImage] = useState<{ src: string, alt: string } | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme preference from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    } else if (savedTheme === 'light') {
      setIsDarkMode(false);
    } else {
      // Use system preference if no saved theme
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  // Save theme preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleTabChange = (tab: string) => {
    setActiveProjectTab(tab);
    // Scroll to the projects section header after a small delay to ensure tab content is rendered
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const yOffset = -80; // Account for fixed navbar
        const y = projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  const openModal = (src: string, alt: string) => {
    setModalImage({ src, alt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-black text-white' 
        : 'bg-white text-black'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full backdrop-blur-sm border-b z-50 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-black/80 border-gray-600' 
          : 'bg-white/80 border-gray-200'
      }`}>
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-medium">Aqeel Shamsudheen</h1>
            <div className="flex items-center space-x-8">
              <a href="#about" className={`text-sm transition-colors ${
                isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
              }`}>About</a>
              <a href="#experience" className={`text-sm transition-colors ${
                isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
              }`}>Experience</a>
              <a href="#projects" className={`text-sm transition-colors ${
                isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
              }`}>Projects</a>
              <a href="#education" className={`text-sm transition-colors ${
                isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
              }`}>Education</a>
              <a href="#contact" className={`text-sm transition-colors ${
                isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
              }`}>Contact</a>
              
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  isDarkMode 
                    ? 'hover:bg-gray-900 text-yellow-400' 
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  // Sun icon for light mode
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  // Moon icon for dark mode
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight">
              Full Stack Developer & Entrepreneur
            </h1>
            <p className={`text-lg md:text-xl max-w-3xl transition-colors ${
              isDarkMode ? 'text-gray-200' : 'text-gray-600'
            }`}>
              I create innovative mobile and web applications spanning AI-powered platforms, enterprise SaaS solutions, and educational technology.
              Specializing in Flutter, React, Node.js with expertise in GenAI integration and scalable architectures.
            </p>
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 text-sm text-gray-500 max-w-2xl">
              <div className="text-center">
                <div className="font-medium text-black">15+</div>
                <div>Live Applications</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-black">5+</div>
                <div>Open Source Packages</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-black">10+</div>
                <div>Years Experience</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-black">Multiple</div>
                <div>Hackathon Wins</div>
              </div>
            </div> */}
            <div className="flex space-x-4 pt-4">
              <a
                href="/Aqeel_CV.pdf"
                download="Aqeel_Shamsudheen_Resume.pdf"
                className={`px-6 py-2 text-sm font-medium transition-colors ${
                  isDarkMode 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                Resume
              </a>
              <a
                href="#contact"
                className={`px-6 py-2 border text-sm font-medium transition-colors ${
                  isDarkMode 
                    ? 'border-gray-500 hover:border-gray-400' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-6 border-t transition-colors ${
        isDarkMode ? 'border-gray-600' : 'border-gray-200'
      }`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light mb-12">About</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <p className={`transition-colors ${
                isDarkMode ? 'text-gray-200' : 'text-gray-600'
              }`}>
                I'm a passionate full-stack developer and entrepreneur with expertise spanning mobile app development,
                AI-powered platforms, and enterprise SaaS solutions. I've built a diverse portfolio of applications
                with multiple published packages on pub.dev and a strong focus on creating innovative solutions.
              </p>

              <p className={`transition-colors ${
                isDarkMode ? 'text-gray-200' : 'text-gray-600'
              }`}>
                As a <strong>B.Tech graduate in Computer Science & Engineering</strong> from Government Engineering College, Thrissur,
                I've successfully delivered live applications across app stores, developed <strong>enterprise-grade SaaS platforms</strong>,
                and participated in hackathons with multiple wins and recognition.
              </p>

              <p className={`transition-colors ${
                isDarkMode ? 'text-gray-200' : 'text-gray-600'
              }`}>
                My work spans across <strong>educational platforms</strong> serving Kerala & CBSE students, comprehensive mobile ecosystems,
                <strong>AI-powered evaluation systems</strong>, and innovative tools including Android reverse engineering studios
                and blockchain-based form creators. I've also contributed to the developer community with
                popular <strong>Dart packages</strong> that have gained significant adoption.
              </p>

              <p className={`transition-colors ${
                isDarkMode ? 'text-gray-200' : 'text-gray-600'
              }`}>
                I thrive on solving complex technical challenges, building scalable architectures, and creating impactful
                solutions that bridge the gap between cutting-edge technology and real-world needs.
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Core Technologies</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Flutter", "React", "Next.js", "Node.js",
                    "MongoDB", "Firebase", "JavaScript", "TypeScript",
                    "GenAI", "Dart", "AWS", "Git"
                  ].map((tech) => (
                    <span key={tech} className={`text-sm transition-colors ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Specializations</h3>
                <div className="space-y-2">
                  {[
                    "Mobile App Development", "SaaS Platforms",
                    "Educational Technology", "Android Security",
                    "Package Development", "AI/ML Integration", "Enterprise Solutions"
                  ].map((spec) => (
                    <span key={spec} className={`text-sm block transition-colors ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      • {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Achievements</h3>
                <div className="space-y-2">
                  <span className={`text-sm block transition-colors ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>• 📱 Live Applications on App Stores</span>
                  <span className={`text-sm block transition-colors ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>• 📦 Popular Open Source Packages</span>
                  <span className={`text-sm block transition-colors ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>• ☁️ Worked on SaaS Platforms</span>
                  <span className={`text-sm block transition-colors ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>• 🏆 Hackathon Winner - Multiple Events</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 px-6 border-t transition-colors ${
        isDarkMode ? 'border-gray-600' : 'border-gray-200'
      }`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light mb-12">Experience</h2>
          <div className="space-y-12">
            {/* Experience Item 1 */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className={`text-sm transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-500'
                }`}>Jun 2024 — Present</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-lg font-medium mb-2">Flutter Developer Intern</h3>
                <p className={`mb-2 transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>iTurn, Trivandrum, Kerala</p>
                <p className={`mb-4 transition-colors ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Contributing to the development of an on-demand driving training app providing personalized and efficient learning experiences.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Flutter", "Dart", "Firebase"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className={`text-sm transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-500'
                }`}>2023 — 2024</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-lg font-medium mb-2">Full-stack Developer</h3>
                <p className={`mb-2 transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>Teqnify Solutions (Freelance)</p>
                <p className={`mb-4 transition-colors ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Developed multiple educational platforms including Darsmate, Mentorsa, and Sprint Learning App. Built complete ecosystems with mobile apps, admin panels, and backend infrastructure for Islamic education and mentoring platforms.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Flutter", "Next.js", "Node.js", "MongoDB", "Firebase"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience Item 3 */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className={`text-sm transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-500'
                }`}>Aug 2023 — Mar 2024</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-lg font-medium mb-2">Full-stack Developer</h3>
                <p className={`mb-2 transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>Darsmate Learning App (Freelance)</p>
                <p className={`mb-4 transition-colors ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Developed a comprehensive e-learning platform with mobile app and admin panel, implementing real-time features and scalable architecture.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Flutter", "Next.js", "Node.js", "MongoDB", "Firebase"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience Item 4 */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className={`text-sm transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-500'
                }`}>Oct 2021 — May 2023</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-lg font-medium mb-2">Full-stack Developer</h3>
                <p className={`mb-2 transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>Webbebo Technologies, Coimbatore (Freelance)</p>
                <p className={`mb-4 transition-colors ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Built enterprise-level SaaS platforms including Calendly and Typeform clones, implementing complex scheduling algorithms and form building capabilities.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Next.js", "Node.js", "MongoDB", "Ubuntu"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience Item 5 */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <p className={`text-sm transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-500'
                }`}>Dec 2020 — Feb 2022</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-lg font-medium mb-2">Flutter Developer</h3>
                <p className={`mb-2 transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>Palmate Technologies, Jeddah, Saudi Arabia (Freelance)</p>
                <p className={`mb-4 transition-colors ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Developed Alwadi International School app for seamless school management, implementing parent-teacher communication features.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Flutter", "Dart", "Firebase"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-6 border-t transition-colors ${
        isDarkMode ? 'border-gray-600' : 'border-gray-200'
      }`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light mb-8">Projects</h2>

          {/* Project Category Tabs */}
          <div className={`sticky top-14 z-40 mb-8 border-b pt-2 transition-colors ${
            isDarkMode ? 'bg-black border-gray-600' : 'bg-white border-gray-200'
          }`}>
            <div className="flex space-x-1">
              <button
                onClick={() => handleTabChange("professional")}
                className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                  activeProjectTab === "professional"
                    ? (isDarkMode ? "border-white text-white" : "border-black text-black")
                    : `border-transparent ${
                        isDarkMode 
                          ? 'text-gray-300 hover:text-gray-100' 
                          : 'text-gray-500 hover:text-gray-700'
                      }`
                }`}
              >
                Professional & Freelance
              </button>
              <button
                onClick={() => handleTabChange("personal")}
                className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                  activeProjectTab === "personal"
                    ? (isDarkMode ? "border-white text-white" : "border-black text-black")
                    : `border-transparent ${
                        isDarkMode 
                          ? 'text-gray-300 hover:text-gray-100' 
                          : 'text-gray-500 hover:text-gray-700'
                      }`
                }`}
              >
                Personal & Open Source
              </button>
              <button
                onClick={() => handleTabChange("academic")}
                className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                  activeProjectTab === "academic"
                    ? (isDarkMode ? "border-white text-white" : "border-black text-black")
                    : `border-transparent ${
                        isDarkMode 
                          ? 'text-gray-300 hover:text-gray-100' 
                          : 'text-gray-500 hover:text-gray-700'
                      }`
                }`}
              >
                Hackathons & College Projects
              </button>
            </div>
          </div>

          {/* Professional & Freelance Projects */}
          {activeProjectTab === "professional" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div
                  className="w-full aspect-[2/1] bg-gray-100 rounded-lg mb-4 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/sprint.png", "Sprint Learning App")}
                >
                  <Image
                    src="/sprint.png"
                    alt="Sprint Learning App"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">Sprint Learning App</h3>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-green-500/20 text-green-200' : 'bg-green-100 text-green-700'
                  }`}>Freelance</span>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-blue-500/20 text-blue-200' : 'bg-blue-100 text-blue-700'
                  }`}>Live on Stores</span>
                </div>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Comprehensive educational platform for Kerala & CBSE students (9th–12th grade). Features student-friendly notes, recorded video lessons, pop-up questions for enhanced retention, and live doubt support sessions.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {["Flutter", "Next.js", "Node.js", "MongoDB", "EduTech"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs rounded transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="https://apps.apple.com/in/app/sprint-learning-app/id6748683716" className="text-sm underline underline-offset-4 hover:no-underline">
                  App Store →
                </a>
                <span className={`text-sm block mt-2 transition-colors ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-500'
                }`}>
                  Teqnify Solutions
                </span>
              </div>

              <div className="space-y-4">
                <div
                  className="w-full aspect-[2/1] bg-gray-100 rounded-lg mb-4 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/mentorsa.png", "Mentorsa")}
                >
                  <Image
                    src="/mentorsa.png"
                    alt="Mentorsa"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">Mentorsa</h3>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-green-500/20 text-green-200' : 'bg-green-100 text-green-700'
                  }`}>Freelance</span>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-blue-500/20 text-blue-200' : 'bg-blue-100 text-blue-700'
                  }`}>Live on Stores</span>
                </div>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Islamic mentoring platform. Built complete ecosystem with mobile app, admin panel, and backend infrastructure.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {["Flutter", "Next.js", "Node.js", "MongoDB", "Firebase"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs rounded transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 text-sm">
                  <a href="https://play.google.com/store/apps/details?id=org.mentorsa.app" className="underline underline-offset-4 hover:no-underline">
                    Play Store →
                  </a>
                  <a href="https://apps.apple.com/in/app/mentorsa/id6746732623" className="underline underline-offset-4 hover:no-underline">
                    App Store →
                  </a>
                </div>
                <span className={`text-sm transition-colors ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-500'
                }`}>
                  Teqnify Solutions
                </span>
              </div>

              <div className="space-y-4">
                <div
                  className="w-full aspect-[2/1] bg-gray-100 rounded-lg mb-4 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/darsmate.png", "Darsmate Learning App")}
                >
                  <Image
                    src="/darsmate.png"
                    alt="Darsmate Learning App"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">Darsmate Learning App</h3>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-green-500/20 text-green-200' : 'bg-green-100 text-green-700'
                  }`}>Freelance</span>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-blue-500/20 text-blue-200' : 'bg-blue-100 text-blue-700'
                  }`}>Live on Stores</span>
                </div>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Comprehensive Islamic e-learning platform featuring courses in Quran studies, Islamic finance, and self-development. Built complete ecosystem with mobile app, admin panel, and backend infrastructure.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {["Flutter", "Next.js", "Node.js", "MongoDB", "Firebase"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs rounded transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 text-sm">
                  <a href="https://play.google.com/store/apps/details?id=com.darsmate" className="underline underline-offset-4 hover:no-underline">
                    Play Store →
                  </a>
                  <a href="https://apps.apple.com/ae/app/darsmate/id6475296013" className="underline underline-offset-4 hover:no-underline">
                    App Store →
                  </a>
                </div>
                <span className={`text-sm transition-colors ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-500'
                }`}>
                  Teqnify Solutions
                </span>
              </div>

              <div className="space-y-4">
                <div
                  className="w-full aspect-[2/1] bg-gray-100 rounded-lg mb-4 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/onlyform.png", "Enterprise SaaS Suite")}
                >
                  <Image
                    src="/onlyform.png"
                    alt="Enterprise SaaS Suite"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">Web-based SaaS Projects</h3>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-green-500/20 text-green-200' : 'bg-green-100 text-green-700'
                  }`}>Freelance</span>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-purple-500/20 text-purple-200' : 'bg-purple-100 text-purple-700'
                  }`}>Enterprise</span>
                </div>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Enterprise-level SaaS platforms including Calendly.com and Typeform.com clones. Implemented complex scheduling algorithms, form building capabilities, and scalable architecture.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {["React.js", "Next.js", "Node.js", "MongoDB", "Ubuntu"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs rounded transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <span className={`text-sm transition-colors ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-500'
                }`}>
                  Webbebo Technologies - Multiple Enterprise Platforms
                </span>
              </div>

              <div className="space-y-4">
                <div
                  className="w-full aspect-[2/1] bg-gray-100 rounded-lg mb-4 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/alwadi.png", "Alwadi International School App")}
                >
                  <Image
                    src="/alwadi.png"
                    alt="Alwadi International School App"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">Alwadi International School App</h3>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-green-500/20 text-green-200' : 'bg-green-100 text-green-700'
                  }`}>Freelance</span>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-gray-600/50 text-gray-300' : 'bg-gray-100 text-gray-700'
                  }`}>Discontinued</span>
                </div>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  School management mobile application. Featured parent-teacher communication, student tracking, attendance management etc.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {["Flutter", "Dart", "Firebase", "School Management"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs rounded transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <span className={`text-sm transition-colors ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-500'
                }`}>
                  Palmate Technologies - Saudi Arabia
                </span>
              </div>
            </div>
          )}

          {/* Personal & Open Source Projects */}
          {activeProjectTab === "personal" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div
                  className="w-full aspect-[2/1] bg-gray-100 rounded-lg mb-4 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/zaptox.png", "Zaptox")}
                >
                  <Image
                    src="/zaptox.png"
                    alt="Zaptox"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">Zaptox</h3>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-orange-500/20 text-orange-200' : 'bg-orange-100 text-orange-700'
                  }`}>Social Platform</span>
                </div>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Full-stack self-improvement social network with AI personal trainer, habit tracking, daily tasks, brotherhood system, and comprehensive gamification elements.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {["Flutter", "Node.js", "MongoDB", "GenAI", "Firebase", "WebSocket"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs rounded transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="https://github.com/aqeelshamz/zaptox" className="text-sm underline underline-offset-4 hover:no-underline">
                  View on GitHub →
                </a>
              </div>

              <div className="space-y-4">
                <div
                  className="w-full aspect-[2/1] bg-gray-100 rounded-lg mb-4 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/evaluateai.png", "EvaluateAI")}
                >
                  <Image
                    src="/evaluateai.png"
                    alt="EvaluateAI"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">EvaluateAI</h3>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-blue-500/20 text-blue-200' : 'bg-blue-100 text-blue-700'
                  }`}>AI Platform</span>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-green-500/20 text-green-200' : 'bg-green-100 text-green-700'
                  }`}>Personal Project</span>
                </div>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Comprehensive AI-powered answer sheet evaluation platform for educational institutions. Built with Next.js, Node.js, MongoDB, and multiple AI models (GPT-4o, Gemini, Claude). Features both web and mobile applications.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {["Next.js", "Node.js", "MongoDB", "Flutter", "GenAI"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs rounded transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="https://github.com/aqeelshamz/evaluateai" className="text-sm underline underline-offset-4 hover:no-underline">
                  View on GitHub →
                </a>
              </div>

              <div className="space-y-4">
                <div
                  className="w-full aspect-[2/1] bg-gray-100 rounded-lg mb-4 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/revdroid.png", "RevDroid GUI")}
                >
                  <Image
                    src="/revdroid.png"
                    alt="RevDroid GUI"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">RevDroid GUI</h3>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-purple-500/20 text-purple-200' : 'bg-purple-100 text-purple-700'
                  }`}>Security Tool</span>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-blue-500/20 text-blue-200' : 'bg-blue-100 text-blue-700'
                  }`}>Web App</span>
                </div>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Comprehensive Android reverse engineering studio with GUI. Features device management, APK analysis, Frida integration, and security testing tools for cybersecurity professionals.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {["Next.js", "Frida", "Android Security", "GUI", "Reverse Engineering"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs rounded transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="https://github.com/aqeelshamz/revdroid-gui" className="text-sm underline underline-offset-4 hover:no-underline">
                  View on GitHub →
                </a>
              </div>

              <div className="space-y-4">
                <div
                  className="w-full aspect-[2/1] bg-gray-100 rounded-lg mb-4 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/macosproxy.png", "macOSProxy")}
                >
                  <Image
                    src="/macosproxy.png"
                    alt="macOSProxy"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">macOSProxy</h3>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-blue-500/20 text-blue-200' : 'bg-blue-100 text-blue-700'
                  }`}>macOS App</span>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-green-500/20 text-green-200' : 'bg-green-100 text-green-700'
                  }`}>Utility</span>
                </div>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Simple and intuitive macOS application for managing proxy settings. Built with Flutter for macOS, providing an easy-to-use interface to quickly turn on/off proxy configurations without navigating through system preferences.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {["Flutter", "Dart", "macOS", "System Utilities", "Desktop App"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs rounded transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="https://github.com/aqeelshamz/macos-proxy" className="text-sm underline underline-offset-4 hover:no-underline">
                  View on GitHub →
                </a>
              </div>

              <div className="space-y-4">
                <div
                  className="w-full aspect-[2/1] bg-gray-100 rounded-lg mb-4 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/rewordai.png", "RewordAI")}
                >
                  <Image
                    src="/rewordai.png"
                    alt="RewordAI"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">RewordAI</h3>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-blue-500/20 text-blue-200' : 'bg-blue-100 text-blue-700'
                  }`}>AI SaaS Platform</span>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-purple-500/20 text-purple-200' : 'bg-purple-100 text-purple-700'
                  }`}>Full-Stack</span>
                </div>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Complete AI-powered SaaS platform for text rewriting and grammar correction. Built with Next.js and Node.js, featuring OpenAI GPT integration, user management, payment systems, customizable branding, and comprehensive admin dashboard.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {["Next.js", "Node.js", "OpenAI GPT", "SaaS", "Payment Integration", "TypeScript"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs rounded transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="https://github.com/aqeelshamz/reword-ai" className="text-sm underline underline-offset-4 hover:no-underline">
                  View on GitHub →
                </a>
              </div>

              <div className="space-y-4">
                <div
                  className="w-full aspect-[2/1] bg-gray-100 rounded-lg mb-4 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/postify.png", "Postify")}
                >
                  <Image
                    src="/postify.png"
                    alt="Postify"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">Postify</h3>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-orange-500/20 text-orange-200' : 'bg-orange-100 text-orange-700'
                  }`}>REST API Client</span>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-green-500/20 text-green-200' : 'bg-green-100 text-green-700'
                  }`}>Mobile App</span>
                </div>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Professional Flutter REST API client for Android with comprehensive HTTP/HTTPS request support. Features syntax highlighting, dark/light themes, request history, response preview, and modern UI for streamlined API testing workflow.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {["Flutter", "REST API", "HTTP Client", "Syntax Highlighting", "Mobile Development"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs rounded transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="https://github.com/aqeelshamz/postify" className="text-sm underline underline-offset-4 hover:no-underline">
                  View on GitHub →
                </a>
              </div>

              <div className="space-y-4">
                <div
                  className="w-full aspect-[2/1] bg-gray-100 rounded-lg mb-4 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/grocery.png", "Flutter Grocery App")}
                >
                  <Image
                    src="/grocery.png"
                    alt="Flutter Grocery App"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">Flutter Grocery App</h3>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-green-500/20 text-green-200' : 'bg-green-100 text-green-700'
                  }`}>E-commerce</span>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-orange-500/20 text-orange-200' : 'bg-orange-100 text-orange-700'
                  }`}>Complete Solution</span>
                </div>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Comprehensive grocery delivery ecosystem with Flutter customer app, React.js admin panel, and Node.js backend. Features Stripe payments, live chat, push notifications, QR code verification, and complete order management system.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {["Flutter", "React.js", "Node.js", "MongoDB", "Stripe", "WebSocket"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs rounded transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="https://codecanyon.net/item/flutter-grocery-app-reactjs-admin-panel-nodejs-backend/34422080" className="text-sm underline underline-offset-4 hover:no-underline">
                  View on CodeCanyon →
                </a>
              </div>

              <div className="space-y-4">
                <div
                  className="w-full aspect-[2/1] bg-gray-100 rounded-lg mb-4 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/timetable.png", "TimeTable App (Wear OS)")}
                >
                  <Image
                    src="/timetable.png"
                    alt="TimeTable App (Wear OS)"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">TimeTable App (Wear OS)</h3>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-purple-500/20 text-purple-200' : 'bg-purple-100 text-purple-700'
                  }`}>Wear OS</span>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-blue-500/20 text-blue-200' : 'bg-blue-100 text-blue-700'
                  }`}>Smartwatch App</span>
                </div>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Flutter-based timetable application specifically designed for Wear OS smartwatches. Features optimized UI for small screens, day-wise schedule viewing, and seamless navigation designed for wearable devices. Demonstrates expertise in Flutter's cross-platform capabilities extending to wearable technology.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {["Flutter", "Dart", "Wear OS", "Smartwatch", "Mobile Development", "Wearable Technology"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs rounded transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="https://github.com/aqeelshamz/wearos-timetable-app" className="text-sm underline underline-offset-4 hover:no-underline">
                  View on GitHub →
                </a>
              </div>

              <div className="space-y-4">
                <div
                  className="w-full aspect-[2/1] bg-gray-100 rounded-lg mb-4 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/neumorfic.png", "Neumorfic CSS Framework")}
                >
                  <Image
                    src="/neumorfic.png"
                    alt="Neumorfic CSS Framework"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">Neumorfic CSS Framework</h3>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-indigo-500/20 text-indigo-200' : 'bg-indigo-100 text-indigo-700'
                  }`}>CSS</span>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-purple-500/20 text-purple-200' : 'bg-purple-100 text-purple-700'
                  }`}>Framework</span>
                </div>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Comprehensive CSS framework providing neumorphic design elements for modern web interfaces. Features pre-built components including buttons, form elements, navigation controls, progress bars, and dropdown menus with the trendy neumorphic design aesthetic. Easy integration with existing projects.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {["CSS", "SCSS", "HTML", "JavaScript", "jQuery", "Design System", "UI Framework"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs rounded transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="https://github.com/aqeelshamz/neumorfic" className="text-sm underline underline-offset-4 hover:no-underline">
                  View on GitHub →
                </a>
              </div>



              <div className="space-y-4">
                <div
                  className="w-full aspect-[2/1] bg-gray-100 rounded-lg mb-4 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/quran.png", "Quran Package")}
                >
                  <Image
                    src="/quran.png"
                    alt="Quran Package"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">Quran Package</h3>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-blue-500/20 text-blue-200' : 'bg-blue-100 text-blue-700'
                  }`}>Dart Package</span>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-purple-500/20 text-purple-200' : 'bg-purple-100 text-purple-700'
                  }`}>Islamic</span>
                </div>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Comprehensive Dart package for Quran text, audio URLs, and metadata. Covers pages, juz, surah, ayah, and more with extensive documentation and community support.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {["Dart", "Package Development", "Documentation", "Community"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs rounded transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="https://pub.dev/packages/quran" className="text-sm underline underline-offset-4 hover:no-underline">
                  View on pub.dev →
                </a>
              </div>

              <div className="space-y-4">
                <div
                  className="w-full aspect-[2/1] bg-gray-100 rounded-lg mb-4 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/uploadthing.png", "UploadThing Package")}
                >
                  <Image
                    src="/uploadthing.png"
                    alt="UploadThing Package"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">UploadThing Package</h3>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-blue-500/20 text-blue-200' : 'bg-blue-100 text-blue-700'
                  }`}>Flutter SDK</span>
                </div>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Unofficial Dart/Flutter SDK for the UploadThing API, providing seamless file upload capabilities for Flutter applications with comprehensive documentation.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {["Dart", "Flutter", "API Integration", "SDK Development"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs rounded transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="https://pub.dev/packages/uploadthing" className="text-sm underline underline-offset-4 hover:no-underline">
                  View on pub.dev →
                </a>
              </div>

              <div className="space-y-4">
                <div
                  className="w-full aspect-[2/1] bg-gray-100 rounded-lg mb-4 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/rot13.png", "rot13 Package")}
                >
                  <Image
                    src="/rot13.png"
                    alt="rot13 Package"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">rot13 Package</h3>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-blue-500/20 text-blue-200' : 'bg-blue-100 text-blue-700'
                  }`}>Dart Package</span>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-purple-500/20 text-purple-200' : 'bg-purple-100 text-purple-700'
                  }`}>Encryption</span>
                </div>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Simple and efficient Dart package for ROT13 encoding and decoding. Cross-platform compatible Flutter package that implements the classic ROT13 cipher algorithm for string transformation and basic text obfuscation.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {["Dart", "Flutter", "Encryption", "Cipher", "Cross-platform"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs rounded transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="https://pub.dev/packages/rot13" className="text-sm underline underline-offset-4 hover:no-underline">
                  View on pub.dev →
                </a>
              </div>

              <div className="space-y-4">
                <div
                  className="w-full aspect-[2/1] bg-gray-100 rounded-lg mb-4 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/hadith.png", "Hadith Package")}
                >
                  <Image
                    src="/hadith.png"
                    alt="Hadith Package"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">Hadith Package</h3>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-blue-500/20 text-blue-200' : 'bg-blue-100 text-blue-700'
                  }`}>Dart Package</span>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-purple-500/20 text-purple-200' : 'bg-purple-100 text-purple-700'
                  }`}>Islamic</span>
                </div>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Comprehensive Dart package providing offline access to Hadith data from major collections including Bukhari, Muslim, Abu Dawud, Tirmidhi, Nasai, and Ibn Majah. Features complete API for accessing collections, books, individual hadiths, and sunnah.com URLs with cross-platform compatibility.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {["Dart", "Flutter", "Islamic Content", "Offline Data", "Cross-platform", "Package Development"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs rounded transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="https://pub.dev/packages/hadith" className="text-sm underline underline-offset-4 hover:no-underline">
                  View on pub.dev →
                </a>
              </div>

              <div className="space-y-4">
                <div
                  className="w-full aspect-[2/1] bg-gray-100 rounded-lg mb-4 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/system77.png", "System77")}
                >
                  <Image
                    src="/system77.png"
                    alt="System77"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">System77</h3>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-red-500/20 text-red-200' : 'bg-red-100 text-red-700'
                  }`}>Remote Access Tool</span>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-purple-500/20 text-purple-200' : 'bg-purple-100 text-purple-700'
                  }`}>C# Project</span>
                </div>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Powerful Remote Administration Tool for PC developed in C# during my school years. Features comprehensive remote access capabilities, system monitoring, and administrative controls. Another early project where the source code was unfortunately lost due to not using version control systems like GitHub. Recovered the setup file and screenshots, showcasing the professional presentation I aimed for even as a student.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {["C#", "Remote Access", "Windows", "Desktop App"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs rounded transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 text-sm">
                  <a href="https://github.com/aqeelshamz/system-77" className="underline underline-offset-4 hover:no-underline">
                    GitHub →
                  </a>
                  <a href="https://system77official.wixsite.com/home" className="underline underline-offset-4 hover:no-underline">
                    Official Website →
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div
                  className="w-full aspect-[2/1] bg-gray-100 rounded-lg mb-4 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/wixzel.png", "Wixzel OS")}
                >
                  <Image
                    src="/wixzel.png"
                    alt="Wixzel OS"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">Wixzel OS</h3>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-purple-500/20 text-purple-200' : 'bg-purple-100 text-purple-700'
                  }`}>Virtual OS</span>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-orange-500/20 text-orange-200' : 'bg-orange-100 text-orange-700'
                  }`}>Nostalgic Project</span>
                </div>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Virtual Operating System for Windows built with Visual Basic during 9th grade summer vacation. One of my most memorable early school projects featuring a complete desktop environment, file manager, and various system utilities. Unfortunately, the source code was lost when my hard disk was wiped, as I didn't know GitHub back then. Managed to recover the setup file and screenshots from old emails.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {["Visual Basic", "Windows", "Virtual OS", "Desktop Environment", "Early Development"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs rounded transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="https://github.com/aqeelshamz/wixzel-os" className="text-sm underline underline-offset-4 hover:no-underline">
                  View on GitHub →
                </a>
              </div>

            </div>
          )}

          {/* Hackathons & College Projects */}
          {activeProjectTab === "academic" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div
                  className="w-full aspect-[2/1] bg-gray-100 rounded-lg mb-4 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/stratx.png", "StratX")}
                >
                  <Image
                    src="/stratx.png"
                    alt="StratX"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">StratX</h3>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-blue-500/20 text-blue-200' : 'bg-blue-100 text-blue-700'
                  }`}>College Project</span>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-yellow-500/20 text-yellow-200' : 'bg-yellow-100 text-yellow-700'
                  }`}>Final Year</span>
                </div>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Block-based visual platform for creating, backtesting, and monetizing trading strategies. Features drag-and-drop strategy builder, real-time data integration, comprehensive backtesting engine, and marketplace for strategy monetization.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {["Algorithmic Trading", "Blockly", "Backtesting", "Real-time Data", "Next.js", "Node.js", "MongoDB"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs rounded transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 text-sm">
                  <a href="https://github.com/anuragpoolakkal/stratify" className="underline underline-offset-4 hover:no-underline">
                    GitHub →
                  </a>
                  <a href="https://stratx.aqeelshamz.com" className="underline underline-offset-4 hover:no-underline">
                    Live Platform →
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div
                  className="w-full aspect-[2/1] bg-gray-100 rounded-lg mb-4 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/valuateai.png", "valuate.ai")}
                >
                  <Image
                    src="/valuateai.png"
                    alt="valuate.ai"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">valuate.ai</h3>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-yellow-500/20 text-yellow-200' : 'bg-yellow-100 text-yellow-700'
                  }`}>🏆 First Prize</span>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-blue-500/20 text-blue-200' : 'bg-blue-100 text-blue-700'
                  }`}>GenAI Hackathon</span>
                </div>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  AI-powered answer paper evaluation system that revolutionizes grading with computer vision and OpenAI. Features handwriting recognition, automated marking, confidence indicators, and export capabilities. Won First Prize at Kerala's first GenAI TinkHack.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {["Next.js", "Node.js", "OpenAI", "GenAI", "MongoDB"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs rounded transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 text-sm">
                  <a href="https://devfolio.co/projects/valuateai-b724" className="underline underline-offset-4 hover:no-underline">
                    Devfolio →
                  </a>
                  <a href="https://github.com/anuragrajanp/valuate.ai" className="underline underline-offset-4 hover:no-underline">
                    GitHub →
                  </a>
                  <a href="https://valuate-ai.vercel.app" className="underline underline-offset-4 hover:no-underline">
                    Live Demo →
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div
                  className="w-full aspect-[2/1] bg-gray-100 rounded-lg mb-4 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/zapspace.png", "Zapspace")}
                >
                  <Image
                    src="/zapspace.png"
                    alt="Zapspace"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">Zapspace</h3>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-yellow-500/20 text-yellow-200' : 'bg-yellow-100 text-yellow-700'
                  }`}>🏆 Second Prize</span>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-blue-500/20 text-blue-200' : 'bg-blue-100 text-blue-700'
                  }`}>MSME Hackathon</span>
                </div>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Comprehensive digital platform empowering small local businesses with website creation, marketplace integration, automated social media presence, analytics, and educational resources. All-in-one suite for MSME digital transformation.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {["Next.js", "Website Builder", "Marketplace", "Social Media"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs rounded transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 text-sm">
                  <a href="https://github.com/anuragpoolakkal/zapspace" className="underline underline-offset-4 hover:no-underline">
                    GitHub →
                  </a>
                  <a href="https://www.canva.com/design/DAFmuPYkat0/shs3sTOVtS4pAmZujVdiug/edit?utm_content=DAFmuPYkat0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" className="underline underline-offset-4 hover:no-underline">
                    Presentation →
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div
                  className="w-full aspect-[2/1] bg-gray-100 rounded-lg mb-4 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/intelliform.png", "IntelliForm")}
                >
                  <Image
                    src="/intelliform.png"
                    alt="IntelliForm"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">IntelliForm</h3>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-yellow-500/20 text-yellow-200' : 'bg-yellow-100 text-yellow-700'
                  }`}>🏆 Second Prize</span>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-blue-500/20 text-blue-200' : 'bg-blue-100 text-blue-700'
                  }`}>Web3 Hackathon</span>
                </div>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  AI-driven Web3 form creator with blockchain integration. Features NFT validation, encrypted data storage on Polygon blockchain, IPFS file storage, and WeaveDB for responses. Solves privacy concerns in traditional form platforms.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {["Polygon", "WeaveDB", "IPFS", "NFT Validation", "AI", "Web3"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs rounded transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 text-sm">
                  <a href="https://github.com/aqeelshamz/intelliform" className="underline underline-offset-4 hover:no-underline">
                    View on GitHub →
                  </a>
                  <a href="https://intelliform.vercel.app" className="underline underline-offset-4 hover:no-underline">
                    Live Demo →
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div
                  className="w-full aspect-[2/1] bg-gray-100 rounded-lg mb-4 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/skillsift.png", "SkillSift")}
                >
                  <Image
                    src="/skillsift.png"
                    alt="SkillSift"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">SkillSift</h3>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-yellow-500/20 text-yellow-200' : 'bg-yellow-100 text-yellow-700'
                  }`}>Hackathon</span>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-blue-500/20 text-blue-200' : 'bg-blue-100 text-blue-700'
                  }`}>AI Platform</span>
                </div>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  AI-powered job matching platform with resume parsing, ATS scoring, and skill-based recommendations. Built as collaborative academic project with intelligent matching algorithms and comprehensive candidate evaluation.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {["Next.js", "Node.js", "GenAI", "ATS", "Resume Parsing"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs rounded transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="https://github.com/aqeelshamz/skillsift" className="text-sm underline underline-offset-4 hover:no-underline">
                  View on GitHub →
                </a>
              </div>

              <div className="space-y-4">
                <div
                  className="w-full aspect-[2/1] bg-gray-100 rounded-lg mb-4 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/projected.png", "Project Ed")}
                >
                  <Image
                    src="/projected.png"
                    alt="Project Ed"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">Project Ed</h3>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-yellow-500/20 text-yellow-200' : 'bg-yellow-100 text-yellow-700'
                  }`}>🏆 Second Prize</span>
                  <span className={`px-2 py-1 text-xs rounded transition-colors ${
                    isDarkMode ? 'bg-blue-500/20 text-blue-200' : 'bg-blue-100 text-blue-700'
                  }`}>Hackathon</span>
                </div>
                <p className={`transition-colors ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  Real-time educational presentation generator from speech using GenAI. Converts live speech to text and dynamically generates presentations with content from Wikipedia and other sources. Features adjustable expertise levels, automatic summary generation, and PDF export for study materials.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {["GenAI", "Speech-to-Text", "Real-time Processing", "EduTech"].map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs rounded transition-colors ${
                      isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 text-sm">
                  <a href="https://github.com/aqeelshamz/project-ed" className="underline underline-offset-4 hover:no-underline">
                    GitHub →
                  </a>
                  <a href="https://www.youtube.com/watch?v=a8TF_7F7iCI" className="underline underline-offset-4 hover:no-underline">
                    Demo Video →
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 px-6 border-t transition-colors ${
        isDarkMode ? 'border-gray-600' : 'border-gray-200'
      }`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light mb-12">Education</h2>
          <div className="space-y-8">

            {/* Bachelor's Degree */}
            <div className={`border-l-2 pl-6 transition-colors ${
              isDarkMode ? 'border-gray-500' : 'border-gray-200'
            }`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-lg font-medium">Bachelor of Technology (B.Tech)</h3>
                <span className={`text-sm transition-colors ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-500'
                }`}>Sep 2022 - Apr 2025</span>
              </div>
              <p className={`mb-1 transition-colors ${
                isDarkMode ? 'text-gray-200' : 'text-gray-600'
              }`}>Computer Science & Engineering</p>
              <p className={`mb-1 transition-colors ${
                isDarkMode ? 'text-gray-200' : 'text-gray-600'
              }`}>Government Engineering College, Thrissur</p>
              <p className={`mb-3 transition-colors ${
                isDarkMode ? 'text-gray-200' : 'text-gray-600'
              }`}>Grade: 8.35</p>
            </div>

            {/* Diploma */}
            <div className={`border-l-2 pl-6 transition-colors ${
              isDarkMode ? 'border-gray-500' : 'border-gray-200'
            }`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-lg font-medium">Diploma in Computer Science</h3>
                <span className={`text-sm transition-colors ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-500'
                }`}>2019 - 2022</span>
              </div>
              <p className={`mb-1 transition-colors ${
                isDarkMode ? 'text-gray-200' : 'text-gray-600'
              }`}>Computer Engineering</p>
              <p className={`mb-1 transition-colors ${
                isDarkMode ? 'text-gray-200' : 'text-gray-600'
              }`}>Sree Rama Government Polytechnic College, Triprayar</p>
              <p className={`mb-3 transition-colors ${
                isDarkMode ? 'text-gray-200' : 'text-gray-600'
              }`}>Grade: 8.95</p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 border-t transition-colors ${
        isDarkMode ? 'border-gray-600' : 'border-gray-200'
      }`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light mb-12">Contact</h2>
          <div className="space-y-4">
            <p className={`transition-colors ${
              isDarkMode ? 'text-gray-200' : 'text-gray-600'
            }`}>
              I'm always interested in new opportunities and interesting projects.
              Feel free to reach out if you'd like to work together.
            </p>
            <div className="flex space-x-8">
              <a
                href="mailto:aqeelten@gmail.com"
                className="text-sm underline underline-offset-4 hover:no-underline"
              >
                aqeelten@gmail.com
              </a>
              <a
                href="https://github.com/aqeelshamz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline underline-offset-4 hover:no-underline"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/aqeelshamz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline underline-offset-4 hover:no-underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 border-t transition-colors ${
        isDarkMode ? 'border-gray-600' : 'border-gray-200'
      }`}>
        <div className="max-w-4xl mx-auto">
          <p className={`text-sm transition-colors ${
            isDarkMode ? 'text-gray-300' : 'text-gray-500'
          }`}>
            © 2025 Aqeel Shamsudheen. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Image Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative w-full h-full">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white text-3xl z-10 hover:text-gray-300 bg-black bg-opacity-70 rounded-full w-12 h-12 flex items-center justify-center transition-colors"
            >
              ×
            </button>
            <Image
              src={modalImage.src}
              alt={modalImage.alt}
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
