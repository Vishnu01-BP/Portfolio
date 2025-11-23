'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const certifications = [
    {
      title: 'TensorFlow: Neural Networks and Working with Tables, Images, NLP',
      issuer: 'LinkedIn Learning',
      date: 'October 2025',
      link: 'https://www.linkedin.com/learning/certificates/606c46515443ab7ad9a2dea57206d8abd9896d7d61560fbcb4fda63108b8cef6?trk=share_certificate',
      skills: ['TensorFlow', 'Neural Networks', 'NLP', 'Computer Vision']
    },
    {
      title: 'Introduction to Prompt Engineering for Generative AI',
      issuer: 'LinkedIn Learning',
      date: 'October 2025',
      link: 'https://www.linkedin.com/learning/certificates/25e32a9d6e3bb47955ff4c975c3e1cb41177200d2a8238dc5fe24028b5095191?trk=share_certificate',
      skills: ['Prompt Engineering', 'Generative AI', 'LLMs']
    },
    {
      title: 'Technology Innovation and Management',
      issuer: 'Open University',
      date: 'October 2025',
      link: 'https://drive.google.com/file/d/192oSlNhl2Bh32ldZz4UV9IcXZGkpB2yh/view?usp=drive_link',
      skills: ['Innovation', 'Technology Management', 'Leadership']
    }
  ]

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.15, duration: 0.4 }}
                className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <div className="text-4xl text-gradient mb-4">
                    <FaCertificate />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                    {cert.title}
                  </h3>

                  <p className="text-gray-400 mb-2">{cert.issuer}</p>
                  <p className="text-sm text-gray-500 mb-4">{cert.date}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/5 rounded-full text-xs text-accent border border-accent/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors duration-300"
                  >
                    View Certificate <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications

