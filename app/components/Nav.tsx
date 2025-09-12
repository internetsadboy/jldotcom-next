import React from "react";

import Link from "next/link";
import Image from "next/image";

export default function Nav({ isMobile, className }: { isMobile: boolean, className: string  }) {
    return (
        <header className="flex flex-col gap-8">
            <div className="justify-center bg-black border py-1">
                <h1 className="pl-8 sm:pl-10 text-2xl font-semibold text-white"><Link href="/">JL DOT COM</Link></h1>
            </div>
            <div className={`${className} pl-8 sm:pl-10 flex flex-col pr-8 gap-[4px]`}>
                <Link
                    className="w-fit flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="/about"
                >
                    ABOUT
                </Link>
                <Link
                    className="w-fit flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="/code"
                >
                    CODE
                </Link>
                <Link
                    className="w-fit flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="/film"
                >
                    FILM
                </Link>
                <Link
                    className="w-fit flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://onewaytix.film"
                    target="_blank"
                >
                    ONE WAY TIX
                </Link>
            </div>
        </header>
    )
}