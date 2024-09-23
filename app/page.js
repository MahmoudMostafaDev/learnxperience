'use client';
import ThemeDropdown from './components/ThemeDropdown'; // Adjust path if needed

export default function Home() {
  return (
    <div className='text-3xl font-bold mb-4 theme-light:text-gray-800 theme-dark:text-gray-200 '>
      {Array.from({ length: 40 }, (_, index) => (
        <h1 key={index}>Scroll Test</h1>
      ))}
    </div>
  );
}