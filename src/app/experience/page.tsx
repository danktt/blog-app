'use client';
import { Timeline } from '@/components/ui/timeline';

export default function Experience() {
  const experienceData = [
    {
      title: '2022 - Present',
      content: (
        <div>
          <h4 className="mb-2 font-semibold text-white text-xl">
            Cyber Energia - Software Engineer
          </h4>
          <p className="mb-4 text-gray-400 text-sm">
            London, England, United Kingdom
          </p>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-sm">
              React Js
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-sm">
              Next Js
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-sm">
              Typescript
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-sm">
              Javascript
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-sm">
              Zustand
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-sm">
              Jest
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-sm">
              Styled Components
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-sm">
              Tailwindcss
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-sm">
              DaisyUI
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-sm">
              Docker
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-sm">
              PHP
            </span>
          </div>
        </div>
      ),
    },
    {
      title: '2022',
      content: (
        <div>
          <h4 className="mb-2 font-semibold text-white text-xl">
            SBanco - Frontend Developer
          </h4>
          <p className="mb-4 text-gray-400 text-sm">Curitiba, Paraná, Brasil</p>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-sm">
              React Js
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-sm">
              Next Js
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-sm">
              Typescript
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-sm">
              Javascript
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-sm">
              Redux
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-sm">
              Redux Saga
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-sm">
              Jest
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-sm">
              Styled Components
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-sm">
              Tailwindcss
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-sm">
              DaisyUI
            </span>
          </div>
        </div>
      ),
    },
    {
      title: '2018 - 2022',
      content: (
        <div>
          <h4 className="mb-2 font-semibold text-white text-xl">
            Brazilian Army - Developer
          </h4>
          <p className="mb-4 text-gray-400 text-sm">
            Três Lagoas, Mato Grosso do Sul, Brazil
          </p>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-sm">
              Java Script
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-sm">
              React JS
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-sm">
              Node JS
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-sm">
              Laravel
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-sm">
              PHP
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-sm">
              SQL
            </span>
          </div>
        </div>
      ),
    },
    {
      title: '2018 - 2019',
      content: (
        <div>
          <h4 className="mb-2 font-semibold text-white text-xl">
            Brazilian Army - Network and Telecommunication Technician
          </h4>
          <p className="mb-4 text-gray-400 text-sm">
            Três Lagoas, Mato Grosso do Sul, Brazil
          </p>
          <ul className="list-inside list-disc space-y-2 text-gray-300">
            <li>
              Provide preventive and corrective maintenance in
              telecommunications systems
            </li>
            <li>
              Participate in the development of telecommunications projects
            </li>
            <li>
              Plan, evaluate and execute installations that establish
              communications
            </li>
            <li>
              Control and operate telephone, television, data transmission and
              fax systems
            </li>
            <li>Assemble telecommunication devices, circuits or components</li>
          </ul>
        </div>
      ),
    },
    {
      title: '2015 - 2018',
      content: (
        <div>
          <h4 className="mb-2 font-semibold text-white text-xl">
            Brazilian Army - Information Technology Technician
          </h4>
          <p className="mb-4 text-gray-400 text-sm">
            Três Lagoas, Mato Grosso do Sul, Brazil
          </p>
          <ul className="list-inside list-disc space-y-2 text-gray-300">
            <li>Network maintenance, VOIP and analog telephony</li>
            <li>Maintenance management of printers and computers</li>
            <li>Support for CCTV system and IP cameras</li>
            <li>
              Implementation, maintenance and monitoring of Servers, Switches
              and Database
            </li>
            <li>Supervision and management of services in the IT area</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black/[0.96] bg-grid-white/[0.02] antialiased">
      <div className="relative z-10 mx-auto w-full max-w-7xl p-6 ">
        <Timeline data={experienceData} />
      </div>
    </div>
  );
}
