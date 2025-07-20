'use client';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';

export default function Hobby() {
  return (
    <div className="flex items-center justify-center h-dvh">
      <div className="flex flex-col items-center justify-center">
        <TextHoverEffect text="Coming Soon!" />
      </div>
    </div>
  ); 
}
