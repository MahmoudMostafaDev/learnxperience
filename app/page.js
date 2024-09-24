'use client';
import SideBar from './components/Sidebar';

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div>
        <SideBar />
      </div>
      <div className='flex-1 p-4 text-xl font-normal mb-4 theme-light:text-gray-800 theme-dark:text-gray-200'>
        {Array.from({ length: 40 }, (_, index) => (
          <h1 key={index}>Scroll Test</h1>
        ))}
      </div>
    </main>
  );
}