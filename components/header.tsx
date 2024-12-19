"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold">
            Abu Bakar Siddik
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#skills">Skills</Link>
              </li>
              <li>
                <Link href="#experience">Experience</Link>
              </li>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <Link href="#research">Research</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <Button variant="outline" className="hidden md:inline-flex">
            Resume
          </Button>
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link href="#about" onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" onClick={() => setIsMenuOpen(false)}>
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#experience" onClick={() => setIsMenuOpen(false)}>
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#projects" onClick={() => setIsMenuOpen(false)}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#research" onClick={() => setIsMenuOpen(false)}>
                  Research
                </Link>
              </li>
              <li>
                <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </li>
              <li>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1kFYiBmmJiPitBoqm-rnLVQfaugMuIg-n/view?usp=sharing",
                      "_blank"
                    )
                  }
                >
                  Resume
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
