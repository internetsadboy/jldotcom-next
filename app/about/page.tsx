"use client";

import React, {useState} from 'react';

import Link from 'next/link';
import Image from 'next/image';

import Nav from "../components/Nav";

export default function About({ isMobile }: { isMobile: boolean }) {
  const [showResume, setShowResume] = useState(false);

  return (
    <div id="about-page" className="pl-8 sm:pl-10 min-h-screen flex flex-col p-0 sm:pb-10">
      <div className="gap-2 flex flex-col">
          <div className="flex flex-col">
            <div className="mb-4">
              <div className="mt-4 pt-4 gap-3 flex flex-col">
                <h2 className="text-lg font-semibold">Mugshot</h2>
                <Image
                  src="/about/passport.png"
                  alt="Mugshot"
                  width={200}
                  height={200}
                  className="border border-[10px] border-black"
                />
              </div>
              <div className="mt-4 pt-4 gap-1 flex flex-col">
                <h2 className="text-lg font-semibold">Resume</h2>
                <Link 
                  href="/about/JL_RESUME_SEP_2025.pdf"
                  className="underline underline-offset-8"
                  target="_blank">
                  View my resume
                </Link>
              </div>
              <div className="mt-4 pt-4">
                <h2 className="text-lg font-semibold">Summary</h2>
                <p className="mt-2">
                  This is a list of various job titles and roles that I have held throughout my "career."
                </p>
              </div>
              <h1 className="text-xl my-6 underline underline-offset-8">IN ALPHABETICAL ORDER</h1>
              <ul className="flex flex-col gap-1 mt-5">
                <li>Camera Operator</li>
                <li>Cashier</li>
                <li>Cellar Worker</li>
                <li>Coder</li>
                <li>Crane Operator</li>
                <li>Deckhand</li>
                <li>Farmhand</li>
                <li>Field Operative</li>
                <li>Filmmaker</li>
                <li>Foccacia Handler</li>
                <li>Future Husband</li>
                <li>Furniture Mover</li>
                <li>Line Cook?</li>
                <li>MGTS548</li>
                <li>Photographer</li>
                <li>Retired Uber Driver</li>
                <li>Server</li>
                <li>Video Editor</li>
              </ul>
              
              
            </div>
         </div>
      </div>
    </div>
  );
}