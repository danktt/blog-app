'use client';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import {
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
      label: 'danilo.mirandaa.15@outlook.com',
      href: 'mailto:danilo.mirandaa.15@outlook.com',
      external: false,
      isEmail: true,
    },
  ];

  return (
    <div className="mt-16 sm:mt-32 sm:px-8">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
              {/* Foto de perfil */}
              <div className="flex justify-center lg:justify-start lg:pl-20">
                <div className="max-w-xs px-2.5 lg:max-w-none">
                  <Image
                    src="/profile.jpg"
                    alt="Danilo Miranda"
                    width={400}
                    height={300}
                    className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                    priority
                  />
                </div>
              </div>
              {/* Conteúdo principal */}
              <div className="lg:order-first lg:row-span-2">
                <h1 className="font-bold text-4xl text-zinc-800 tracking-tight sm:text-5xl dark:text-zinc-100">
                  I'm Danilo Miranda
                </h1>
                <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                  <p>
                    a Full-Stack Developer specialized in React, Next.js, and
                    Go, with a background that blends hands-on experience in
                    software engineering, networks, and IT infrastructure.
                  </p>
                  <p>
                    I didn't start in a traditional tech environment — my roots
                    are in the Brazilian Army, where I spent years not just
                    writing code, but keeping critical systems online and
                    secure. That experience taught me discipline,
                    problem-solving under pressure, and the real impact
                    technology can have when done right.
                  </p>
                  <p>
                    Today, I build web applications with clean architecture,
                    strong attention to detail, and a deep understanding of both
                    frontend and backend stacks. My toolbox includes React,
                    Next.js, Typescript, Tailwind, Zustand, Jest, and Docker,
                    and I'm always learning and refining my craft.
                  </p>
                  <p>
                    Currently, I work at Cyber Energia (UK) as a Frontend
                    Developer, where I help design and deliver modern, scalable
                    applications for the energy sector. I'm also developing
                    LummyView, a project born from my passion for photography
                    and efficient file management.
                  </p>
                  <p>
                    Above all, I believe great software starts with people —
                    with empathy, clarity, and the drive to build something that
                    actually solves a problem.
                  </p>
                </div>
              </div>
              {/* Links sociais */}
              <div className="lg:pl-20">
                <ul>
                  {socialLinks.map((link, idx) => (
                    <li
                      key={link.label}
                      className={
                        idx === socialLinks.length - 1
                          ? 'mt-8 flex border-zinc-100 border-t pt-8 dark:border-zinc-700/40'
                          : idx === 0
                            ? 'flex'
                            : 'mt-4 flex'
                      }
                    >
                      {link.external ? (
                        <Link
                          className="group flex items-center gap-2 font-medium text-sm text-zinc-800 transition hover:text-[#FF5A1F] dark:text-zinc-200 dark:hover:text-[#FF5A1F]"
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.icon}
                          <span>{link.label}</span>
                        </Link>
                      ) : (
                        <Link
                          className="group flex items-center gap-2 font-medium text-sm text-zinc-800 transition hover:text-[#FF5A1F] dark:text-zinc-200 dark:hover:text-[#FF5A1F]"
                          href={link.href}
                        >
                          {link.icon}
                          <span>{link.label}</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
