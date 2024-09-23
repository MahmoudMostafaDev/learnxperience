import Image from "next/image";

export default function Home() {
  return (
    <div>
      {Array.from({ length: 40 }, (_, index) => (
        <h1 key={index}>Scroll Test</h1>
      ))}
    </div>
  );
}