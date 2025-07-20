'use client';
import Image from 'next/image';
import { Link2, Mail } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  IconArrowUpRight,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from '@tabler/icons-react';

export default function Home() {
  const socialLinks = [
    {
      icon: <IconBrandX />,
      label: '_danktt',
      href: 'https://x.com/_danktt',
      external: true,
    },
    {
      icon: <IconBrandInstagram />,
      label: 'danilo.mirandaa_',
      href: 'https://www.instagram.com/danilo.mirandaa_/',
      external: true,
    },
    {
      icon: <IconBrandLinkedin />,
      label: 'danilo-miranda15',
      href: 'https://www.linkedin.com/in/danilo-miranda15',
      external: true,
    },
    {
      icon: <Mail />,
      label: 'danilomirandaa.15@outlook.com',
      href: 'mailto:danilomirandaa.15@outlook.com',
      external: false,
      isEmail: true,
    },
  ];
    
  return (
    <div className="relative w-full overflow-hidden antialiased flex justify-center items-center mt-20">
      <div className="mx-auto w-full lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center lg:justify-start lg:pl-20"
              >
                <div className="max-w-xs lg:max-w-none">
                  <div className="relative group">
                    <div className="absolute inset-0 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                    <Image
                      src="/profile.jpg"
                      alt="Danilo Miranda"
                      width={400}
                      height={300}
                      className="relative aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 "
                      priority
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Conteúdo principal */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="lg:order-first lg:row-span-2"
              >
                <h1 className="font-bold text-4xl tracking-tight sm:text-5xl mb-6  text-white">
                  I'm Danilo Miranda
                </h1>
                <div className="space-y-6 text-base text-gray-300">
                  <p className="leading-relaxed">
                    A Full-Stack Developer specialized in React, Next.js, and
                    Go, with a background that blends hands-on experience in
                    software engineering, networks, and IT infrastructure.
                  </p>
                  <p className="leading-relaxed">
                    I didn't start in a traditional tech environment — my roots
                    are in the Brazilian Army, where I spent years not just
                    writing code, but keeping critical systems online and
                    secure. That experience taught me discipline,
                    problem-solving under pressure, and the real impact
                    technology can have when done right.
                  </p>
                  <p className="leading-relaxed">
                    Today, I build web applications with clean architecture,
                    strong attention to detail, and a deep understanding of both
                    frontend and backend stacks. My toolbox includes React,
                    Next.js, Typescript, Tailwind, Zustand, Jest, and Docker,
                    and I'm always learning and refining my craft.
                  </p>
                  <p className="leading-relaxed">
                    Currently, I work at Cyber Energia (UK) as a Frontend
                    Developer, where I help design and deliver modern, scalable
                    applications for the energy sector. I'm also developing
                    LummyView, a project born from my passion for photography
                    and efficient file management.
                  </p>
                  <p className="leading-relaxed">
                    Above all, I believe great software starts with people —
                    with empathy, clarity, and the drive to build something that
                    actually solves a problem.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="lg:pl-20"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 ">
                  <h3 className="text-lg font-semibold text-white mb-4">Connect with me</h3>
                  <ul className="space-y-3">
                    {socialLinks.map((link, idx) => (
                      <li key={link.label}>
                        {link.external ? (
                          <Link
                            className="group flex items-center justify-between gap-3 font-medium text-sm text-gray-300 transition hover:text-white hover:bg-white/5 rounded-lg p-2 -m-2"
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className='flex items-center gap-2'>
                              <span className="text-orange-600 group-hover:text-orange-500 transition-colors">
                                {link.icon}
                              </span>
                              <span>{link.label}</span>
                            </div>
                            <div
                              className=' duration-400 opacity-0 group-hover:opacity-100'
                            >
                              <IconArrowUpRight stroke={1.5} className='w-4 h-4 text-orange-500' />
                            </div>
                          </Link>
                        ) : (
                          <Link
                            className="group flex items-center gap-3 font-medium text-sm text-gray-300 transition hover:text-white hover:bg-white/5 rounded-lg p-2 -m-2"
                            href={link.href}
                          >
                            <span className="text-orange-600 group-hover:text-orange-500 transition-colors">
                              {link.icon}
                            </span>
                            <span>{link.label}</span>
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
