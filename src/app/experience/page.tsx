'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Experience() {
  const [activeCard, setActiveCard] = useState(0);

  const experienceData = [
    {
      id: 0,
      company: 'Cyber Energia',
      position: 'Software Engineer',
      period: 'Nov 2022 - Present',
      duration: '2 yrs 9 mos',
      location: 'Greater London, England, United Kingdom',
      logo: 'CE',
      color: 'from-blue-500 to-purple-600',
      textColor: 'text-blue-400',
      skills: ['React Js', 'Next Js', 'Typescript', 'Javascript', 'Zustand', 'Jest', 'Styled Components', 'Tailwindcss', 'DaisyUI', 'Docker', 'PHP'],
      description: 'Leading frontend development for innovative energy solutions, working with modern React ecosystem and cloud technologies.',
      achievements: [
        'Developed scalable React applications with TypeScript',
        'Implemented state management with Zustand',
        'Built responsive UIs with Tailwind CSS and DaisyUI',
        'Containerized applications with Docker',
        'Collaborated with international teams'
      ]
    },
    {
      id: 1,
      company: 'SBanco',
      position: 'Frontend Developer',
      period: 'Jan 2022 - Nov 2022',
      duration: '11 mos',
      location: 'Curitiba, Paraná, Brasil',
      logo: 'SB',
      color: 'from-green-500 to-teal-600',
      textColor: 'text-green-400',
      skills: ['React Js', 'Next Js', 'Typescript', 'Javascript', 'Redux', 'Redux Saga', 'Jest', 'Styled Components', 'Tailwindcss', 'DaisyUI'],
      description: 'Developed banking applications with focus on user experience and performance optimization.',
      achievements: [
        'Built banking interfaces with React and Next.js',
        'Managed complex state with Redux and Redux Saga',
        'Implemented comprehensive testing with Jest',
        'Created responsive designs with Tailwind CSS',
        'Optimized application performance'
      ]
    },
    {
      id: 2,
      company: 'Brazilian Army',
      position: 'Developer',
      period: 'Sep 2018 - Feb 2022',
      duration: '3 yrs 6 mos',
      location: 'Três Lagoas, Mato Grosso do Sul, Brazil',
      logo: 'EB',
      color: 'from-red-500 to-orange-600',
      textColor: 'text-red-400',
      skills: ['JavaScript', 'React JS', 'Node JS', 'Laravel', 'PHP', 'SQL'],
      description: 'Full-stack development for military systems and applications.',
      achievements: [
        'Developed full-stack applications with React and Node.js',
        'Built backend systems with Laravel and PHP',
        'Managed databases and SQL queries',
        'Created military-specific software solutions',
        'Maintained legacy systems'
      ]
    },
    {
      id: 3,
      company: 'Brazilian Army',
      position: 'Network and Telecommunication Technician',
      period: 'Jan 2018 - May 2019',
      duration: '1 yr 5 mos',
      location: 'Três Lagoas, Mato Grosso do Sul, Brazil',
      logo: 'NT',
      color: 'from-indigo-500 to-purple-600',
      textColor: 'text-indigo-400',
      skills: ['Network Protocols', 'VoIP', 'Telecommunications', 'System Maintenance', 'Equipment Installation'],
      description: 'Specialized in telecommunications infrastructure and network systems.',
      achievements: [
        'Maintained telecommunications systems',
        'Installed and configured network equipment',
        'Managed VoIP and telephony systems',
        'Monitored network performance',
        'Provided technical support'
      ]
    },
    {
      id: 4,
      company: 'Brazilian Army',
      position: 'Information Technology Technician',
      period: 'Jan 2018 - Dec 2018',
      duration: '1 yr',
      location: 'Três Lagoas, Mato Grosso do Sul, Brazil',
      logo: 'IT',
      color: 'from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      skills: ['Network Administration', 'Server Management', 'CCTV Systems', 'IT Support', 'Database Management'],
      description: 'Managed IT infrastructure and provided technical support.',
      achievements: [
        'Maintained network infrastructure',
        'Managed servers and databases',
        'Supported CCTV and IP camera systems',
        'Provided user technical support',
        'Supervised IT services'
      ]
    },
    {
      id: 5,
      company: 'Brazilian Army',
      position: 'Computer Maintenance Technician',
      period: 'Mar 2017 - Dec 2017',
      duration: '10 mos',
      location: 'Três Lagoas, Mato Grosso do Sul, Brazil',
      logo: 'CM',
      color: 'from-yellow-500 to-orange-600',
      textColor: 'text-yellow-400',
      skills: ['Hardware Maintenance', 'Software Installation', 'Backup Systems', 'Troubleshooting', 'Preventive Maintenance'],
      description: 'Specialized in computer hardware and software maintenance.',
      achievements: [
        'Maintained computer hardware and printers',
        'Installed and configured software',
        'Managed backup and recovery systems',
        'Performed preventive maintenance',
        'Evaluated technology upgrades'
      ]
    },
    {
      id: 6,
      company: 'Brazilian Army',
      position: 'Administrative Assistant',
      period: 'Mar 2015 - Mar 2017',
      duration: '2 yrs 1 mo',
      location: 'Três Lagoas, Mato Grosso do Sul, Brazil',
      logo: 'AA',
      color: 'from-gray-500 to-slate-600',
      textColor: 'text-gray-400',
      skills: ['Administrative Support', 'Documentation', 'Organization', 'Communication', 'Process Management'],
      description: 'Provided administrative support and organizational assistance.',
      achievements: [
        'Managed administrative processes',
        'Organized documentation and records',
        'Provided communication support',
        'Assisted with organizational tasks',
        'Maintained office efficiency'
      ]
    }
  ];

  return (
    <div className="relative w-full overflow-hidden antialiased">
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My professional journey from administrative roles to software engineering, 
            showcasing growth and expertise across various technology domains.
          </p>
        </motion.div>

        {/* Experience Cards Grid */}
        <div className="space-y-8 mb-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group cursor-pointer ${
                activeCard === exp.id ? 'scale-[1.02]' : 'hover:scale-[1.01]'
              } transition-all duration-300`}
              onClick={() => setActiveCard(exp.id)}
            >
              <div className={`relative overflow-hidden rounded-3xl p-8 bg-gradient-to-r ${exp.color} bg-opacity-5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300`}>
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Left Side - Logo and Basic Info */}
                    <div className="flex items-center gap-6">
                      <div className={`relative w-20 h-20 bg-gradient-to-br ${exp.color} rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        {exp.logo}
                        {/* Glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-bold text-white text-2xl mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                          {exp.position}
                        </h3>
                        <p className={`font-semibold ${exp.textColor} text-xl mb-1`}>{exp.company}</p>
                        <div className="flex items-center gap-4 text-gray-400 text-sm">
                          <span>{exp.period}</span>
                          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Location and Skills Preview */}
                    <div className="lg:flex-1 lg:flex lg:justify-between lg:items-center">
                      <div className="mb-4 lg:mb-0">
                        <p className="text-gray-300 text-sm flex items-center">
                          <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                          {exp.location}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.slice(0, 3).map((skill) => (
                          <span key={skill} className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-xs hover:bg-white/20 transition-colors border border-white/5">
                            {skill}
                          </span>
                        ))}
                        {exp.skills.length > 3 && (
                          <span className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-xs border border-white/5">
                            +{exp.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mt-6">
                    <p className="text-gray-300 text-sm leading-relaxed max-w-4xl">
                      {exp.description}
                    </p>
                  </div>

                  {/* Active Indicator */}
                  {activeCard === exp.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute top-6 right-6 w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg"
                    />
                  )}

                  {/* Hover Arrow */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed View */}
        {activeCard !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 bg-gradient-to-br ${experienceData[activeCard].color} rounded-xl flex items-center justify-center text-white font-bold text-2xl`}>
                {experienceData[activeCard].logo}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {experienceData[activeCard].position}
                </h2>
                <p className={`text-2xl font-semibold ${experienceData[activeCard].textColor}`}>
                  {experienceData[activeCard].company}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Achievements */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded mr-3"></span>
                  Key Achievements
                </h3>
                <ul className="space-y-3">
                  {experienceData[activeCard].achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-1 h-6 bg-gradient-to-b from-green-400 to-teal-400 rounded mr-3"></span>
                  Technologies & Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {experienceData[activeCard].skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="rounded-full bg-white/10 px-4 py-2 text-gray-300 text-sm hover:bg-white/20 transition-colors border border-white/5"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
