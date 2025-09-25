import { Button } from './ui/button';
import { useRouter } from 'next/router';

export default function Nav() {
  const router = useRouter();

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50">
      <span className="text-xl font-semibold tracking-tight cursor-pointer" onClick={() => router.push('/')}>
        AI Portfolio
      </span>
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => router.push('/projects')}>Projects</Button>
        <Button variant="ghost" onClick={() => router.push('/resume')}>Resume</Button>
        <Button variant="ghost" onClick={() => router.push('/publications')}>Publications</Button>
        <Button variant="ghost" onClick={() => router.push('/contact')}>Contact</Button>
      </div>
    </nav>
  );
}