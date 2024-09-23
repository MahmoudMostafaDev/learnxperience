'use client';
import ThemeDropdown from './components/ThemeDropdown'; // Adjust path if needed

export default function Home() {
  return (
    <div className="container flex flex-col items-start p-6">
      <h1 className="text-3xl font-bold mb-4">Next.js Multiple Themes Example</h1>

      <div className="flex items-center">
        <ThemeDropdown />
      </div>

      <p className="mt-4 text-xl">
        Use the theme switcher to change the appearance of this page!
      </p>
    </div>
  );
}
