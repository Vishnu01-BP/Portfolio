'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt, FaDownload, FaMobile } from 'react-icons/fa'
import Image from 'next/image'

interface Bubble {
  id: number
  x: number
  y: number
  size: number
  delay: number
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  // Generate random bubbles on mount
  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles: Bubble[] = []
      for (let i = 0; i < 25; i++) {
        newBubbles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 70 + 30,
          delay: Math.random() * 2
        })
      }
      setBubbles(newBubbles)
    }
    generateBubbles()
  }, [])

  // Track mouse position
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    })
  }

  const projects = [
    {
      title: 'Dynamic Movie Recommendation Engine',
      description: 'A robust, full-stack application using RAG (Retrieval-Augmented Generation) with Gemini API and Google Search Grounding for factually accurate movie recommendations.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Python', 'FastAPI', 'Gemini API'],
      image: 'https://res.cloudinary.com/dt6y4dsml/image/upload/v1760792490/Gemini_Generated_Image_ihfu8eihfu8eihfu_c16jpp.png',
      link: 'https://movie-recommendation-system-fsug.onrender.com/',
      github: '#',
      date: 'October 2025',
      isMobileApp: false
    },
    {
      title: 'MindMend - Relapse Tracker Application',
      description: 'A comprehensive mobile application designed to help users track and manage their recovery journey. Built with React Native and Expo, it provides real-time streak tracking, mood logging, AI-powered coaching, analytics visualization, and crisis support features.',
      technologies: ['React Native', 'Expo SDK', 'TypeScript', 'Clerk', 'Supabase', 'OpenRouter AI'],
      image: '/relapse.png',
      link: 'https://expo.dev/accounts/vishnu_bp/projects/relapse-tracker/builds/10b23e41-e72c-4021-8f8c-cbe4dff2169f',
      github: '#',
      date: 'November 2025',
      isMobileApp: true
    },
    {
      title: 'Health GPT - AI Healthcare Predictor',
      description: 'AI-powered predictive healthcare system using multiple ML models to predict diseases with high accuracy using TensorFlow and advanced deep learning techniques.',
      technologies: ['TensorFlow', 'Keras', 'Flask', 'Docker', 'VGG16', 'CNN'],
      image: 'https://res.cloudinary.com/dt6y4dsml/image/upload/v1760703978/Gemini_Generated_Image_b7lwxib7lwxib7lw_mhqcjh.png',
      link: '#',
      github: 'https://github.com/Vishnu-BP/HealthGPT---Intelligent-Healthcare-System',
      date: 'March 2025',
      isMobileApp: false
    },
    {
      title: 'Gate Pass Management System (GPMS)',
      description: 'Comprehensive gate pass management system with role-based access control for Students, Wardens, and Security personnel with real-time tracking.',
      technologies: ['Flask', 'Express.js', 'MongoDB', 'XGBoost', 'EJS', 'Bcrypt'],
      image: 'https://res.cloudinary.com/dt6y4dsml/image/upload/v1760703991/Gemini_Generated_Image_l6nppcl6nppcl6np_eeesyy.png',
      link: '#',
      github: 'https://github.com/Vishnu-BP/Gate-pass-Managment-System',
      date: 'April 2025',
      isMobileApp: false
    }
  ]

  return (
    <section 
      id="projects" 
      className="py-20 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Bubbles Background */}
      <div className="absolute inset-0 -z-10">
        {bubbles.map((bubble) => {
          // Calculate distance from mouse
          const dx = mousePosition.x - bubble.x
          const dy = mousePosition.y - bubble.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 30
          
          // Move bubble away from cursor
          const pushX = distance < maxDistance ? (dx / distance) * -5 : 0
          const pushY = distance < maxDistance ? (dy / distance) * -5 : 0

          return (
            <motion.div
              key={bubble.id}
              className="absolute rounded-full bg-gradient-to-br from-gray-700/20 to-gray-800/20 blur-sm"
              style={{
                left: `${bubble.x}%`,
                top: `${bubble.y}%`,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
              }}
              animate={{
                x: [pushX, pushX + 10, pushX],
                y: [pushY, pushY + 10, pushY],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: bubble.delay,
                ease: "easeInOut"
              }}
            />
          )
        })}
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            A small selection of recent projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="glass rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 hover:shadow-xl group"
              >
                {/* Project Preview Image */}
                <div className={`relative w-full ${project.isMobileApp ? 'h-64 md:h-72' : 'h-48 md:h-56'} bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`${project.isMobileApp ? 'object-contain' : 'object-cover'} group-hover:scale-110 transition-transform duration-500`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darker/70 via-darker/20 to-transparent"></div>
                  {/* Mobile App Badge */}
                  {project.isMobileApp && (
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-purple-500/90 to-blue-500/90 backdrop-blur-sm rounded-full flex items-center gap-2 border border-white/20">
                      <FaMobile className="text-xs text-white" />
                      <span className="text-xs font-semibold text-white">Mobile App</span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-4 md:p-5">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-gradient transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-400 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-white/5 rounded-full text-xs text-gray-300 font-medium border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2.5 py-1 bg-white/5 rounded-full text-xs text-gray-400 font-medium border border-white/10">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {project.link && project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg text-xs font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105"
                      >
                        {project.isMobileApp ? (
                          <>
                            <FaDownload className="text-xs" />
                            Download and Try App
                          </>
                        ) : (
                          <>
                            Check Live Site <FaExternalLinkAlt className="text-xs" />
                          </>
                        )}
                      </a>
                    )}
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg text-xs font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105"
                      >
                        <FaGithub className="text-xs" />
                        Check Git
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

