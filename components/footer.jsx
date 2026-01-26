import { Linkedin, Github, FileText } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/kyle-knudson/',
      icon: Linkedin,
      label: 'LinkedIn',
    },
    {
      href: 'https://github.com/kknudson15',
      icon: Github,
      label: 'GitHub',
    },
    {
      href: 'https://medium.com/@kyle.knudson2015',
      icon: FileText,
      label: 'Medium',
    },
  ];

  return (
    <footer className="w-full py-12 px-6 border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm z-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        {/* Tagline */}
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-md">
          Building AI-powered solutions and leading data engineering teams to transform how organizations work with data.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-[#0071e3] dark:hover:text-[#0071e3] transition-colors"
              aria-label={link.label}
            >
              <link.icon size={20} />
              <span className="hidden sm:inline text-sm font-medium">{link.label}</span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-gray-400 dark:text-gray-500 text-sm">
          © {new Date().getFullYear()} Kyle Knudson. Built with Next.js & Tailwind.
        </p>
      </div>
    </footer>
  );
}