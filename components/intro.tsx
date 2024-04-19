"use client";

import Image from "next/image";
import portrait from "@/IMG/FB_IMG_1689618305861.jpg";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
             // src="https://yt3.googleusercontent.com/7kqJKvSLQkWj_QZ-AtPLWDK845w6bPrz89euEGzojML2uTi3No1wFReQbAzDV5TXcYNMXUZvZno=s176-c-k-c0x00ffffff-no-rj"
              src="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-1/348581780_2649566235182318_7197239651510517941_n.jpg?stp=c0.27.160.160a_dst-jpg_p160x160&_nc_cat=103&ccb=1-7&_nc_sid=5fac6f&_nc_ohc=Q9XSijYx_TYAX9qJPLZ&_nc_ht=scontent.fccu3-1.fna&oh=00_AfDRwnd9HPOIahnlUNvJ-T3MtG0Vm8Oa2JoJ1FuVRDzxqw&oe=6515DA74"
              alt="Sujay's Portrait."
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-30 w-30 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello there! I'm Sujay Mukherjee</span> and I'm a{" "}
        <span className="font-bold">MERN-Stack + MEAN-Stack Developer and Android + iOS + Desktop Application Developer</span> with{" "}
        <span className="font-bold">5 years</span> of experiences. I enjoy
        building <span className="italic">Websites & Cross-Platform Applications</span>. Currently, my focus is on{" "}
        <span className="underline">Rust and ReactJS (NextJS)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/Summarized-CV-From-Portfolio-of-Sujay.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com"
          target="_blank"
          rel="noopener"
          title="LinkedIn"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/devsujay19"
          target="_blank"
          rel="noopener"
          title="GitHub"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
