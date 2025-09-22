'use client';

import { TextHoverEffect } from '@/components/ui/text-hover-effect';

export default function Experience() {
  const _experienceData = [
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
      skills: [
        'React Js',
        'Next Js',
        'Typescript',
        'Javascript',
        'Zustand',
        'Jest',
        'Styled Components',
        'Tailwindcss',
        'DaisyUI',
        'Docker',
        'PHP',
      ],
      description:
        'Leading frontend development for innovative energy solutions, working with modern React ecosystem and cloud technologies.',
      achievements: [
        'Developed scalable React applications with TypeScript',
        'Implemented state management with Zustand',
        'Built responsive UIs with Tailwind CSS and DaisyUI',
        'Containerized applications with Docker',
        'Collaborated with international teams',
      ],
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
      skills: [
        'React Js',
        'Next Js',
        'Typescript',
        'Javascript',
        'Redux',
        'Redux Saga',
        'Jest',
        'Styled Components',
        'Tailwindcss',
        'DaisyUI',
      ],
      description:
        'Developed banking applications with focus on user experience and performance optimization.',
      achievements: [
        'Built banking interfaces with React and Next.js',
        'Managed complex state with Redux and Redux Saga',
        'Implemented comprehensive testing with Jest',
        'Created responsive designs with Tailwind CSS',
        'Optimized application performance',
      ],
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
      description:
        'Full-stack development for military systems and applications.',
      achievements: [
        'Developed full-stack applications with React and Node.js',
        'Built backend systems with Laravel and PHP',
        'Managed databases and SQL queries',
        'Created military-specific software solutions',
        'Maintained legacy systems',
      ],
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
      skills: [
        'Network Protocols',
        'VoIP',
        'Telecommunications',
        'System Maintenance',
        'Equipment Installation',
      ],
      description:
        'Specialized in telecommunications infrastructure and network systems.',
      achievements: [
        'Maintained telecommunications systems',
        'Installed and configured network equipment',
        'Managed VoIP and telephony systems',
        'Monitored network performance',
        'Provided technical support',
      ],
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
      skills: [
        'Network Administration',
        'Server Management',
        'CCTV Systems',
        'IT Support',
        'Database Management',
      ],
      description: 'Managed IT infrastructure and provided technical support.',
      achievements: [
        'Maintained network infrastructure',
        'Managed servers and databases',
        'Supported CCTV and IP camera systems',
        'Provided user technical support',
        'Supervised IT services',
      ],
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
      skills: [
        'Hardware Maintenance',
        'Software Installation',
        'Backup Systems',
        'Troubleshooting',
        'Preventive Maintenance',
      ],
      description: 'Specialized in computer hardware and software maintenance.',
      achievements: [
        'Maintained computer hardware and printers',
        'Installed and configured software',
        'Managed backup and recovery systems',
        'Performed preventive maintenance',
        'Evaluated technology upgrades',
      ],
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
      skills: [
        'Administrative Support',
        'Documentation',
        'Organization',
        'Communication',
        'Process Management',
      ],
      description:
        'Provided administrative support and organizational assistance.',
      achievements: [
        'Managed administrative processes',
        'Organized documentation and records',
        'Provided communication support',
        'Assisted with organizational tasks',
        'Maintained office efficiency',
      ],
    },
  ];

  return (
    <div className="flex h-dvh items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <TextHoverEffect text="Coming Soon!" />
      </div>
    </div>
  );
}
