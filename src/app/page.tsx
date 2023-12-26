"use client";

import React from "react";
import dynamic from 'next/dynamic';

import { BackgroundBeams } from "@/components/BackgroundBeams";
import { Spotlight } from "@/components/Spotlight/indext";
import { ChevronRight } from "lucide-react";

const DynamicTextGenerateEffect = dynamic(() => import('@/components/TextGenerateEffect').then(mod => mod.TextGenerateEffect), {ssr: false});

export default function Home() {
  return (
  

    <div className="bg-grid-white/[0.02] relative flex h-screen w-full overflow-hidden bg-black/[0.96] antialiased md:items-center md:justify-center">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className=" relative z-10  mx-auto w-full max-w-7xl  p-4 pt-20 md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text pb-2 text-center text-4xl font-bold text-transparent md:text-7xl">
          Greetings, I&apos;m Danilo 
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-base font-normal text-neutral-300">
          <DynamicTextGenerateEffect
            words="I'm a coding enthusiast with a knack for turning ideas into
        reality through the magic of software development."
            className=""
          />
        </p>
        <div className="mt-4 flex justify-center gap-5 ">
          <button className="h-10 w-40 rounded-xl border border-transparent bg-black text-sm text-white dark:border-white">
            About me
          </button>
        
          <button className="relative group inline-flex h-10 w-40 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
  My blog  <ChevronRight size='22px' className="transition-transform duration-500 group-hover:translate-x-1" />
  </span>
</button>


        </div>
      </div>
      <BackgroundBeams />
    </div>
   
  );
}

