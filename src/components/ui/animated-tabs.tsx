'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const TABS = [
  { label: 'Home', href: '/' },
  { label: 'Experience', href: '/experience' },
  { label: 'Hobby', href: '/hobby' },
];

export function AnimatedTabs() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(
    TABS.find((tab) => tab.href === pathname)?.label || TABS[0].label,
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container && activeTab) {
      const activeTabElement = activeTabRef.current;

      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;

        const clipLeft = offsetLeft;
        const clipRight = offsetLeft + offsetWidth;

        container.style.clipPath = `inset(0 ${Number(100 - (clipRight / container.offsetWidth) * 100).toFixed()}% 0 ${Number((clipLeft / container.offsetWidth) * 100).toFixed()}% )`;
      }
    }
  }, [activeTab, activeTabRef, containerRef]);

  const handleTabClick = (label: string, href: string) => {
    setActiveTab(label);
    router.push(href);
  };

  return (
    <div className="relative mx-auto flex w-fit flex-col items-center">
      <div
        ref={containerRef}
        className="absolute z-10 w-full overflow-hidden [clip-path:inset(0px_75%_0px_0%_round_1px)] [transition:clip-path_0.25s_ease]"
      >
        <div className="relative mt-8 flex h-0.5 w-full justify-center bg-[#FF5A1F]">
          {TABS.map((tab) => (
            <button
              key={tab.label}
              onClick={() => handleTabClick(tab.label, tab.href)}
              className="flex h-8 items-center p-3 font-medium text-sm text-white dark:text-black"
              tabIndex={-1}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="relative flex w-full justify-center">
        {TABS.map(({ label, href }) => {
          const isActive = activeTab === label;

          return (
            <button
              key={label}
              ref={isActive ? activeTabRef : null}
              onClick={() => handleTabClick(label, href)}
              className="flex h-8 items-center p-3 font-medium text-neutral-500 text-sm dark:text-neutral-300"
              type="button"
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
