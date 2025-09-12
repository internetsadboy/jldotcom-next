import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

export default function Code() {
  return (
    <div className="pl-10 font-sans flex flex-col min-h-screen gap-2 tracking-[1px]">
      <section className="flex flex-col gap-8 mb-8">
        <h1 className="text-[28px] sm:text-3xl mr-2 mb-0 pt-10 courier font-bold">
          {`console.log('`}
          <span className="bg-blue-700 text-[lawngreen] px-2">CODE</span>
          {`')`}
        </h1>
        <ul className="gap-8 flex flex-col">
          <li className="sm:text-md">
            <Link 
              className="timestamp flex mb-2"
              href="https://notanotherweddingvideo.com"
              target="_blank"
            >
                NOT ANOTHER WEDDING VIDEO
            </Link>
            <div className="flex flex-col gap-1 mt-4">
              <p>website for my wedding video business</p>
              <p>next, typescript, tailwind</p>   
              <p className="font-semibold underline underline-offset-8">sept 2025</p>  
            </div>
            
          </li>
          <li className="sm:text-md">
            <Link 
              className="timestamp flex mb-2"
              href="https://jaredlamont.com"
              target="_blank"
              >
                JL DOT COM
            </Link>
            <div className="flex flex-col gap-1">
              <p>personal website</p>
              <p>next, typescript, tailwind</p>
              <p className="font-semibold underline underline-offset-8">sept 2025</p>
            </div>
          </li>
          <li className="sm:text-md">
            <Link 
              className="timestamp flex mb-2"
              href="https://onewaytix.film">
               ONE WAY TIX
            </Link>
            <div className="flex flex-col gap-1">
              <p>documentary landing page</p>
              <p>next, typescript, tailwind</p>
              <p className="font-semibold underline underline-offset-8">august 2025</p>
            </div>
          </li>
        </ul>
      </section>
      <section className="sm:text-md flex flex-col gap-4">
        <h1 className="text-3xl max-[430px]:text-2xl mb-6"><span className="tracking-[4px] mr-2">PAYPAL</span> [ 2015, 2017 ]</h1>
        <h2 className="sm:text-md underline underline-offset-6">TEAMS</h2>
        <div className="flex flex-col gap-1">
          <p>Application Infrastructure</p>
          <p>Merchant Servicing</p>
          <p>Consumer P2P (send money)</p>
        </div>
        <p><span className="font-semibold ">Node</span>, js, html, css, HTTP, UI/UX Engineering</p>
        <div className="flex flex-wrap gap-4 mt-6">
          <Link 
            href="https://www.linkedin.com/in/jaredlamont" 
            target="_blank"
            className="timestamp"
          >
            LINKEDIN
          </Link>
          <Link 
            href="https://github.com/internetsadboy" 
            target="_blank"
            className="timestamp"
          >
            GITHUB
          </Link>
        </div>
      </section>
    </div>
  );
}