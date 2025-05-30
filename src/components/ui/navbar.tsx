'use client';
import { motion } from 'framer-motion';
import { AnimatedTabs } from './animated-tabs';
import Image from 'next/image';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Experience', href: '/experience' },
  { name: 'Hobby', href: '/hobby' },
];

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 right-0 left-0 z-50 border-white/10 border-b bg-black/50 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Image src="/logo.png" alt="logo" width={32} height={32} />
            {/* <span className="text-white font-bold text-xl">Danktt</span> */}
          </motion.div>
          <div className="hidden md:block">
            <AnimatedTabs />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
