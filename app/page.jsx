import SideBar from './components/SideBar';
import Hero from './components/Hero';
const page = () => {
  return (
    <main className='relative flex min-h-screen'>
      <SideBar />
      <Hero />
    </main>
  );
};

export default page;
