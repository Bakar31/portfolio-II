import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Bakar31"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/abu-bakar-siddik31"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:abubakar1808031@gmail.com">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <p className="mt-4 text-center text-sm text-gray-600">
          © 2024 Abu Bakar Siddik. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
