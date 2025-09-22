'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
const TABS = [
  { label: 'Home', href: '/' },
  { label: 'Experience', href: '/experience' },
  { label: 'Hobby', href: '/hobby' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const activeTabRef = useRef<HTMLLIElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  useEffect(() => {
    const updateIndicator = () => {
      const activeTabElement = activeTabRef.current;

      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;
        setIndicatorStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    };

    // Update immediately
    updateIndicator();

    // Update after a small delay to ensure DOM is ready
    const timeoutId = setTimeout(updateIndicator, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  const handleNavigation = (href: string) => {
    router.push(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 right-0 left-0 z-50 bg-transparent backdrop-blur-sm"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-0">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link
              href="/"
              className="pointer-events-auto flex items-center space-x-2"
              aria-label="Home"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600">
                <Image
                  src="/logo.png"
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded-full object-cover"
                  priority
                />
              </div>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-600 hover:bg-zinc-100 md:hidden dark:text-zinc-400 dark:hover:bg-zinc-800"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <nav className="hidden md:block">
            <div className="relative">
              <ul className="flex items-center space-x-1">
                {TABS.map((item) => (
                  <li
                    key={item.label}
                    ref={pathname === item.href ? activeTabRef : null}
                  >
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className={`rounded-md px-4 py-2 font-medium text-sm transition-colors duration-200 ${pathname === item.href
                          ? 'text-orange-600 dark:text-orange-400'
                          : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                        }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              <motion.div
                className="absolute bottom-0 h-0.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600"
                style={indicatorStyle}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 25,
                  mass: 0.8,
                }}
                layoutId="navbar-indicator"
              />
            </div>
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-transparent backdrop-blur-3xl md:hidden "
          >
            <nav className="px-4 py-4">
              <ul className="space-y-2">
                {TABS.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className={`w-full rounded-md px-3 py-2 text-left font-medium text-sm transition-colors duration-200 ${pathname === item.href
                          ? 'bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400'
                          : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-100'
                        }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
