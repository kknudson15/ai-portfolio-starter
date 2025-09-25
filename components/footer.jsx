export default function Footer() {
    return (
      <footer className="py-10 text-center text-gray-400 dark:text-gray-500 text-sm border-t border-gray-200 dark:border-gray-700 z-10">
        © {new Date().getFullYear()} AI Portfolio. Built with Next.js & Tailwind.
      </footer>
    );
  }