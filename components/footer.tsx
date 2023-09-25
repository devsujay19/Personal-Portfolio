import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 dark:text-slate-50">
      <small className="mb-2 block text-xs">
        &copy; 2050 Sujay. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this Website:</span> Built with
        ReactJS and NextJS (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend.
      </p>
    </footer>
  );
}
