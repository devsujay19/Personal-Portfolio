"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I started my development journey since I was{" "}
        <span className="font-medium"> 9 years of age</span>, I decided to pursue my
        passion for programming. I want to be enrolled in a coding bootcamp and want to learn{" "}
        <span className="font-medium">Rust Development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          MongoDB, ExpressJS, React, NodeJS and NextJS.
        </span>
        . I am also familiar with TypeScript and Swift (By the way, TypeScript is from Microsoft and Swift is from Apple Inc.). I am always looking to
        learn new technologies. I am currently practicing Java language to participate in a{" "}
        <span className="font-medium">Hackathon (also known as a hack day, hackfest, datathon or codefest; a portmanteau of "hacking" and "marathon")</span> as a young Software
        Developer or a Software Engineer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching programming tutorials, and playing with my own creations whatever that's a physical or digital creation. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        teaching my students about{" "}
        <span className="font-medium">JavaScript, ReactJS, HTML, CSS, Java, C++, C, C#, Kotlin, Flutter and React-Native.</span>. I'm also
        teaching my students - "How to use ReactJS with ESLint and NextJS".
      </p>
    </motion.section>
  );
}
