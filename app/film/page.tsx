import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

export default function Film() {
  return (
    <div className="pl-8 sm:pl-10 pt-10">
      <div className="font-semibold text-lg">Documentary</div>
      <ul className="py-4 flex flex-col gap-1">
        <li className="flex items-center max-w-70">
          <Link 
            target="_blank"
            className="hover:underline hover:underline-offset-4" 
            href="https://vimeo.com/772612578">[2021] Sky Boy 
            
          </Link>
          <span className="hidden md:inline ml-auto font-semibold ml-2 courier bg-yellow-200">profile</span>
        </li>
        <li className="flex items-center max-w-70">
          <Link 
            target="_blank"
            className="hover:underline hover:underline-offset-4" 
            href="https://www.youtube.com/watch?v=amSIwDqeFzo">[2020] Only in America 
          </Link>
          <span className="hidden md:inline ml-auto font-semibold ml-2 courier bg-yellow-200">profile</span>
        </li>
        <li className="flex items-center max-w-70">
          <Link 
            target="_blank"
            className="hover:underline hover:underline-offset-4" 
            href="https://onewaytix.film">[2018 / 2019] One Way Tix 
          </Link>
          <span className="hidden md:inline ml-auto font-semibold ml-2 courier bg-green-200">feature</span>
        </li>
      </ul>
      <div className="py-5 font-semibold text-lg">Music Video</div>
      <ul className="py-4 flex flex-col gap-1">
        <li className="flex items-center max-w-96">
          <Link 
            target="_blank"
            className="hover:underline hover:underline-offset-4" 
            href="https://www.youtube.com/watch?v=7ANjebTG3vI">[2021] Crying During Sex, Carol Ades 
          </Link>
          <span className="hidden md:inline ml-auto font-semibold ml-2 courier bg-slate-200">Producer</span>
        </li>
        <li className="flex items-center max-w-96">
          <Link 
            target="_blank"
            className="hover:underline hover:underline-offset-4" 
            href="https://youtu.be/C3hYjI3UnEY?si=sOmAbVytJW_EQb1s">[2020] Starface, Jean Dawson             
          </Link>
          <span className="hidden md:inline ml-auto font-semibold ml-2 courier bg-purple-200">Swing</span>
        </li>
        <li className="flex items-center max-w-96">
          <Link 
            target="_blank"
            className="hover:underline hover:underline-offset-4" 
            href="https://youtu.be/YYUiCP3eMAA?si=3idqPszbafpRC0Kv">[2020] Clear Bones, Jean Dawson 
          </Link>
          <span className="hidden md:inline ml-auto font-semibold ml-2 courier bg-orange-200">Grip/Unit</span>
        </li>
        <li className="flex items-center max-w-96">
          <Link 
            target="_blank"
            className="hover:underline hover:underline-offset-4" 
            href="https://www.youtube.com/watch?v=y94EovoyQw4">[2020] Sabotage, Jawny Utah 
          </Link>
          <span className="hidden md:inline ml-auto font-semibold ml-2 courier bg-orange-200">Unit</span>
        </li>
        <li className="flex items-center max-w-96">
          <Link 
            target="_blank"
            className="hover:underline hover:underline-offset-4" 
            href="https://www.youtube.com/watch?v=AP67Gb1v1zE">[2020] Super Bad Mantra, Jawny Utah 
          </Link>
          <span className="hidden md:inline ml-auto font-semibold ml-2 courier bg-orange-200">Unit</span>
        </li>
        <li className="flex items-center max-w-96">
          <Link 
            target="_blank"
            className="hover:underline hover:underline-offset-4" 
            href="https://youtu.be/6CB5BzBNKYY?si=5WwNN0MhaB5swrhJ">[2020] Power Freaks, Jean Dawson  
          </Link>
          <span className="hidden md:inline ml-auto font-semibold ml-2 courier bg-red-200">PA</span>
        </li>
        <li className="flex items-center max-w-96">
          <Link 
            target="_blank"
            className="hover:underline hover:underline-offset-4" 
            href="https://youtu.be/elSZfsrjOxQ?si=N8JHy_PS_lYfWEtS">[2019] Bruise Boy, Jean Dawson 
          </Link>
          <span className="hidden md:inline ml-auto font-semibold ml-2 courier bg-red-200">PA</span>
        </li>
      </ul>
      <div className="py-5 font-semibold text-lg">Other</div>
      <ul className="py-4 flex flex-col gap-1">
        <li className="flex items-center max-w-96">
          <div>[2023] After Shock (feature)</div>
          <span className="hidden md:inline ml-auto font-semibold ml-2 courier bg-red-200">Asst. Carpenter</span>
        </li>
        <li className="flex items-center max-w-96">
          <div>[2022] Mastercard (commercial)</div>
          <span className="hidden md:inline ml-auto font-semibold ml-2 courier bg-red-200">Set Decorator</span>
        </li>
      </ul>
    </div>
  );
}
