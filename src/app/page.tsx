import dynamic from "next/dynamic";


const HomeSection = dynamic(() => import('./home/page'))

export default function Home() {
  return (
  <main>
    <HomeSection />
  </main>
  );
}
