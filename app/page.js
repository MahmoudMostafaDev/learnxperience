'use client';
import ThemeDropdown from './components/ThemeDropdown'; // Adjust path if needed

export default function Home() {
  return (
    <div>
      {Array.from({ length: 40 }, (_, index) => (
        <h1 key={index}>Scroll Test</h1>
      ))}
    </div>
  );
}